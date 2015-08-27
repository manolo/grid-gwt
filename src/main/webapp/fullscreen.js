    var e = document.documentElement;
    var goFull = e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen || e.msRequestFullscreen;
    var fulled = false;

    var isFull = function() {
      return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    };
    
    var full = function(ev) {
      goFull.call(document.documentElement);
      ev.preventDefault();
      ev.stopPropagation();
      document.body.removeEventListener('mousedown', full);      
      document.body.removeEventListener('touchstart', full);
      fulled = false;
    };
    
    var setFull = function() {
      if (!fulled && !isFull()) {
        document.body.addEventListener('mousedown', full);      
        document.body.addEventListener('touchstart', full);      
        var fulled = true;
      }
    };
    
    window.onload = setFull;
    window.onresize = setFull;
