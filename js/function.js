function additem1() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "number");
  x.setAttribute("value", "1");
  x.setAttribute("id", "item1");
  x.setAttribute("onchange", "cartpricechange()");
  document.body.appendChild(x);
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/nasi-goreng-biasa.jpg" id="img1"><div><p>Nasi Goreng Biasa</p><small >RM5.50</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item1" onchange="cartpricechange1()" >';
  cell3.innerHTML = "";
  cell3.id = "idf1";
  cell3.value = "1";
};

function cartpricechange1(){
  var price = 5.5 * document.getElementById("item1").value;
  document.getElementById("idf1").innerHTML = "Price: RM"+price;
  document.getElementById("idf1").value = price;
};

function subtotal(){
  var subtotal = document.getElementById("idf1").value;
  document.getElementById("subtotal").value = subtotal;
  document.getElementById("subtotal").innerHTML = "RM"+subtotal;
  var totalprice;
  totalprice = subtotal+ 6;
  document.getElementById("at").innerHTML = "RM"+totalprice;
}