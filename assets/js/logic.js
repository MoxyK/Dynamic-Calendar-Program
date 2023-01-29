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
        }, 3500);

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

    hourUpdate()
        
    let interval = setInterval(hourUpdate, 15000);

        $('#hour-8.description').val(localStorage.getItem('hour-8'))
        $('#hour-9.description').val(localStorage.getItem('hour-9'))
        $('#hour-10.description').val(localStorage.getItem('hour-10'))
        $('#hour-11.description').val(localStorage.getItem('hour-11'))
        $('#hour-12.description').val(localStorage.getItem('hour-12'))
        $('#hour-13.description').val(localStorage.getItem('hour-13'))
        $('#hour-14.description').val(localStorage.getItem('hour-14'))
        $('#hour-15.description').val(localStorage.getItem('hour-15'))
        $('#hour-16.description').val(localStorage.getItem('hour-16'))
        $('#hour-17.description').val(localStorage.getItem('hour-17'))

    $('#currentDay').text(moment().format('dddd, MMMM, Do'))

})
console.log(localStorage);