$('h2').append('ISSO É UM H2');

$('h2').append($('.introducao h1'));

$('h2').appendTo($('.introducao h1'));

var conteudoH2 = $('.h2').html();
console.log(conteudoH2)