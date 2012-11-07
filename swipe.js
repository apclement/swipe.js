(function( $ ) {
    var xStart = null;
    var yStart = null;
    var xEnd = null;
    var yEnd = null;
    
    $(document).bind('touchstart', function(e){
         xStart = e.originalEvent.changedTouches[0].pageX;
         yStart = e.originalEvent.changedTouches[0].pageY;        
    });
            
    $(document).bind('touchmove', function(e){
        xEnd = e.originalEvent.changedTouches[0].pageX;
        yEnd = e.originalEvent.changedTouches[0].pageY;
        var vOffset = Math.abs(yEnd - yStart)
      
        if(vOffset < 5)
            e.preventDefault()
    });
    
    $(document).bind('touchend', function(e){
        if (xEnd){
          var hOffset = xEnd - xStart;
         
          if (hOffset > 30){
              $(e.target).trigger('swiperight');            
          }
          if (hOffset < -30){
              $(e.target).trigger('swipeleft');            
          }
        }
                
        xStart = yStart = xEnd = yEnd = null;
        
    });
      
    
})(jQuery);
