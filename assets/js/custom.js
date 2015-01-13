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


  //Youtube fancybox
  $('.fancybox-media').fancybox({
		openEffect : 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	});


  //Send mail
  $('.send-button').on('click', function (e) {
    e.preventDefault();

    var name    = $('#nome').val(),
        last    = $('#sobrenome').val(),
        email   = $('#email').val(),
        message = $('#mensagem').val();

    var message = "Meu nome é " + name + " "+ last +"<"+ email +">, minha mensagem é: " + message + "\n\n";

    if (name && last && email) {
      $.ajax({
        url : 'http://iotmail.telefonicabeta.com/send.php',
        type: 'POST',
        data: {
          "from": email,
          "form_name": name + " " + last,
          "body": message
        },
        success : function(m) {
          if (m.status) {
            sweetAlert('Sucesso', 'Mensagem enviada com sucesso', 'success');
            $('#nome').val(''),
            $('#sobrenome').val(''),
            $('#email').val(''),
            $('#mensagem').val('');

          } else {
            sweetAlert('Erro', 'Ocorreu um erro ao enviar o email, tente novamente', 'error');
          }
        },
        error: function(m) {
          sweetAlert('Erro', 'Ocorreu um erro ao enviar o email, tente novamente', 'error');
        }
      });

    } else {
      sweetAlert('Faltam campos obrigatórios', 'Preencha todos os campos para enviar uma mensagem.');
    }
  });
})(jQuery);
