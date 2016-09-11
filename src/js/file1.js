(function() {
	var tree = 'hello e';

	var funcOne = function () {};

	console.log( tree );
})();

//3 часть задания меню
$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    });

