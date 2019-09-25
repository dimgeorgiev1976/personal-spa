$(document).ready(function(){

	    // Создаем переменые для кнопки и для меню
		var navToggleButton = $("#navigation__button");
		var navBlock = $(".navigation__list");
		var navBlockOpen = "navigation__list--open";
		var navlink = $(".navigation__list a");
		var navToggleIcon = $(".navigation__navToggleButton .fa");
		
		// Собития по клико на иконку навигаций
			$(navToggleButton).on("click", function(e){
				e.preventDefault();
		  // Добавляем модификатор --open
		  $(navBlock).toggleClass(navBlockOpen);
				navButtonToggle();
			})

		// Собития по клико на ссылки в навигационном меню
			navlink.on('click', function() {

			if (navBlock.hasClass(navBlockOpen)) {
				navButtonToggle();
			}
				navBlock.removeClass(navBlockOpen);
		})
			
		// Функция для анимация иконки 
			function navButtonToggle(){
				if (navToggleButton.hasClass("active")) {
				  navToggleButton.removeClass("active");
				} else {
				  navToggleButton.addClass("active");
				}

			}



});