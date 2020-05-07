$(function () {

    $('.infoBoxes').on('click', function (e) {
        e.preventDefault();
        var page_id = $(this).attr('data-name');
        $('.' + page_id).addClass('active');
        $('.profileSummary').hide();
        $('.' + page_id).show();
    })

})