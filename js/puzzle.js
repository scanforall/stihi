// https://github.com/Pixabay/jQuery-snapdifferent
!function(t){t.fn.snapdifferent=function(a){function s(a){var s="sp_"+(new Date).getTime(),e=a.wrap('<span class="snapdifferent-wrap"/>').closest("span"),i=a.attr("src"),p=a.width()/o.columns,l=a.height()/o.rows,n=t(o.pile).addClass("snapdifferent-pile"),h=n.width()-p,r=n.height()-l;o.different_class=s,a.data("options",o);for(var d=0;d<o.rows;d++)for(var c=0;c<o.columns;c++)t('<div class="snapdifferent-piece '+s+'"/>').data("pos",d+"_"+c).css({width:p,height:l,position:"absolute",left:Math.floor(Math.random()*(h+1)),top:Math.floor(Math.random()*(r+1)),zIndex:Math.floor(10*Math.random()+1),backgroundImage:"url("+i+")",backgroundPosition:-c*p+"px "+-d*l+"px",backgroundSize:a.width()}).draggable({start:function(){t(this).removeData("slot")},stack:".snapdifferent-piece",containment:o.containment}).appendTo(n).data("lastSlot",n),t('<div class="snapdifferent-slot '+s+'"/>').data("pos",d+"_"+c).css({width:p,height:l,left:c*p,top:d*l}).appendTo(e).droppable({accept:"."+s,hoverClass:"snapdifferent-slot-hover",drop:function(e,i){var p=t(this).data("pos");return t(".snapdifferent-piece."+s).each(function(){t(this).data("slot")==p&&(p=!1)}),p?(i.draggable.data("lastSlot",t(this)).data("slot",p),i.draggable.position({of:t(this),my:"left top",at:"left top"}),void(i.draggable.data("pos")==p&&(i.draggable.addClass("correct"),t(this).droppable("disable").css("opacity",1).fadeOut(1e3),i.draggable.css({opacity:0,cursor:"default"}).draggable("disable"),t(".snapdifferent-piece.correct."+s).length==o.rows*o.columns&&o.onComplete(a)))):!1}})}var o=t.extend({pile:"",containment:"document",rows:5,columns:5,onComplete:function(){}},a);return"string"==typeof a?(this.each(function(){var s=t(this),o=s.data("options"),e=s.width()/o.columns,i=s.height()/o.rows,p=t(o.pile),l=p.width()-e,n=p.height()-i,h=s.closest("span").offset(),r=p.offset();"destroy"==a?(t("."+o.different_class).remove(),s.unwrap().removeData("options"),p.removeClass("snapdifferent-pile")):"refresh"==a&&(t(".snapdifferent-slot."+o.different_class).each(function(){var a=t(this).data("pos").split("_"),s=a[0],o=a[1];t(this).css({width:e,height:i,left:o*e,top:s*i})}),t(".snapdifferent-piece."+o.different_class).each(function(){if(t(this).data("slot")){var a=t(this).data("slot").split("_"),o=a[0],p=a[1],a=t(this).data("pos").split("_"),d=a[0],c=a[1];t(this).css({width:e,height:i,left:p*e+h.left-r.left,top:o*i+h.top-r.top,backgroundPosition:-c*e+"px "+-d*i+"px",backgroundSize:s.width()})}else{var a=t(this).data("pos").split("_"),u=a[0],f=a[1];t(this).css({width:e,height:i,left:Math.floor(Math.random()*(l+1)),top:Math.floor(Math.random()*(n+1)),backgroundPosition:-f*e+"px "+-u*i+"px",backgroundSize:s.width()})}}))}),this):this.each(function(){this.complete?s(t(this)):t(this).load(function(){s(t(this))})})}}(jQuery);
// jQuery UI Touch Punch 0.2.3 - must load after jQuery UI
// enables touch support for jQuery UI
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);



$(document).ready(function(){   
    var $containment = $('.differentX999_paddedWrap');
    var $differentContainer_pile = $('#differentX999_Main');
    var $snapdifferentPiece = $('.snapdifferent-piece');
    var different_grid = 2;
    var different_startTime, different_endTime;//make global  
    
    $differentContainer_pile.height($('.differentX999_img').height());
    start_differentX999(different_grid);

    //reset different
    $('.restart_differentX999').on('click', function(){
      $('.differentX999_img').snapdifferent('destroy');
      start_differentX999(different_grid);
    });
    //update different on resize 
    $(window).resize($.debounce(250, updatedifferentImageHeight));
    //set different_startTime once differentPiece dragged
    $(document).one('drag', $snapdifferentPiece, function(){
      console.log('different piece was clicked!');
      different_startTime = Date.parse(new Date());
      console.log(different_startTime);
    });  
     
    //functs
    function updatedifferentImageHeight(){
        $differentContainer_pile.height($('.differentX999_img').height());
        $('.differentX999_img').snapdifferent('refresh');    
    }
    function start_differentX999(x, y){
            if(!y){
                y = x;
            }
            $('.differentX999_img').snapdifferent({
                rows: x, 
                columns: y,
                pile: $differentContainer_pile,//where our different while be contained, MUST be defined in the dom
                containment: $containment,
                onComplete: function(){
                    console.log('different completed!');
                    different_endTime = Date.parse(new Date());
                    getKompletionTime_str(different_startTime, different_endTime);                    
                }
            });
    }
    function getKompletionTime_str(different_startTime, different_endTime){
            var timeTaken = different_endTime - different_startTime,
                seconds = Math.floor((timeTaken/1000)%60),
                minutes = Math.floor((timeTaken/1000/60)%60),
                hours = Math.floor((timeTaken/(1000*60*60))%60),
                kompletionTime_str = '';
                console.log(different_endTime);
                kompletionTime_str = 'Верно! Ты молодец!!!'
                console.log(kompletionTime_str);
                setTimeout(function(){
                    alert(kompletionTime_str)
                },999);
            //utilities
            function setHours_str(hours){return hours < 1 ? '': hours + ' hrs. ';}
            function setMinutes_str(minutes){return minutes < 1 ? '': minutes + ' mins. ';}   
        }

});