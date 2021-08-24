var btn = document.getElementById('remove');

btn.addEventListener('click',function(){
  btn.parentElement.remove()
})

var removeAll = document.getElementById('article');
var btnRemove = document.getElementById("removeall")
btnRemove.addEventListener('click',function(){
  removeAll.parentElement.remove()
})


/* function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('carte')[0]
  var carte = cartItemContainer.getElementsByClassName('carte')
  var total = 0
  for (var i = 0; i < carte.length; i++) {
      var carte = carte[i]
      var prix = carte.getElementsByClassName('prix')[0]
      var counter = carte.getElementsByClassName('counter')[0]
    
      var counter = quantityElement.value
      total = total + (prix* counter)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('totalprix')[0].innerText = 'dt' + total} */

var price = document.getElementById('prix').value;
var unit = document.getElementById('unit').value;
var sum = document.getElementById('total').textContent;


unit.addEventListener('click',function(){
  return sum += price*unit;
})