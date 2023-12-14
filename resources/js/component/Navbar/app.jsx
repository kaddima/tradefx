import React, {useState} from 'react'


    const MarketsContents = ()=>{

        return (

            <div>
                <h1 className='text-xl font-extrabold mb-10'>Markets</h1>
                <ul className='space-y-4'>
                    <li>
                        <a href='/world-indices'>Indices</a>
                    </li>
                    <li>
                        <a href='/forex'>Forex</a>
                    </li>
                    <li>
                        <a href='/cryptocurrencies'>Cryptocurrencies</a>
                    </li>
                    <li>
                        <a href='/shares'>Shares</a>
                    </li>
                </ul>
            </div>
        )
    }

    const ProductsContents = ()=>{

        return (
            <div>
                <h1 className='text-xl font-extrabold mb-10'>Products</h1>
                <div className='flex justify-between'>
                    <div>
                        <ul className='space-y-4'>
                            <li className='text-sm font-bold'>
                                products
                            </li>
                            <li>
                              <a href='cfd-trading'>CFD trading</a>  
                            </li>
                            <li>
                            <a href='/charges-and-fees'>Charges and fees</a>  
                            </li>
                        </ul>
                    </div>
                    <div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }

    const NewsContents = ()=>{

        return(

            <div>
                <h1 className='text-xl font-extrabold mb-10'>News and Analysis</h1>
                <div className='flex justify-between'>
                    <div>
                        <ul className='space-y-4'>
                            <li className='text-sm font-bold'>News</li>
                            <li><a>Analysis</a></li>
                            <li><a>Insights</a></li>
                            <li><a>Explainers</a></li>
                            <li><a></a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-4'>
                            <li className='text-sm font-bold'>Market updates</li>
                            <li>Webinars</li>
                            <li>Economic Calender</li>
                        
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }

    const LearnToTradeContents = ()=>{

        return (
            <div>
            <h1 className='text-xl font-extrabold mb-10'>Learn to trade</h1>
            <div className='flex justify-between flex-wrap'>
                <div className='mb-5'>
                    <ul className='space-y-4'>
                        <li className='text-sm font-bold'>Popular markets guides</li>
                        <li><a href="/trade-stocks">Shares trading guide</a></li>
                        <li><a href='/trade-forex'>Forex trading guide</a></li>
                        <li><a href='/trade-crypto'>Cryptocurrency trading guide</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-sm font-bold'>Trading guides</li>
                        <li><a href='margin-trading'>What is a margin?</a></li>
                        <li><a href='what-is-cfd-trading'>CFD trading guide</a></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }


    const AboutContents = ()=>{
        return (
            <div>
            <h1 className='text-xl font-extrabold mb-10'>About</h1>
            <div className='flex justify-between'>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-sm font-bold'><a href="/about-us">About us</a></li>
                        <li><a href="/regulations">Regulations</a></li>
                        <li><a href="/is-hlytop-safe">is hlytopinvestments.com safe?</a></li>
                        <li><a href="/compliance">Compliance</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-sm font-bold'>Partner with us</li>
                        <li><a href="/referral-programme">Referral programme</a></li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </div>
        )   
    }


    const NavContent = (value)=>{

        switch (value) {
            case 1:
                
                return <MarketsContents/>;
            case 2:
            
                return <ProductsContents/>;
            // case 3:
            
            // return <NewsContents/>;
            case 4:
            
            return <LearnToTradeContents/>;
            case 5:
            
            return <AboutContents/>;
        
            default:
                break;
        }
    }

const app = () => {

    const [navContent, setNavContent] = useState(1)
    const [navContentVisibility, setNavContentVisibility] = useState('hidden')


  return (
    <div className='w-screen h-screen md:h-auto bg-white flex flex-col'>
        <div className='w-full md:flex md:w-10/12 mx-auto relative overflow-auto pt-5 h-3/6 md:px-0'>
            <div className='w-4/5 md:w-2/5 absolute z-[1000] md:static font-bold text-sm top-0 left-0 px-2' >
                <ul className=''>
                    <li className='p-4 bg-gray-100 cursor-pointer flex justify-between items-center rounded-lg' 
                    style={navContent === 1 ? {backgroundColor:'black', color:'#fff'} : {}} 
                    onClick={()=>{setNavContent(1); setNavContentVisibility('block')}}>
                        <p>Markets</p>
                        <span className='material-icons'>chevron_right</span>
                    </li>
                    <li className='p-4 mt-3 bg-gray-100 cursor-pointer flex justify-between items-center rounded-lg' 
                        style={navContent === 2 ? {backgroundColor:'black', color:'#fff'} : {}} 
                        onClick={()=>{setNavContent(2); setNavContentVisibility('block')}}>
                        <p>Products</p>
                        <span className='material-icons'>chevron_right</span>
                    </li>
                    {/* <li 
                        className='p-4 mt-3 bg-gray-100 cursor-pointer flex justify-between items-center rounded-lg'
                        style={navContent === 3 ? {backgroundColor:'black', color:'#fff'} : {}} 
                        onClick={()=>{setNavContent(3); setNavContentVisibility('block')}}>
                        <p>News and Analysis</p>
                        <span className='material-icons'>chevron_right</span>
                    </li> */}
                    <li 
                        className='p-4 mt-3 bg-gray-100 cursor-pointer flex justify-between items-center rounded-lg'
                        style={navContent === 4 ? {backgroundColor:'black', color:'#fff'} : {}} 
                        onClick={()=>{setNavContent(4); setNavContentVisibility('block')}}>
                        <p>Learn to trade</p>
                        <span className='material-icons'>chevron_right</span>
                    </li>
                    
                    <div 
                        className='p-4 mt-3 w-full bg-gray-100 cursor-pointer rounded-lg'
                        style={navContent === 5 ? {backgroundColor:'black', color:'#fff'} : {}} 
                        onClick={()=>{setNavContent(5); setNavContentVisibility('block')}}>
                            <div className='flex justify-between items-center'>
                               <p>About</p>
                                <span className='material-icons'>chevron_right</span> 
                            </div>
                        
                    </div>
                </ul>
            </div>

            <div className={`w-4/5 h-full md:flex-1 ${navContentVisibility} absolute top-0 z-[2000] md:static md:block bg-white px-10 overflow-auto`}>
               
                <div className='mb-5 p-2 w-10 h-10 rounded-full hover:bg-gray-400 
                md:hidden cursor-pointer'
                    
                onClick={()=>{
                    setNavContentVisibility('hidden')
                    setNavContent(0);
                     }} >
                       
                    <span className='material-icons'>arrow_back</span>
                </div>           
                
                {NavContent(navContent)}

            </div>
        </div>
      
        <div className='w-10/12 mx-auto pt-2'>
            <a href="/signin" className='w-3/4 p-2 rounded-lg border block text-center mx-auto font-bold hover:bg-orange-200'>Sign in</a>
            <a href="/register" className='w-3/4 p-2 rounded-lg bg-orange-500 block mx-auto text-center mt-5 
            text-gray-200 font-bold hover:bg-orange-400'>Register</a>
        </div>
        <div className='mt-5'>
            <p className='text-center text-xs font-semibold'>Also you can contact us: <a href='mailto:support@hlytopinvestments.com' className='pl-4'>support@hlytopinvestments.com</a></p>
        </div>
    </div>
  )
}

export default app