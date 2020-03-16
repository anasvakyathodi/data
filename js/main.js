var btn = document.getElementById('bton');
var content = document.getElementById('content');
var rollno = document.getElementById('rollno');
btn.addEventListener('click', function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', './json/data.json');
  ourRequest.onerror = function() {
    alert("error occured !!!");
  }
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status <= 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      alert("connection established, but error in url ");
    }
  };
  ourRequest.send();
});

function renderHTML(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].ROLLNO == rollno.value) {
      var str = '<div class="noselect"><div class="row"><div class="col-lg-6">NAME</div><div class="col-lg-6">' + data[i].NAME +
        '</div></div><div class="row"><div class="col-lg-6">ADMISSION NO</div><div class="col-lg-6">' + data[i].ADMISSIONNO +
        ' </div></div><div class="row"><div class="col-lg-6">MOBILE</div><div class="col-lg-6">' + data[i].MOBILE +
        ' </div></div><div class="row"><div class="col-lg-6">E-MAIL</div><div class="col-lg-6">' + data[i].E_MAIL +
        ' </div></div><div class="row"><div class="col-lg-6">BLOOD GROUP</div><div class="col-lg-6">' + data[i].BLOOD_GROUP +
        ' </div></div><div class="row"><div class="col-lg-6">PERMANENT ADDRESS</div><div class="col-lg-6">' + data[i].PERMANENT_ADDRESS +
        ' </div></div><div class="row"><div class="col-lg-6">DATE OF BIRTH</div><div class="col-lg-6">' + data[i].DOB +
        ' </div></div><div class="row"><div class="col-lg-6">FATHER&rsquo;S NAME</div><div class="col-lg-6">' + data[i].FATHER_NAME +
        '</div></div></div>';
      content.innerHTML = str;
    }
  }
}
