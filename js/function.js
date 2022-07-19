function additem1() {
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

function additem2() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/nasi-goreng-thai.jpg" id="img2"><div><p>Nasi Goreng thsi</p><small >RM8.80</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item2" onchange="cartpricechange2()" >';
  cell3.innerHTML = "";
  cell3.id = "idf2";
  cell3.value = "1";
};

function additem3() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/nasi-goreng-kampung.jpg" id="img3"><div><p>Nasi Goreng Kampung</p><small >RM6.30</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item3" onchange="cartpricechange3()" >';
  cell3.innerHTML = "";
  cell3.id = "idf3";
  cell3.value = "1";
};

function additem4() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/nasi-goreng-cina.jpg" id="img4"><div><p>Nasi Goreng Cina</p><small >RM6.30</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item4" onchange="cartpricechange4()" >';
  cell3.innerHTML = "";
  cell3.id = "idf4";
  cell3.value = "1";
};

function additem5() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/nasi-goreng-pattaya.jpg" id="img5"><div><p>Nasi Goreng Pataya</p><small >RM7.30</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item5" onchange="cartpricechange5()" >';
  cell3.innerHTML = "";
  cell3.id = "idf5";
  cell3.value = "1";
};

function additem6() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/SPAGHETTI-NAPOLITANO.jpg" id="img6"><div><p>Spaghetti Napolitano</p><small >RM16.90</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item6" onchange="cartpricechange6()" >';
  cell3.innerHTML = "";
  cell3.id = "idf6";
  cell3.value = "1";
};

function additem7() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/SPAGHETTI-CARBONARA.jpg" id="img7"><div><p>Spaghetti Carbonara</p><small >RM8.90</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item7" onchange="cartpricechange7()" >';
  cell3.innerHTML = "";
  cell3.id = "idf7";
  cell3.value = "1";
};

function additem8() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/SPAGHETTI-BOLOGNESE.jpg" id="img8"><div><p>Spaghetti Bolognese</p><small >RM8.90</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item8" onchange="cartpricechange8()" >';
  cell3.innerHTML = "";
  cell3.id = "idf8";
  cell3.value = "1";
};

function additem9() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/SPAGHETTI-MEATBALL.jpg" id="img9"><div><p>Spaghetti Meatball</p><small >RM9.90</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item9" onchange="cartpricechange9()" >';
  cell3.innerHTML = "";
  cell3.id = "idf9";
  cell3.value = "1";
};

function additem10() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/SPAGHETTI-LAMB.jpg" id="img10"><div><p>Spaghetti Lamb</p><small >RM16.90</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item10" onchange="cartpricechange10()" >';
  cell3.innerHTML = "";
  cell3.id = "idf10";
  cell3.value = "1";
};

function additem11() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/siakap-3-rasa.jpg" id="img11"><div><p>Siakap 3 rase</p><small >RM40.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item11" onchange="cartpricechange11()" >';
  cell3.innerHTML = "";
  cell3.id = "idf11";
  cell3.value = "1";
};

function additem12() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/siakap-chilli-paste.jpg" id="img12"><div><p>Siakap Chilli Paste</p><small >RM40.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item12" onchange="cartpricechange12()" >';
  cell3.innerHTML = "";
  cell3.id = "idf12";
  cell3.value = "1";
};

function additem13() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/siakap-sweet-sour.jpg" id="img13"><div><p>Siakap Sweet Sour</p><small>RM40.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item13" onchange="cartpricechange13()" >';
  cell3.innerHTML = "";
  cell3.id = "idf13";
  cell3.value = "1";
};

function additem14() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/Siakap-Stim-Limau.jpg" id="img14"><div><p>Siakap Stim Limau</p><small >RM40.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item14" onchange="cartpricechange14()" >';
  cell3.innerHTML = "";
  cell3.id = "idf14";
  cell3.value = "1";
};

function additem15() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/siakap-stim-halia.jpg" id="img15"><div><p>Siakap Stim Halia</p><small >RM40.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item15" onchange="cartpricechange15()" >';
  cell3.innerHTML = "";
  cell3.id = "idf15";
  cell3.value = "1";
};

function additem16() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/siakap-goreng-biasa.jpg" id="img16"><div><p>Siakap Goreng Biasa</p><small >RM40.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item16" onchange="cartpricechange16()" >';
  cell3.innerHTML = "";
  cell3.id = "idf16";
  cell3.value = "1";
};

function additem17() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/teh.jpg" id="img17"><div><p>Teh</p><small >RM2.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item17" onchange="cartpricechange17()" >';
  cell3.innerHTML = "";
  cell3.id = "idf17";
  cell3.value = "1";
};

function additem18() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/sirap.jpg" id="img18"><div><p>Sirap</p><small >RM1.50</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item18" onchange="cartpricechange18()" >';
  cell3.innerHTML = "";
  cell3.id = "idf18";
  cell3.value = "1";
};

function additem19() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/asam-boi.jpg" id="img19"><div><p>Asam Boi</p><small >RM2.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item19" onchange="cartpricechange19()" >';
  cell3.innerHTML = "";
  cell3.id = "idf19";
  cell3.value = "1";
};

function additem20() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/green-tea.jpg" id="img20"><div><p>Green Tea</p><small >RM3.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item20" onchange="cartpricechange20()" >';
  cell3.innerHTML = "";
  cell3.id = "idf20";
  cell3.value = "1";
};

function additem21() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/teh-o.jpg" id="img21"><div><p>Teh O</p><small >RM2.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item21" onchange="cartpricechange21()" >';
  cell3.innerHTML = "";
  cell3.id = "idf21";
  cell3.value = "1";
};

function additem22() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/milo-ais.jpg" id="img22"><div><p>Milo Ais</p><small >RM2.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item22" onchange="cartpricechange22()" >';
  cell3.innerHTML = "";
  cell3.id = "idf22";
  cell3.value = "1";
};

function additem23() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/milo-panas.jpg" id="img23"><div><p>Milo Panas</p><small >RM1.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item23" onchange="cartpricechange23()" >';
  cell3.innerHTML = "";
  cell3.id = "idf23";
  cell3.value = "1";
};

function additem24() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/sirap-bandung.jpg" id="img24"><div><p>Sirau Bandung</p><small >RM1.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item24" onchange="cartpricechange24()" >';
  cell3.innerHTML = "";
  cell3.id = "idf24";
  cell3.value = "1";
};

function additem25() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/sirap-limau.jpg" id="img25"><div><p>Sirau Limau</p><small >RM2.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item25" onchange="cartpricechange25()" >';
  cell3.innerHTML = "";
  cell3.id = "idf25";
  cell3.value = "1";
};

function additem26() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/laici.jpg" id="img26"><div><p>Laici</p><small >RM3.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item26" onchange="cartpricechange26()" >';
  cell3.innerHTML = "";
  cell3.id = "idf26";
  cell3.value = "1";
};

function additem27() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/laici-kang.jpg" id="img27"><div><p>Laici Kang</p><small >RM3.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item27" onchange="cartpricechange27()" >';
  cell3.innerHTML = "";
  cell3.id = "idf27";
  cell3.value = "1";
};

function additem28() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/jus-epal.jpg" id="img28"><div><p>Jus Epal</p><small >RM5.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item28" onchange="cartpricechange28()" >';
  cell3.innerHTML = "";
  cell3.id = "idf28";
  cell3.value = "1";
};

function additem29() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/jus-oren.jpg" id="img29"><div><p>Jus Oren</p><small >RM5.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item29" onchange="cartpricechange29()" >';
  cell3.innerHTML = "";
  cell3.id = "idf29";
  cell3.value = "1";
};

function additem30() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/jus-tembikai.jpg" id="img30"><div><p>Jus Tembikai</p><small >RM5.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item30" onchange="cartpricechange30()" >';
  cell3.innerHTML = "";
  cell3.id = "idf30";
  cell3.value = "1";
};

function additem31() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/lobak.jpg" id="img31"><div><p>Lobak</p><small >RM4.00</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item31" onchange="cartpricechange31()" >';
  cell3.innerHTML = "";
  cell3.id = "idf31";
  cell3.value = "1";
};

function additem32() {
  var table = document.getElementById("cart");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2);
  cell1.innerHTML = '<div class="cart-info"><img src="img/lobak-susu.jpg" id="img32"><div><p>Lobak Susu</p><small >RM4.50</small></div></div>'
  cell2.innerHTML = '<input type="number"  value="0" id="item32" onchange="cartpricechange32()" >';
  cell3.innerHTML = "";
  cell3.id = "idf32";
  cell3.value = "1";
};

function cartpricechange1(){
  var price = 5.5 * document.getElementById("item1").value;
  document.getElementById("idf1").innerHTML = "Price: RM"+price;
  document.getElementById("idf1").value = price;
  document.getElementById("nasi-goreng-biasa").value = price;
};

function cartpricechange2(){
  var price = 8.8 * document.getElementById("item2").value;
  document.getElementById("idf2").innerHTML = "Price: RM"+price;
  document.getElementById("idf2").value = price;
  document.getElementById("nasi-goreng-thai").value = price;
};

function cartpricechange3(){
  var price = 6.3 * document.getElementById("item3").value;
  document.getElementById("idf3").innerHTML = "Price: RM"+price;
  document.getElementById("idf3").value = price;
  document.getElementById("nasi-goreng-kampung").value = price;
};

function cartpricechange4(){
  var price = 6.3 * document.getElementById("item4").value;
  document.getElementById("idf4").innerHTML = "Price: RM"+price;
  document.getElementById("idf4").value = price;
  document.getElementById("nasi-goreng-cina").value = price;
};

function cartpricechange5(){
  var price = 7.3 * document.getElementById("item5").value;
  document.getElementById("idf5").innerHTML = "Price: RM"+price;
  document.getElementById("idf5").value = price;
  document.getElementById("nasi-goreng-pattaya").value = price;
};

function cartpricechange6(){
  var price = 16.9 * document.getElementById("item6").value;
  document.getElementById("idf6").innerHTML = "Price: RM"+price;
  document.getElementById("idf6").value = price;
  document.getElementById("spaghetti-napolitano").value = price;
};

function cartpricechange7(){
  var price = 8.9 * document.getElementById("item7").value;
  document.getElementById("idf7").innerHTML = "Price: RM"+price;
  document.getElementById("idf7").value = price;
  document.getElementById("spaghetti-carbonara").value = price;
};

function cartpricechange8(){
  var price = 8.9 * document.getElementById("item8").value;
  document.getElementById("idf8").innerHTML = "Price: RM"+price;
  document.getElementById("idf8").value = price;
  document.getElementById("spaghetti-bolognese").value = price;
};

function cartpricechange9(){
  var price = 9.9 * document.getElementById("item9").value;
  document.getElementById("idf9").innerHTML = "Price: RM"+price;
  document.getElementById("idf9").value = price;
  document.getElementById("spaghetti-meatball").value = price;
};

function cartpricechange10(){
  var price = 16.9 * document.getElementById("item10").value;
  document.getElementById("idf10").innerHTML = "Price: RM"+price;
  document.getElementById("idf10").value = price;
  document.getElementById("spaghetti-lamb").value = price;
};

function cartpricechange11(){
  var price = 40 * document.getElementById("item11").value;
  document.getElementById("idf11").innerHTML = "Price: RM"+price;
  document.getElementById("idf11").value = price;
  document.getElementById("siakap-3-rasa").value = price;
};

function cartpricechange12(){
  var price = 40 * document.getElementById("item12").value;
  document.getElementById("idf12").innerHTML = "Price: RM"+price;
  document.getElementById("idf12").value = price;
  document.getElementById("siakap-chilli-paste").value = price;
};

function cartpricechange13(){
  var price = 40 * document.getElementById("item13").value;
  document.getElementById("idf13").innerHTML = "Price: RM"+price;
  document.getElementById("idf13").value = price;
  document.getElementById("siakap-sweet-sour").value = price;
};

function cartpricechange14(){
  var price = 40 * document.getElementById("item14").value;
  document.getElementById("idf14").innerHTML = "Price: RM"+price;
  document.getElementById("idf14").value = price;
  document.getElementById("siakap-stim-limau").value = price;
};

function cartpricechange15(){
  var price = 40 * document.getElementById("item15").value;
  document.getElementById("idf15").innerHTML = "Price: RM"+price;
  document.getElementById("idf15").value = price;
  document.getElementById("siakap-stim-halia").value = price;
};

function cartpricechange16(){
  var price = 40 * document.getElementById("item16").value;
  document.getElementById("idf16").innerHTML = "Price: RM"+price;
  document.getElementById("idf16").value = price;
  document.getElementById("siakap-goreng-biasa").value = price;
};

function cartpricechange17(){
  var price = 2 * document.getElementById("item17").value;
  document.getElementById("idf17").innerHTML = "Price: RM"+price;
  document.getElementById("idf17").value = price;
  document.getElementById("teh").value = price;
};

function cartpricechange18(){
  var price = 1.5 * document.getElementById("item18").value;
  document.getElementById("idf18").innerHTML = "Price: RM"+price;
  document.getElementById("idf18").value = price;
  document.getElementById("sirap").value = price;
};

function cartpricechange19(){
  var price = 2 * document.getElementById("item19").value;
  document.getElementById("idf19").innerHTML = "Price: RM"+price;
  document.getElementById("idf19").value = price;
  document.getElementById("asam-boi").value = price;
};

function cartpricechange20(){
  var price = 3 * document.getElementById("item20").value;
  document.getElementById("idf20").innerHTML = "Price: RM"+price;
  document.getElementById("idf20").value = price;
  document.getElementById("green-tea").value = price;
};

function cartpricechange21(){
  var price = 2 * document.getElementById("item21").value;
  document.getElementById("idf21").innerHTML = "Price: RM"+price;
  document.getElementById("idf21").value = price;
  document.getElementById("teh-o").value = price;
};

function cartpricechange22(){
  var price = 2 * document.getElementById("item22").value;
  document.getElementById("idf22").innerHTML = "Price: RM"+price;
  document.getElementById("idf22").value = price;
  document.getElementById("milo-ais").value = price;
};

function cartpricechange23(){
  var price = 1 * document.getElementById("item23").value;
  document.getElementById("idf23").innerHTML = "Price: RM"+price;
  document.getElementById("idf23").value = price;
  document.getElementById("milo-panas").value = price;
};

function cartpricechange24(){
  var price = 1 * document.getElementById("item24").value;
  document.getElementById("idf24").innerHTML = "Price: RM"+price;
  document.getElementById("idf24").value = price;
  document.getElementById("sirap-bandung").value = price;
};

function cartpricechange25(){
  var price = 2 * document.getElementById("item25").value;
  document.getElementById("idf25").innerHTML = "Price: RM"+price;
  document.getElementById("idf25").value = price;
  document.getElementById("sirap-limau").value = price;
};

function cartpricechange26(){
  var price = 3 * document.getElementById("item26").value;
  document.getElementById("idf26").innerHTML = "Price: RM"+price;
  document.getElementById("idf26").value = price;
  document.getElementById("laici").value = price;
};

function cartpricechange27(){
  var price = 5 * document.getElementById("item27").value;
  document.getElementById("idf27").innerHTML = "Price: RM"+price;
  document.getElementById("idf27").value = price;
  document.getElementById("laici-kang").value = price;
};

function cartpricechange28(){
  var price = 5 * document.getElementById("item28").value;
  document.getElementById("idf28").innerHTML = "Price: RM"+price;
  document.getElementById("idf28").value = price;
  document.getElementById("jus-epal").value = price;
};

function cartpricechange29(){
  var price = 5 * document.getElementById("item29").value;
  document.getElementById("idf29").innerHTML = "Price: RM"+price;
  document.getElementById("idf29").value = price;
  document.getElementById("jus-oren").value = price;
};

function cartpricechange30(){
  var price = 5 * document.getElementById("item30").value;
  document.getElementById("idf30").innerHTML = "Price: RM"+price;
  document.getElementById("idf30").value = price;
  document.getElementById("jus-tembikai").value = price;
};

function cartpricechange31(){
  var price = 4 * document.getElementById("item31").value;
  document.getElementById("idf31").innerHTML = "Price: RM"+price;
  document.getElementById("idf31").value = price;
  document.getElementById("lobak").value = price;
};

function cartpricechange32(){
  var price = 4.5 * document.getElementById("item32").value;
  document.getElementById("idf32").innerHTML = "Price: RM"+price;
  document.getElementById("idf32").value = price;
  document.getElementById("lobak-susu").value = price;
};

function subtotal(){
  var subtotal1 =parseFloat(document.getElementById("nasi-goreng-biasa").value); 
  var subtotal2 =parseFloat(document.getElementById("nasi-goreng-thai").value);
  var subtotal3 =parseFloat(document.getElementById("nasi-goreng-kampung").value);
  var subtotal4 =parseFloat(document.getElementById("nasi-goreng-cina").value);
  var subtotal5 =parseFloat(document.getElementById("nasi-goreng-pattaya").value);
  var subtotal6 =parseFloat(document.getElementById("spaghetti-napolitano").value);
  var subtotal7 =parseFloat(document.getElementById("spaghetti-carbonara").value);
  var subtotal8 =parseFloat(document.getElementById("spaghetti-bolognese").value);
  var subtotal9 =parseFloat(document.getElementById("spaghetti-meatball").value);
  var subtotal10 =parseFloat(document.getElementById("spaghetti-lamb").value);
  var subtotal11 =parseFloat(document.getElementById("siakap-3-rasa").value);
  var subtotal12 =parseFloat(document.getElementById("siakap-chilli-paste").value);
  var subtotal13 =parseFloat(document.getElementById("siakap-sweet-sour").value);
  var subtotal14 =parseFloat(document.getElementById("siakap-stim-limau").value);
  var subtotal15 =parseFloat(document.getElementById("siakap-stim-halia").value);
  var subtotal16 =parseFloat(document.getElementById("siakap-goreng-biasa").value);
  var subtotal17 =parseFloat(document.getElementById("teh").value);
  var subtotal18 =parseFloat(document.getElementById("sirap").value);
  var subtotal19 =parseFloat(document.getElementById("asam-boi").value);
  var subtotal20 =parseFloat(document.getElementById("green-tea").value);
  var subtotal21 =parseFloat(document.getElementById("teh-o").value);
  var subtotal22 =parseFloat(document.getElementById("milo-ais").value);
  var subtotal23 =parseFloat(document.getElementById("milo-panas").value);
  var subtotal24 =parseFloat(document.getElementById("sirap-bandung").value);
  var subtotal25 =parseFloat(document.getElementById("sirap-limau").value);
  var subtotal26 =parseFloat(document.getElementById("laici").value);
  var subtotal27 =parseFloat(document.getElementById("laici-kang").value);
  var subtotal28 =parseFloat(document.getElementById("jus-epal").value);
  var subtotal29 =parseFloat(document.getElementById("jus-oren").value);
  var subtotal30 =parseFloat(document.getElementById("jus-tembikai").value);
  var subtotal31 =parseFloat(document.getElementById("lobak").value);
  var subtotal32 =parseFloat(document.getElementById("lobak-susu").value); 
  
  var subtotal = subtotal1+subtotal2+subtotal3+subtotal4+subtotal5+subtotal6+subtotal7+subtotal8+subtotal9+subtotal10+subtotal11+subtotal12+subtotal13+subtotal14+subtotal15+subtotal16+subtotal17+subtotal18+subtotal19+subtotal20+subtotal21+subtotal22+subtotal23+subtotal24+subtotal25+subtotal26+subtotal27+subtotal28+subtotal29+subtotal30+subtotal31+subtotal32;
  document.getElementById("subtotal").value = subtotal;
  document.getElementById("subtotal").innerHTML = "RM"+subtotal;
  var totalprice = 0;
  totalprice = subtotal+6;
  document.getElementById("at").innerHTML = "RM"+totalprice;
}

