//sidebar menu
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
//dropdown menu
$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});
//add task
$(document).ready(function(){
    $(".new-task").click(function(){
        $("#empty").append('<div  class="task-card container card col-md-3 m-3" id="task">'+
                            '<h3 class="card-title">Task</h3>'+
                            '<div class="card" id="task-description">'+
                            '<p class="card-text">Create harmony by 01/30/21</p>'+
                            '</div>'+
                            '</div>'+
                            '<div id="empty">'+  
                            '</div>');
    });
});