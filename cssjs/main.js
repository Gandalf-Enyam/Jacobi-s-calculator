
var tol = tolFunc();


function tolFunc() {
    return 0.00005;
}

var url = "https://jacobiapp.herokuapp.com/";

function solve() {
    var requestURL = url + "solve";
    var requestMethod = "POST";
    var requestHeader = { header: "Content-type", value: "application/x-www-form-urlencoded" };

    var xhttp = new XMLHttpRequest();
    xhttp.open(requestMethod, requestURL, true);
    xhttp.setRequestHeader(requestHeader.header, requestHeader.value);

    xhttp.onreadystatechange = function () {
        console.log(xhttp.responseText);
        document.getElementById("results-table").innerHTML = xhttp.responseText;
    }

    var data = "eqns=" + document.getElementById("eqns").value + "&&tol=" + tol;
    xhttp.send(data);
}

function validateAndSolve() {

    var requestURL = url + "validate";
    var requestMethod = "POST";
    var requestHeader = { header: "Content-type", value: "application/x-www-form-urlencoded" };

    var xhttp = new XMLHttpRequest();
    xhttp.open(requestMethod, requestURL, true);
    xhttp.setRequestHeader(requestHeader.header, requestHeader.value);

    xhttp.onreadystatechange = function () {
		if (xhttp.responseText != ""){
			document.getElementById("errmg").innerHTML = xhttp.responseText;
			document.getElementById("error-pane").style.display = "block";
			return;
		}
		solve();
    }

    var data = "eqns=" + document.getElementById("eqns").value + "&&tol=" + tol;
    xhttp.send(data);

}

function hideError() {
    document.getElementById("error-pane").style.display = "none";
}
