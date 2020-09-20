window.onload = function() {
  const searchButton = document.getElementById('search-btn');
  if(searchButton != null)
  {
    searchButton.onclick = doSomething;
  }
}

function doSomething() {
  console.log("test");

  changePage("results.html");

  var x = document.createElement("H1");
  var t = document.createTextNode("Available Tutor Information:");
  x.appendChild(t)
  var count =0
  {
    document.body.appendChild(x);
    console.log("test");
  }



}
function changePage(location) {
  window.location.href = location
}
