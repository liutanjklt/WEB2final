var s1 = document.getElementById("bod3");
var s2 = document.getElementById("bod11");
var s3 = document.getElementById("bod12");
var s4 = document.getElementById("bod2");
var s5 = document.getElementById("bod22");
var s6 = document.getElementById("bod41");
var s7 = document.getElementById("bod21");
var s8 = document.getElementById("bod31");
var s9 = document.getElementById("bod33");
var s10 = document.getElementById("bod1");
var s11 = document.getElementById("bod52");
var s12 = document.getElementById("jia3");
var s13 = document.getElementById("jia1");
var bod1 = document.getElementById("bod1");
var slider = document.getElementById("slider");
var img2 = document.getElementById("img2");
var Bimg = document.getElementById("Bimg");

function less() {
	var sk12 = document.getElementById("bod321");
	var sk13 = document.getElementById("bod31");
	var sk14 = document.getElementById("bod33");
	if(sk12.value==1){
		sk13.style.cursor="not-allowed";
	}
	else{
		sk12.value--;
		sk14.style.cursor="pointer";
		if(sk12.value==1){
		sk13.style.cursor="not-allowed";
	}
	}
	
}
function add() {
	var sk12 = document.getElementById("bod321");
	var sk13 = document.getElementById("bod33");
	var sk14 = document.getElementById("bod31");
	if(sk12.value==5){
		sk13.style.cursor="not-allowed";
	}
	else{
		sk12.value++;
		sk14.style.cursor="pointer";
		if(sk12.value==5){
		sk13.style.cursor="not-allowed";
	}
	}
	
}
s8.onclick=less;
s8.onmouseover=function(){
	var sk12 = document.getElementById("bod321");
	var sk13 = document.getElementById("bod31");
		if(sk12.value==1){
		sk13.style.cursor="not-allowed";
	}
}
s9.onclick=add;

function change2() {
	var sk12 = document.getElementById("bod21");
	var sk13=document.getElementById("bod22");
	var sk14=document.getElementById("bod41");
	sk12.style.background="none";
	sk12.style.border = 'none';
	sk12.style.backgroundimage="url()";
	sk13.style.background="url('img/duigou.png')no-repeat";
	sk13.style.backgroundPosition="50px 19px";
	sk13.style.border='1px solid #ff0853';
	sk14.innerHTML="\"200ml\"";
}
function change21() {
	var sk13 = document.getElementById("bod21");
	var sk12=document.getElementById("bod22");
	var sk14=document.getElementById("bod41");
	sk12.style.background="none";
	sk12.style.border = 'none';
	sk12.style.backgroundimage="url()";
	sk13.style.background="url('img/duigou.png')no-repeat";
	sk13.style.backgroundPosition="50px 19px";
	sk13.style.border='1px solid #ff0853';
	sk14.innerHTML="\"150ml\"";
}
function change() {
	var sk12 = document.getElementById("bod2");
	var sk13=document.getElementById("bod3");
	sk12.style.border="2px solid #ffffff";
	sk13.style.border="2px solid #ff9003"
	s10.style.background="url('img/pp1.jpeg')";
	Bimg.src="img/pp3.jpeg";
}
function change1() {
	var sk12 = document.getElementById("bod2");
	var sk13=document.getElementById("bod3");
	sk13.style.border="2px solid #ffffff";
	sk12.style.border="2px solid #ff9003"
	s10.style.background="url('img/pp0.jpeg')";
	Bimg.src="img/pp2.jpeg";
}

function tanchu(){
	var sk11= document.getElementById("jiaru");
	var sk12= document.getElementById("jiaru2");
	var sk13=document.getElementById("jia3");
	sk12.style.display="block";
	sk12.style.left= (document.body.offsetWidth-408)/2+"px";
	sk12.style.top= (window.screen.height-180)/2+"px";
	sk11.style.display="block";
	sk11.style.height= document.body.offsetHeight+"px";
	sk13.style.cursor="pointer";
}
function tanchu2(){
	var sk11= document.getElementById("jiaru");
	var sk12= document.getElementById("jiaru2");
	sk12.style.display="none";
	sk11.style.display="none";
}
s1.onclick = change;
s2.onclick = change1;
s3.onclick = change;
s4.onclick = change1;
s5.onclick = change2;
s7.onclick = change21;
s11.onclick=tanchu;
s12.onclick=tanchu2;
s13.onclick=tanchu2;
		bod1.onmouseover = function(){
			slider.style.display = "block";
			img2.style.display = "block";
			img2.style.left=601+"px";
			img2.style.top=227+"px";
		}
		bod1.onmouseout = function(){
			slider.style.display = "none";
			img2.style.display = "none";
		}
		bod1.onmousemove = function(ev){
			var ev = ev||window.event;
			var st =document.documentElement.scrollTop || document.body.scrollTop
			var left = ev.clientX - bod1.offsetLeft - slider.offsetWidth/2;
			var top = ev.clientY - bod1.offsetTop - slider.offsetHeight/2;
			var maxLeft = bod1.offsetWidth - slider.offsetWidth;
			var maxTop = bod1.offsetHeight - slider.offsetHeight-st;
			left = left>maxLeft?maxLeft:left<0?0:left;
			top = top>maxTop?maxTop:top<0?0:top;
			
			slider.style.left = left+bod1.offsetLeft+"px";
			slider.style.top = top+bod1.offsetTop+st+"px";
			var w = left/maxLeft;
			var h = top/maxTop;
			var BmaxLeft = img2.offsetWidth - Bimg.offsetWidth; 
			var BmaxTop = img2.offsetHeight - Bimg.offsetHeight; 
			Bimg.style.left = w*BmaxLeft + "px";
			Bimg.style.top = h*BmaxTop + "px";
		}