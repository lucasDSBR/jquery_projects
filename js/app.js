// $('a').click(function(){
// 	$('.abrir-modal').text('Mudou');
// });

// $('a').on('click', function(){
// 	$(this).text('Mudou2');
// });

// $('a').on('click', function(e){
// 	console.log(e)
// });

// $('a').on('mouseenter', function(e){
// 	e.preventDefault();
// 	$(this).text('CLICOU');
// });

// $('a').on('mouseleave', function(e){
// 	e.preventDefault();
// 	$(this).text('Abrir modal');
// });


//Adicionando classes

// $('a').click(function(){
// 	$(this).addClass('active');
// });

$('.classe').click(function(){
	$('classe').toggleClass('active');
});

$('classe').click(function(){
	$('classe').toggleClass('active');
	var condicao = $('.modal').hasClass('active');
	if(condicao)
		$(this).text('Fechar modal');
	else
		$(this).text('Abrir Modal');
});