function add(){
  var el = document.getElementById('y');
  var style = window.getComputedStyle(y, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  el.style.fontSize = (fontSize + 28) + 'px';
}