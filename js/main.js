var prefix = 'orientation' in screen ? '' :
  'mozOrientation' in screen ? 'moz' :
  'msOrientation' in screen ? 'ms' :
  null;

var orientationElem = document.getElementById('orientation');
var onChangeHandler;

// Determine what version of the API is implemented
if ('orientation' in screen && 'angle' in screen.orientation) {
  // The browser supports the new version of the API

  onChangeHandler = function() {
    orientationElem.textContent = screen.orientation.type;
  };
  screen.orientation.addEventListener('change', onChangeHandler);
} else {
  onChangeHandler = function() {
    var orientationProperty = prefix + (prefix === '' ? 'o' : 'O') + 'rientation';
    orientationElem.textContent = screen[orientationProperty];
  };
  screen.addEventListener(prefix + 'orientationchange', onChangeHandler);
}

onChangeHandler();
