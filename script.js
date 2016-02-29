//I still need to submit with 

(function() {
  'use strict';
  var tile = document.getElementsByTagName('body')[0];

  for (var i = 0; i < 63; i++) {
    var div = document.createElement('div');

    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    if (i % 2 === 0) {
      div.style.backgroundColor = 'red';
    }
    else {
      div.style.backgroundColor = 'black';
    }
    tile.appendChild(div);
  }
})();
