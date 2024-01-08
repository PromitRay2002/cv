function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString(undefined,{timezone:'Asia/Kolkata',hour12:true});
}
showTime();
setInterval(function () {
	showTime();
}, 1000);