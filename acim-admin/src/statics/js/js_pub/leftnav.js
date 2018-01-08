// Dropdown Menu
/*
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
*/



$(document).ready(function(){
	
	var Accordion = function(el, multiple) {
		this.el = el || {}; // 如果el对象不存在，就负者一个对象
		this.multiple = multiple || false;   // 如果multiple为空，就否则false；

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	};

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this);
			$next = $this.next();

		//var nextDiv = $this.next("div");
		//alert(nextDiv);
       // alert();
		$this.next().slideToggle();
		$this.parent().toggleClass('open');
		//nextDiv.find('.submenu').not($next).slideUp().parent().removeClass('open');
		if (!e.data.multiple) {
			
			//$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	};

   var accordion = new Accordion($('#accordion'), false);	
   $('.submenu li').click(function () {
		//$(this).addClass('current').siblings('li').removeClass('current');
		
	});
	 
});





