var orientationElem = document.getElementById('orientation');
var onChangeHandler;

// Determine what version of the API is implemented
if ('orientation' in screen && 'angle' in screen.orientation) {
  // The browser supports the new version of the API
  onChangeHandler = function() {
    orientationElem.textContent = screen.orientation.type || 'Blank?';
  };
  screen.orientation.addEventListener('change', onChangeHandler);
} else {
  onChangeHandler = function( e ) {
    orientationElem.textContent = e && e.data ? e.data.type || 'Not supported' : 'Not supported';
  };
}

window.addEventListener( 'orientationchange', onChangeHandler );

onChangeHandler();
