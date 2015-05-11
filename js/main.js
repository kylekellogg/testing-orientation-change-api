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
  onChangeHandler = function() {};
}

onChangeHandler();