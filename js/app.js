$(document).ready(function(){
      $('input[type=email]#mail').on('blur', function () {
              let email = $(this).val();
              
              if (email.length > 0
              && (email.match(/.+?\@.+/g) || []).length !== 1) {
                console.log('invalid');
                  
                $( "label[for=mail]" ).html("Ошибка ввода");
                $( "label[for=mail]" ).fadeIn("fast");
                  setTimeout(function() { 
                        $( "label[for=mail]" ).fadeOut('fast').removeClass('active');
                  }, 1500);
                $( "#submit" ).prop('disabled', true);
              } else {
                console.log('valid');
                $( "#submit" ).prop('disabled', false)
              }
            });

            $( ".mob-menu-btn" ).click(function() {
                  $( ".navbar ul" ).addClass( "open-menu" );
            });  
            $( ".close" ).click(function() {
                  $( ".navbar ul" ).removeClass( "open-menu" );
            }); 

            $( ".sort" ).click(function() {
                  $( ".sort" ).removeClass( "mixitup-control-active" );
                  $( ".sort:hover" ).addClass( "mixitup-control-active" );
            });  
            $(window).scroll(function() {
                  if ($(this).scrollTop() > 100) {
                        if ($('#upbutton').is(':hidden')) {
                        $('#upbutton').css({opacity : 1}).fadeIn('slow');
                        }
                  } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
                        });
                  $('#upbutton').click(function() {
                  $('html, body').stop().animate({scrollTop : 0}, 300);
            });
      });

 
            $('#show_more').click(function(e){
                  $( "#results_ajax" ).load( "test.html", function(){
                    $("#content").html($("#content").html()+$("#results_ajax").html());
                    $(".hide").html('');
                    $("#results_ajax").fadeOut('fast');
                  });
                  $( "#show_more" ).fadeOut('fast')
            });


            


            function sortprice(evt) {
              var list = document.getElementById('content');
              var items = list.childNodes;
              var itemsArr = [];
              for (var i in items) {
                if (items[i].nodeType == 1) {
                  itemsArr.push(items[i]);
                }
              }
              itemsArr.sort(function(a, b) {
                return parseFloat(a.getAttribute('data-price')) == parseFloat(b.getAttribute('data-price')) ?
                  0 :
                  (parseFloat(a.getAttribute('data-price')) > parseFloat(b.getAttribute('data-price')) ? 1 : -1);
              });
              for (i = 0; i < itemsArr.length; ++i) {
                list.appendChild(itemsArr[i]);
              }
            }
            document.getElementById('price').addEventListener('click', sortprice);

            function sortroom(evt) {
              var list = document.getElementById('content');
              var items = list.childNodes;
              var itemsArr = [];
              for (var i in items) {
                if (items[i].nodeType == 1) {
                  itemsArr.push(items[i]);
                }
              }
              itemsArr.sort(function(a, b) {
                return parseFloat(a.getAttribute('data-name')) == parseFloat(b.getAttribute('data-name')) ?
                  0 :
                  (parseFloat(a.getAttribute('data-name')) > parseFloat(b.getAttribute('data-name')) ? 1 : -1);
              });
              for (i = 0; i < itemsArr.length; ++i) {
                list.appendChild(itemsArr[i]);
              }
            }
            document.getElementById('room').addEventListener('click', sortroom);