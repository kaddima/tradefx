
$(function() {
   
    $('.menu-button').on('click',function(){


        $('#nav').toggle()
        if($('#nav').is(':visible')){

            $('.menu-button').find('span').html('close')
        }else{
            $('.menu-button').find('span').html('menu')
        }
    })

    function countDown(){
        let date = new Date()
        let t = setInterval(function () {
            var now = new Date().getTime();
            // Set the date we're counting down to
            var countDownDate = new Date(date);

            countDownDate.setMinutes(countDownDate.getMinutes() + 2);
            countDownDate.setSeconds(countDownDate.getSeconds() + 59);

            countDownDate = countDownDate.getTime();

            // var countDownDate = now + 1000*60*60*24;
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            let htmlMSG = 'Resend verification link in '+minutes +'m '+seconds+"s"

            if (distance < 1){
                // show the send eTCC btn
                $('#resend-msg').html('')
                $('#resend-email-btn').attr('disabled',false)
                $('#resend-email-btn').text('Resend email')
                clearInterval(t)
                return
            }

            $('#resend-msg').html(htmlMSG)

        }, 1000)
    }

    $("#resend-email-btn").click((e)=>{

        countDown()
        let emailData = $("#email").text()
        let params = {email:emailData}

        //disable the resend button and countdown
        $('#resend-email-btn').attr('disabled',true)
        $('#resend-email-btn').text('Sending...')

        // if success msg is visible hide it

        if($('#sent-success').is(':visible')){

            $('#sent-success').hide()
        }

        $.ajax(
                {url : '/resend-verification-email',
                    type: 'POST',
                    data: $.param(params),
                    dataType: 'json',
                    headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')},
                    error : function(xhr, textStatus, error){

                        //Dashboard.notify('An error occurred');
                    //console.log(xhr.responseText)
                       // alert(xhr.responseText);
                        $('#resend-email-btn').attr('disabled',false);

                    },
                    success : function(data){
                        
                        if(data.success == 'redirect'){
                            location.href = '/signin'
                            return
                        }
                        

                        //notify email sent success
                        $('#sent-success').fadeIn()
                        $('#resend-email-btn').text('Sent')
                    }
                })
    })
   
})
