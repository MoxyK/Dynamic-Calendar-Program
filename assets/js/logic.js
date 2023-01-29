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
console.log(currentHour);
    }

    hourUpdate();

})