$(document).ready(function(){

    // Event listen for Save btn clck
    $('.saveBtn').on('click', function(){
        
        let timeSave = $(this).parent().attr('id')
        let descValue = $(this).siblings('.description').val();

        // console.log(timeSave);
        // console.log(descValue);

        localStorage.setItem(timeSave, descValue);

        $('.notification').addClass('show');


        setTimeout(function(){
            $('.notification').removeClass('show');
        }, 3000);

    })
        // Past/Present/Future function

    function hourUpdate(){
        let currentHour = moment().hours();

        for(let i=0; i < $('.time-block').length; i++){
            let hour = parseInt($('.time-block')[i].getAttribute('id').split('-')[1])
            if(hour < currentHour) {
                $('.time-block')[i].classList.add('past')
            } else if(hour === currentHour){
                $('.time-block')[i].classList.add('present')
            } else {
                $('.time-block')[i].classList.add('future')
            }
        }

    }

    hourUpdate();

    let interval = setInterval(hourUpdate, 15000);

    $('hour-8.description').val(localStorage.getItem('hour-8'))

    $('#currentDay').text(moment().format('dddd, MMMM, Do'))

})