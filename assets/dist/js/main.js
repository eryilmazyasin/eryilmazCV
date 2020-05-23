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
    });

// Set active link
    $('.infoBoxesWrapper li').on( 'click', function() {
        //set time out ver
            linkclickable = false;
            $(this).parent().find( 'li.active-li' ).removeClass( 'active-li' );
            $( this ).addClass( 'active-li' );
    });


    // ProjectSingle componenti kadarını nav'a bas
    function projectCount() {
        var projectCounts = $('.projectsContent .projectSingle').length;
        if(projectCounts > 0) {
            $('span.projectsCount').text(projectCounts);
        }
        else {
            $('span.projectsCount').hide();
        }
    }

    var i = 0;
    var txt = 'Merhaba,'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            $('.typedText').append(txt.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
        }
    }


    //fUNCTİONS
    projectCount();
    typeWriter();
});






