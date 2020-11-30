
window.onload = function() {


  var a = $(".item_a");
  var offset = a.offset();


  var width = document.getElementById('item_a').offsetWidth;

  var height = document.getElementById('item_a').offsetHeight;




  var five = $("#five");
  var offset_wrap = five.offset();

  var i = 0;

  $('.remove').click(function () { 
    $('.picks').remove();
    i = 0;
  });
  $('.item_b').click(function (ev) {


    console.log('real: ' + ev.pageX +' '+ ev.pageY);
    console.log('real screen: ' + window.innerWidth +' '+ window.innerHeight);

    console.log('HHHHH: '+ offset_wrap.left);
    if (  i < 5) {
      mouseX = ev.pageX - offset_wrap.left - 26;
      mouseY = ev.pageY - offset.top;
      console.log(mouseX + ' ' + mouseY);

      var size = '0px';

      if (window.innerWidth > 412) { 

        $(".item_b").append(
          $('<div class="picks pick_'+i+'"></div>')
          .css('position', 'absolute')
          .css('top', mouseY + 'px')
          .css('left', mouseX + 'px')
          .css('width', 40)
          .css('height', size)

          );
        $(".item_a").append(
          $('<div class="picks pick_'+i+'"></div>')
          .css('position', 'absolute')
          .css('top', mouseY + 'px')
          .css('left', mouseX - width + 'px')
          .css('width', 40)
          .css('height', size)

          );
      }  
      else {

        $(".item_b").append(
          $('<div class="picks pick_'+i+'"></div>')
          .css('position', 'absolute')
          .css('top', mouseY +10+ 'px')
          .css('left', mouseX + 'px')
          .css('width', 40)
          .css('height', size)

          );
        $(".item_a").append(
          $('<div class="picks pick_'+i+'"></div>')
          .css('position', 'absolute')
          .css('top', mouseY - height  +10 + 'px')
          .css('left', mouseX  + 'px')
          .css('width', 40)
          .css('height', size)

          );


        console.log('height:'+ height);
        console.log('width:'+ width);
      }

      i++;
    } 



  });

  //alert('ready');

};

