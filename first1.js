	var gong=document.getElementById('bod42');
	var gg1=document.getElementById('gbox1');
	var gg2=document.getElementById('gbox2');
	var boxas = document.getElementById('boxas');
	var oNavlist = document.getElementById('nav').children;
	var bod311 = document.getElementById('bod311');
	var left12 = document.getElementById('left12');
	var right12 = document.getElementById('right12');
	var index = 1;
	var timer;
	var isMoving = false;

		gg2.innerHTML=gg1.innerHTML;
		gg2.style.top=330+"px";
		function move1(){
			var now = parseInt(getStyle(gg1,"top"));	
			var now2 = parseInt(getStyle(gg2,"top"));	
				if(now == -330){
					gg1.style.top = 330+"px";
				}else{
					gg1.style.top = now - 1 + "px";
				}
				if(now2 == -330){
					gg2.style.top = 330+"px";
				}else{
					gg2.style.top = now2-1+ "px";
				}			
		}
		var MyMar1=setInterval(move1,20)
		gong.onmouseover=function(){ 
			clearInterval(MyMar1);
		}
		gong.onmouseout=function() {
			MyMar1=setInterval(move1,20);
		}

		bod431.setAttribute("onclick", "chong()");
		function chong(){
			bod4311.innerHTML="¥"+bod431.value;
		}

		 var cover =document.getElementsByClassName('head')[0];
					window.onscroll=function(){
					var st =document.documentElement.scrollTop || document.body.scrollTop;if(st>129){
					cover.style.position ='fixed'
					}else{
					cover.style.position='static'
					}
					
				}

function animate(obj,json,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var isStop = true;
            for(var attr in json){
                var now = 0;
                if(attr == 'opacity'){
                    now = parseInt(getStyle(obj,attr)*100);
                }else{
                    now = parseInt(getStyle(obj,attr));
                }
                var speed = (json[attr] - now) / 8;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                var cur = now + speed;
                if(attr == 'opacity'){
                    obj.style[attr] = cur / 100;
                }else{
                    obj.style[attr] = cur + 'px';
                }
                if(json[attr] !== cur){
                    isStop = false;
                }
            }
            if(isStop){
                clearInterval(obj.timer);
                callback&&callback();
            }
        }, 30)
    }


    boxas.onmouseover = function(){
        animate(left12,{opacity:100})
        animate(right12,{opacity:100})
        clearInterval(timer)
    }
    boxas.onmouseout = function(){
        animate(left12,{opacity:0})
        animate(right12,{opacity:0})
        timer = setInterval(next, 2000);
    }
    right12.onclick = next;
    left12.onclick = prev;
    for( var i=0; i<oNavlist.length; i++ ){
        (function(i){
            oNavlist[i].onclick = function(){
                index = i+1;
                navmove();
                animate(bod311,{left:-800*index});
            }
        })(i);
    }
    function next(){
        if(isMoving){
            return;
        }
        isMoving = true;
        index++;
        navmove();
        animate(bod311,{left:-800*index},function(){
            if(index==7){
                bod311.style.left = '-800px';
                index = 1;
            }
            isMoving = false;
        });
    }
    function prev(){
        if(isMoving){
            return;
        }
        isMoving = true;
        index--;
        navmove();
        animate(bod311,{left:-800*index},function(){
            if(index == 0){
                bod311.style.left = '-4800px';
                index = 6;
            }
            isMoving = false;
        });
    }
    function navmove(){
        for( var i = 0; i < oNavlist.length; i++ ){
            oNavlist[i].className = "";
        }
        if(index > 6){
            oNavlist[0].className = "active";
        }else if(index<=0){
            oNavlist[5].className = "active";
        }else {
            oNavlist[index-1].className = "active";
        }
    }
    timer = setInterval(next, 2000);
    		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			} else {
				return getComputedStyle(obj, null)[attr];
			}
		}
		var xuan = document.getElementsByClassName('xaunfu')[0].children[0].children;
		var ewei = document.getElementsByClassName("ewei")[0];
		for(var erwei = 0; erwei<4; erwei++){
			(function (erwei){
				xuan[erwei].onmouseover = function (){
					buffer(xuan[erwei],{right:-20});
					if(erwei==2){
						ewei.src = 'img/erwei.png';
						ewei.style.marginTop="0px";
					}
				}
				xuan[erwei].onmouseout = function (){
					buffer(xuan[erwei],{right:-95});
					if(erwei==2){
						ewei.src = 'img/serwei.png';
						ewei.style.marginTop="45px";
					}
				}
			}(erwei))
		}


		function buffer(obj,json,fn){
			clearInterval(obj.timer);
			obj.timer=setInterval(function (){
				var flag = true;
				for(var i in json){
					if(i === 'opacity'){
						var target = parseInt(parseFloat(json[i])*100);
						var loc = parseInt(parseFloat(getStyle(obj,i))*100)||100;
					}else if(i ==='scrollTop'){
						loc = Math.ceil(obj.scrollTop);
						target = parseInt(json[i]);

					}else{
						var target = json[i];
						var loc = parseInt(getStyle(obj,i))||0;
					}
					var speed = (target-loc)*0.2;
					speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

					if(i === 'opacity'){
						obj.style.opacity = (loc+speed)/100;
						obj.style.filter="alpha(opacity:"+(loc+speed)+")";
					}else{
						obj.style[i] =loc+speed+'px';
					}
					if(loc!==target){
						flag = false;
					}
				}
				if(flag){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
			},20);
		}