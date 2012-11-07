(function( $ ) {

  $.swipe = { vThreshold: 5, hThreshold: 50 } 

  $(document).ready(function(){

    var xStart = null;
    var yStart = null;
    var xEnd = null;
    var yEnd = null;
    
    $(document).bind('touchstart', function(e){
		 xEnd = yEnd = null;
         xStart = e.originalEvent.changedTouches[0].pageX;
         yStart = e.originalEvent.changedTouches[0].pageY;        
    });
            
    $(document).bind('touchmove', function(e){
        xEnd = e.originalEvent.changedTouches[0].pageX;
        yEnd = e.originalEvent.changedTouches[0].pageY;
        var vOffset = Math.abs(yEnd - yStart)
      
        // Is it an horizontal swipe?
        if(vOffset < $.swipe.vThreshold)
            e.preventDefault()
    });
    
    $(document).bind('touchend', function(e){
        if (xEnd){
          var hOffset = xEnd - xStart;
         
          if (hOffset > $.swipe.hThreshold){
              $(e.target).trigger('swiperight');            
          }
          if (hOffset < -$.swipe.hThreshold){
              $(e.target).trigger('swipeleft');            
          }
        }
                
        xStart = yStart = xEnd = yEnd = null;
        
    });
 });
    
})(jQuery);
