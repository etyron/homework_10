$( document ).ready( function () {
    $(document).on("scroll", onScroll);
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $(".nav-item a").each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('nav ul li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }
    $(".works-info").on( "click",function () {
        $(this).next().click();
    })
    $(window).on("scroll",function () {
        if ($(this).scrollTop() > 50){
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }
    });
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("remove");
    })
    $(".navbar-toggler").on("click", function () {
        $(".navbar-collapse").toggleClass("collapse-on");
    })
    $(".nav-link").on("click",function () {
        $(".navbar-toggler").click();
    })
})