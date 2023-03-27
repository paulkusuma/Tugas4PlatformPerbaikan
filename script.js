function tampilMasukanJumlahPilihan() {
    var jumlah = parseInt(document.getElementById("dataInputJumlah").value);
    var tag = "";
    for (var i = 1; i <= jumlah; i++) {
      tag +=
        "Pilihan " + i + ' : <input type="text" id="inputPilihan' + i + '"> <br>';
    }
    document.getElementById("isi").innerHTML = tag;
    document.getElementById("tombolOKPilihan").style.display = "block";
  }
  
  document
    .getElementById("tombolOKPilihan")
    .addEventListener("click", function () {
      var jumlah = parseInt(document.getElementById("dataInputJumlah").value);
      for (var i = 1; i <= jumlah; i++) {
        var inputPilihan = document.getElementById("inputPilihan" + i);
        var radioPilihan = document.createElement("input");
        radioPilihan.type = "radio";
        radioPilihan.id = "radioPilihan" + i;
        radioPilihan.name = "pilihan";
        radioPilihan.value = inputPilihan.value;
  
        var label = document.createElement("label");
        label.for = "radioPilihan" + i;
        label.textContent = "Pilihan " + i + ": " + inputPilihan.value;
        document.querySelector("form").appendChild(radioPilihan);
        document.querySelector("form").appendChild(label);
        document.querySelector("form").appendChild(document.createElement("br"));
      }
      document.getElementById("tampilkanData").style.display = "block";
    });
  
  function tampilkanDataTerpilih() {
    var radioButtons = document.getElementsByName("pilihan");
    var dataTerpilih = "";
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        dataTerpilih = radioButtons[i].value;
        break;
      }
    }
    document.getElementById("dataTerpilih").innerHTML =
      "Anda memilih: " + dataTerpilih;
  }
  