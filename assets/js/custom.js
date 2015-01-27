(function($) {
  var $root = $('html, body');

  //On nav click scrool to
  $('.navbar-nav a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top

    }, 600, function () {
      //Update the url
      window.location.hash = href;
    });

    return false;
  });


  //Tooltip
  $('[data-toggle="tooltip"]').tooltip()

  //Youtube fancybox
  $('.fancybox-media').fancybox({
		openEffect : 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	});


	//Gallery fancybox
	$('.photo-gallery').fancybox();


  //Send mail
  $('.send-button').on('click', function (e) {
    e.preventDefault();

    var name    = $('#nome').val(),
        last    = $('#sobrenome').val(),
        email   = $('#email').val(),
        message = $('#mensagem').val();

    var msg = 'Meu nome é ' + name + ' '+ last +'<'+ email +'>, minha mensagem é: ' + message + '\n\n';

    if (name && last && email && message) {
      $.ajax({
        url : 'http://iotmail.telefonicabeta.com/send.php',
        type: 'POST',
        data: {
          'from': email,
          'form_name': name + ' ' + last,
          'body': msg
        },
        success: function (m) {
          if (m.status) {
            sweetAlert('Sucesso', 'Mensagem enviada com sucesso', 'success');
            $('#nome, #sobrenome, #email, #mensagem').val('');

          } else {
            sweetAlert('Erro', 'Ocorreu um erro ao enviar o email, tente novamente', 'error');
          }
        },
        error: function (m) {
          sweetAlert('Erro', 'Ocorreu um erro ao enviar o email, tente novamente', 'error');
        }
      });

    } else {
      sweetAlert('Faltam campos obrigatórios', 'Preencha todos os campos para enviar uma mensagem.');
    }
  });
})(jQuery);
