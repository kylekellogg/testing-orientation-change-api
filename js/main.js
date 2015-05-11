var orientationElem = document.getElementById('orientation');
var onChangeHandler;

// Determine what version of the API is implemented
if ('orientation' in screen && 'angle' in screen.orientation) {
  // The browser supports the new version of the API
  onChangeHandler = function( e ) {
    if ( !!e && !!e.detail && !!e.detail.orientation ) {
      orientationElem.textContent = e.detail.orientation;
    } else {
      orientationElem.textContent = screen.orientation.type || 'Blank?';
    }
  };
  screen.orientation.addEventListener('change', onChangeHandler);
} else {
  onChangeHandler = function( e ) {
    if ( !!e && !!e.detail && !!e.detail.orientation ) {
      orientationElem.textContent = e.detail.orientation;
    } else {
      orientationElem.textContent = 'Not supported';
    }
  };
}

window.addEventListener( 'orientationchange', onChangeHandler );

function updateCounter() {
  var el = document.getElementById( 'counter' ),
      count = +el.textContent;
  
  el.textContent = ''+(count + 1);
}
setInterval( updateCounter, 1000 );

onChangeHandler();
