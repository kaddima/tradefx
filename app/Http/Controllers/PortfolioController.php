<?php

namespace App\Http\Controllers;

use Dflydev\DotAccessData\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PortfolioController extends Controller
{
    public function getAccountBalance($user_id){

        return DB::table('accounts')
            ->where(['user_id'=>$user_id])
            ->first();
    }

    public function getPortfolio($id){

        return DB::table('portfolio')
            ->where(['id'=>$id])
            ->first();
    }

    public function show(Request $request){

        $user_id = auth()->user()['id'];

        //if accessed from admin page
        $id = @$request->get('user_id');

        //get all portfolio
        $portfolios = DB::table('portfolio')
        ->where(['user_id'=> isset($id) ? $id : $user_id])
        ->get();

        //get all tasks for the portfolio pertaining to  user
        $tasks = DB::table('tasks')
            ->where(['user_id'=>$user_id])
            ->get();

        //get user balance
        $balance = $this->getAccountBalance(isset($id) ? $id : $user_id);

        return json_encode(['status'=>'',
            'data'=>[
                'portfolios'=>$portfolios,
                'balance'=>$balance,
                'tasks'=>$tasks
            ]
        ]);
    }

    public function createPortfolio(Request $request){

        $user_id = auth()->user()['id'];

        //if accessed from admin page
        $id = @$request->get('user_id');

        $response = [];

        $asset_id = $request->get('id');
        $asset_name = $request->get('asset_name');
        $entry = $request->get('entry');
        $last_price = $request->get('last_price');
        $size = $request->get('size');
        $type = $request->get('type');
        $leverage = $request->get('leverage');
        $margin = $request->get('margin');
        $profit_loss = $request->get('profit_loss');

        //create data column to insert
        $column = [
            'size'=>$size,
            'asset_name'=>$asset_name,
            'user_id'=>isset($id) ? $id : $user_id,
            'asset_id'=>$asset_id,
            'created_by'=>$user_id,
            'leverage'=>$leverage,
            'entry'=>$entry,
            'type'=>$type,
            'last_price'=>$last_price,
            'margin'=>$margin,
            'profit_loss'=>$profit_loss,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s')
        ];

        //get the user account balance
        $acct_balance = $this->getAccountBalance(isset($id) ? $id : $user_id);

        if($acct_balance->available > $margin){

            //add asset to the portfolio's table
            if (DB::table('portfolio')->insert($column)){

                //add the activities
                $column = [
                    'size'=>$size,
                    'market'=>$asset_name,
                    'user_id'=>isset($id) ? $id : $user_id,
                    'asset_id'=>$asset_id,
                    'position_type'=>'positions',
                    'triggered_by'=>isset($id) ? 'account mgr.':'user',
                    'type'=>$type,
                    'price'=>$last_price,
                    'status'=>'position opened',
                    'result'=>$profit_loss,
                    'created_at'=>date('Y-m-d H:i:s'),
                ];

                DB::table('activities')->insert($column);

                // update the user's account
                $available = $acct_balance->available - $margin;

                DB::table('accounts')
                    ->where(['user_id'=>isset($id) ? $id : $user_id])
                    ->update(['available'=>$available]);

                //retrieve all portfolio
                $portfolios = DB::table('portfolio')
                    ->where(['user_id'=>isset($id)? $id : $user_id])
                    ->get();

                //retrieve all activities
                $transactions = DB::table('activities')
                    ->where(['user_id'=>isset($id) ? $id : $user_id])
                    ->limit(50)
                    ->get();

                $response = [
                    'status'=>1,
                    'data'=>[
                        'portfolios'=>$portfolios,
                        'balance'=>['available'=>$available],
                        'activities'=>$transactions
                    ]
                ];
            }
        }
        else{
            $response = [
                'status'=>0,
                'data'=>[
                    'portfolios'=>[]
                ]
            ];
        }

        //return all portfolio for the user
        return json_encode($response);

    }

    public function closePortfolio(Request $request){

        $user_id = auth()->user()['id'];

        //if accessed from admin page
        $id = @$request->get('user_id');

        $response = [];
        $portfolio_id = $request->get('portfolio_id');

        //check if there is task linked to this portfolio if there is prevent close
        $task = DB::table('tasks')
            ->where(['portfolio_id'=>$portfolio_id])
            ->first();

        $task = (array)$task;

        if (!empty($task)){

            return json_encode([
                'status'=>0,
                'data'=>[]
            ]);

        }else{

            //get current user account
            $acct_balance = $this->getAccountBalance(isset($id) ? $id : $user_id);

            //get the users portfolios
            $portfolios = DB::table('portfolio')
                ->where(['user_id'=>isset($id) ? $id : $user_id])
                ->get()->toArray();

            $newPortfolios = [];
            //return gettype($portfolios);

            //get the portfolio to close
            $target = [];

            foreach ($portfolios as $key => $portfolio){

                //set thr target portfolio and create a new portfolio
                // with the target abscent
                if ($portfolio->id == $portfolio_id){

                    $target = $portfolio;

                    //unset($portfolios[$key]);

                    continue;
                }

                $newPortfolios[] = $portfolio;

            }

            //delete or close the position
            DB::table('portfolio')
                ->where(['id'=>$portfolio_id])
                ->delete();

            //create the closed position
            $column = [
                'size'=>$target->size,
                'market'=>$target->asset_name,
                'user_id'=>isset($id) ? $id : $user_id,
                'asset_id'=>$target->asset_id,
                'position_type'=>'positions',
                'triggered_by'=>isset($id)?'account mgr.': 'user',
                'type'=>$target->type,
                'price'=>$target->last_price,
                'status'=>'position closed',
                'result'=>$target->profit_loss,
                'created_at'=>date('Y-m-d H:i:s'),
            ];

            DB::table('activities')->insert($column);

            //get all transactions
            //retrieve all activities
            $transactions = DB::table('activities')
                ->where(['user_id'=>isset($id) ? $id : $user_id])
                ->orderBy('created_at','desc')
                ->limit(50)
                ->get();

            //calculate profit or loss and add to available balance
            $profit_loss = $target->margin + $target->profit_loss;

            //update the account
            $available = $acct_balance->available + $profit_loss;

            //if the number of portfolio is greater than 1 update available else update
            // funds and equity as well

            if (count($portfolios) > 1){

                $acct_balance = ['available'=> $available];

            }else{
                $acct_balance = ['available'=>$available,
                    'funds'=>$available
                ];
            }

            // update the users account
            DB::table('accounts')
                ->where(['user_id'=>isset($id) ? $id : $user_id])
                ->update($acct_balance);

            $acct_balance = $this->getAccountBalance(isset($id) ? $id : $user_id);

            return json_encode([
                'status'=>1,
                'data'=>[
                    'portfolios'=>$newPortfolios,
                    'balance'=>$acct_balance,
                    'activities'=>$transactions,

                ]
            ]);

        }
    }

    /**
     * this generate profit or loss for an opened position

     */
    public function generateProfitLoss(Request $request){
        //logged on user
        $id = auth()->user()['id'];
        $data = $request->all();

        $user_id = $data['user_id'];
        $amount = $data['amount'];
        $portfolio_id = $data['portfolio_id'];
        $profit_loss = $data['profit_loss'];
        $generatype = $data['type'];


        // get the portfolio
        $portfolio = DB::table('portfolio')
        ->where(['id'=>$portfolio_id])->first();


        if ($generatype === 'automatic'){

            $duration = $data['duration'];

            $column = ['user_id'=>$user_id,
                'portfolio_id'=>$portfolio_id,
                'market'=>$portfolio->asset_name,
                'created_by'=>$id,
                'amount'=>$profit_loss==='loss'?-$amount:$amount,
                'profit_loss'=>$profit_loss,
                'started_at'=>date('Y-m-d H:i:s'),
                'end_at'=>date('Y-m-d',strtotime($duration))
            ];

            // check if there is a task available for that portfolio

            $task = DB::table('tasks')
                ->where(['portfolio_id'=>$portfolio_id])
                ->first();

            if (isset($task->id)){
                return json_encode([
                    'status'=>0,
                    'data'=>[

                    ]
                ]);
            }

            if (DB::table('tasks')->insert($column)){

                //get all tasks
                $tasks = DB::table('tasks')
                ->where(['user_id'=>$user_id])->get();

                return json_encode([
                    'status'=>1,
                    'data'=>[
                        'tasks'=>$tasks
                    ]
                ]);
            }

            //run task for the user

        }else{
            //update the portfolios date if present else leave same

            $column = [];
            if (!empty($data['backdate']) && !empty($data['amount'])){
                $newdate = date('Y-m-d',strtotime($data['backdate']));
                $column['created_at'] = $newdate;

                if ($profit_loss === 'profit'){

                    $profit_loss = $portfolio->profit_loss + $amount;
                    $column['profit_loss'] = $profit_loss;
                }else{
                    $profit_loss = $portfolio->profit_loss - $amount;
                    $column['profit_loss'] = $profit_loss;
                }

                // code fot back dating
            }elseif (!empty($data['backdate']) && empty($data['amount'])){
                $newdate = date('Y-m-d',strtotime($data['backdate']));
                $column['created_at'] = $newdate;
            }
            // updating just portfolio profit
            elseif (empty($data['backdate']) && !empty($data['amount'])){
                if ($profit_loss === 'profit'){

                    $profit_loss = $portfolio->profit_loss + $amount;
                    $column['profit_loss'] = $profit_loss;
                }else{
                    $profit_loss = $portfolio->profit_loss - $amount;
                    $column['profit_loss'] = $profit_loss;
                }
            }

             //update profit loss if present else leave
            DB::table('portfolio')
            ->where(['id'=>$portfolio_id])
            ->update($column);

            // get all portfolio
            $portfolios = DB::table('portfolio')
                ->where(['user_id'=>$user_id])
                ->get();

            return json_encode(['status'=>1,
                'data'=>[
                    'portfolios'=>$portfolios
                ]
            ]);

        }
    }

    public function getTasks(){
        $user_id = request()->get('user_id');

        //fetch the tasks
        $tasks = DB::table('tasks')->where(['user_id'=>$user_id])
            ->orderBy('end_at')
            ->limit(50)
            ->get();



        return json_encode([
            'status'=>1,
            'data'=>[
                'tasks'=>$tasks
            ]
        ]);
    }

    public function closeTask(Request $request){

        $data = $request->all();

        $user_id = $data['user_id'];
        $task_id = $data['task_id'];
        $portfolio_id = $data['portfolio_id'];
        $amount = $data['amount'];


        $newPortfolios = [];
        $newTasks = [];

        //get all tasks
        $tasks = DB::table('tasks')
            ->where(['user_id'=>$user_id])
            ->get();

        foreach ($tasks as $key => $task){
            if ($task->id == $task_id){

                DB::table('tasks')->where(['id'=>$task->id])
                    ->delete();
                continue;
            }

            $newTasks[] = $task;

        }
        //get the portfolio
        $portfolios = DB::table('portfolio')
            ->where(['user_id'=>$user_id])
            ->get();

        foreach ($portfolios as $key => $portfolio){

            //set thr target portfolio and create a new portfolio // with the target abscent
            if ($portfolio->id == $portfolio_id){

                $portfolio->profit_loss = $portfolio->profit_loss + $amount;

                DB::table('portfolio')
                    ->where(['id'=>$portfolio_id])
                    ->update(['profit_loss'=>$portfolio->profit_loss]);

                $newPortfolios[] = $portfolio;
                continue;
            }

            $newPortfolios[] = $portfolio;

        }

        $response = [
            'status'=>1,
            'data'=>[
                'portfolios'=>$newPortfolios,
                'tasks'=>$newTasks,

            ]
        ];

        return json_encode($response);

    }

    public function deletePortfolio(Request $request){

        $portfolio_id = $request->get('portfolio_id');
        $user_id = $request->get('user_id');

        // holds true if portfolios has tasks
        $withTask = 0;
        $tasks = [];

        // get the portfolio
        $portfolio = $this->getPortfolio($portfolio_id);
        //delete the portfolio too
        DB::table('portfolio')->where(['id'=>$portfolio_id])->delete();

        //check if there is a task available for the portfolio
        $task = DB::table('tasks')
            ->where(['portfolio_id'=>$portfolio_id])
            ->first();

        if (isset($task)){

            //delete task
            DB::table('tasks')->where(['id'=>$task->id])->delete();
            $withTask = 1;
            //get the users tasks
            $tasks = DB::table('tasks')->where(['user_id'=>$user_id])->get();
        }

        //get the users account balance
        $balance = $this->getAccountBalance($user_id);
        //calculate new balance by add the margin to available funds
        $available = $balance->available +  $portfolio->margin;

        //update the user balance
        DB::table('accounts')
            ->where(['user_id'=>$user_id])
            ->update(['available'=>$available]);

        $balance->available = $balance->available +  $portfolio->margin;

        //get  the remain portfolios
        $portfolios = DB::table('portfolio')->where(['user_id'=>$user_id])->get();

        return json_encode([
            'status'=>1,
            'withTask'=>$withTask,
            'data'=>[
                'portfolios'=>isset($portfolios) ? $portfolios : [],
                'balance'=>$balance,
                'tasks'=>$tasks
            ]]);
    }


}
