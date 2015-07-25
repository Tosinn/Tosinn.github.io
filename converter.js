function convertToFoot(inches) {
	var inches = document.getElementById("inch").value;
	var result = inches/12;
	document.getElementById("ft").value = result;
}