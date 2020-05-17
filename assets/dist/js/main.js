$(function () {


    var linkclickable = true;

    $('.infoBoxes').on('click', function (e) {
        e.preventDefault();
        if(linkclickable){
            linkclickable = false;
            var page_id = $(this).attr('data-name');
            $('.profileSummary').find('.active').slideUp(450, function () {
                $('.profileSummary').find('.active').removeClass('active');
                $('.' + page_id).slideDown(450, function () {
                   $('.' + page_id).addClass('active');
                    linkclickable = true;
                });
            });
        }

    })

})