window.onload=function(){
	//购物车
	let shop=document.getElementsByClassName("shop")[0];
	let shopcar=document.getElementsByClassName("shopcar")[0];
	shop.onmouseenter=function(){
		shopcar.style.display="block";
		shopcar.style.height="90px";
		shopcar.style.transition="0.5s";
		shopcar.style.boxShadow="0 2px 3px 2px #e5e5e5";
		shop.style.background="white";
		shop.style.color="#ff6700";
	}
	shop.onmouseleave=function(){
		shopcar.style.display="";
		shopcar.style.height="0";
		shopcar.style.transition="0.5s";
		shop.style.background="#424242";
	}

	//侧导航
	let banner=document.getElementsByClassName("banner")[0];
	let nav=banner.getElementsByClassName("nav")[0];
	let son=nav.getElementsByClassName("son");
	let sonbox=document.getElementsByClassName("sonbox");
	for(let i=0;i<son.length;i++){
		son[i].onmouseenter=function(){
			for(let j=0;j<son.length;j++){
				sonbox[i].style.display="block";
			}
			sonbox[i].style.display="block";
		}
		son[i].onmouseleave=function(){
			sonbox[i].style.display="none";
		}
	}



	//选项卡
	let appliance=document.getElementsByClassName("appliance")[0];
	let right=appliance.getElementsByClassName("right");
	let nav1=appliance.getElementsByClassName("nav")[0];
	let span=nav1.getElementsByTagName("span");
	console.log(span,right);
	for(let i=0;i<span.length;i++){
		span[i].onmouseenter=function(){
			for(let j=0;j<span.length;j++){
				right[j].style.display="none";
			}
			right[i].style.display="block";
		}
	}


	let goods=document.getElementsByClassName("goods")[0];
	let right1=goods.getElementsByClassName("right");
	let nav2=goods.getElementsByClassName("nav")[0];
	let span1=nav2.getElementsByTagName("span");
	console.log(span1,right1);
	for(let i=0;i<span1.length;i++){
		span1[i].onmouseenter=function(){
			for(let j=0;j<span1.length;j++){
				right1[j].style.display="none";
			}
			right1[i].style.display="block";
		}
	}

	let goods1=document.getElementsByClassName("goods2")[0];
	let right2=goods1.getElementsByClassName("right");
	let nav3=goods1.getElementsByClassName("nav")[0];
	let span2=nav3.getElementsByTagName("span");
	console.log(span2,right2);
	for(let i=0;i<span2.length;i++){
		span2[i].onmouseenter=function(){
			for(let j=0;j<span2.length;j++){
				right2[j].style.display="none";
			}
			right2[i].style.display="block";
		}
	}


	let goods2=document.getElementsByClassName("goods3")[0];
	let right3=goods2.getElementsByClassName("right");
	let nav4=goods2.getElementsByClassName("nav")[0];
	let span3=nav4.getElementsByTagName("span");
	console.log(span3,right3);
	for(let i=0;i<span3.length;i++){
		span3[i].onmouseenter=function(){
			for(let j=0;j<span3.length;j++){
				right3[j].style.display="none";
			}
			right3[i].style.display="block";
		}
	}

	let goods3=document.getElementsByClassName("goods4")[0];
	let right4=goods3.getElementsByClassName("right");
	let nav5=goods3.getElementsByClassName("nav")[0];
	let span4=nav5.getElementsByTagName("span");
	console.log(span4,right4);
	for(let i=0;i<span4.length;i++){
		span4[i].onmouseenter=function(){
			for(let j=0;j<span4.length;j++){
				right4[j].style.display="none";
			}
			right4[i].style.display="block";
		}
	}



	let yiru=document.getElementsByClassName("yiru")[0];
	let box=appliance.getElementsByClassName("box")[2];
	box.onmouseenter=function(){
		yiru.style.transition="0.5s";
		yiru.style.height="78px";
		yiru.style.display="block";
	}
	box.onmouseleave=function(){
		yiru.style.height=0;
		yiru.style.transition="0.5s";
		yiru.style.display="";
	}




	//轮播图
	let wraper=document.getElementsByClassName("wraper")[0];
	let a=wraper.getElementsByTagName("a");
	let banner1=document.getElementsByClassName("banner")[0];
	let forwards=document.getElementsByClassName("prev")[0];
	let back=document.getElementsByClassName("next")[0];
	let btns=document.getElementsByClassName("btns")[0];
	let son1=btns.getElementsByClassName("son");
	console.log(forwards,back,btns,son1);
	let num=0;
	let t=setInterval(move,1000);
	function move(){
		num++;
		if(num==a.length){
			num=0;
		}
		for(let i=0;i<a.length;i++){
			a[i].style.zIndex=5;
			son1[i].style.background="none";
		}
		a[num].style.zIndex=10;
		son1[num].style.background="#ff6700";
	}
	function move1(){
		num--;
		if(num<0){
			num=a.length-1;
		}
		for(let i=0;i<a.length;i++){
				a[i].style.zIndex=5;
				son1[i].style.background="none";
		}
		a[num].style.zIndex=10;
		son1[num].style.background="#ff6700";
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,1000);
	}
	forwards.onclick=function(){
		move1();
	}
	back.onclick=function(){
		move();
	}
	for(let x=0;x<son1.length;x++){
		son1[x].onclick=function(){
			for(let y=0;y<son1.length;y++){
				a[y].style.zIndex="5";
				son1[y].style.background="none";
			}
			a[x].style.zIndex="10";
			son1[x].style.background="#ff6700";
			num=x;
		}
	}





	//闪购轮播图
	let button=document.querySelectorAll(".right .button");
	let you=document.querySelector(".bottom .you");
	let pic=document.querySelectorAll(".bottom .pic");
	let width1=parseInt(getComputedStyle(you,null).width)/2;
	console.log(button,you,pic,width1);
	let times=0;
	button[0].onclick=function(){
		times++;
		if(times==2){
			times=1;
		}
		you.style.transform='translateX('+'-'+width1*times+'px)';
	}
	button[1].onclick=function(){
		times--;
		if(times==-1){
			times=0;
		}
		you.style.transform='translateX('+'-'+width1*times+'px)';
	}
















	//logo部分选项卡
	// let white=document.getElementsByClassName("white")[0];
	// let nav6=white.getElementsByClassName("nav")[0];
	// let a1=nav6.getElementsByTagName("a");
	// let xxknr=document.getElementsByClassName("xxknr");
	// for(let i=0;i<8;i++){
	// 	a1[i].onmouseenter=function(){
	// 		xxknr[i].style.display="block";
	// 		xxknr[i].style.height="230px";
	// 		xxknr[i].style.transition="0.5s";
	// 	}
	// 	a1[i].onmouseleave=function(){
	// 		xxknr[i].style.display=" ";
	// 		xxknr[i].style.height="0";
	// 		xxknr[i].style.transition="0.5s";
	// 	}
	// }




	//内容选项卡
	let con=document.querySelector(".nr .con");
    let box1=con.querySelectorAll(".box");

    function lbt(obj){
        let width=parseInt(getComputedStyle(obj,null).width);
        let pre1=obj.querySelector(".pre");
        let end1=obj.querySelector(".end");
        let boxs=obj.querySelectorAll(".boxs");
        let sons=obj.querySelectorAll(".son");
        let flag=true;
        
        /*let p=setInterval(move2,2000);

        obj.onmouseenter=function(){
            clearInterval(p);
        }
        obj.onmouseleave=function(){
            p=setInterval(move2,2000);
        }*/

        let now=0;
        let next=0;
        function move2(){
            next++;
            if (next==boxs.length){
                next=0;
            }
            for(let j=0;j<sons.length;j++){
                sons[j].classList.remove("son1");
            }
            sons[next].classList.add("son1");
            boxs[next].style.left=width+"px";
            animate(boxs[now],{left:-width});
            animate(boxs[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        function move3(){
            next--;
            if (next<0){
                next=boxs.length-1;
            }
            for(let j=0;j<sons.length;j++){
                sons[j].classList.remove("son1");
            }
            sons[next].classList.add("son1");
            boxs[next].style.left=-width+"px";
            animate(boxs[now],{left:width});
            animate(boxs[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        pre1.onclick=function(){
            if(flag==false){
                return;
            }
            
            if(next==0){
                return;
            }
            flag=false;
            move3();
        }
        end1.onclick=function(){
            if(flag==false){
                return;
            }
            if(next==boxs.length-1){
                return;
            }
            flag=false;
            move2();
        }

        for (let k=0;k<sons.length;k++){
            sons[k].onclick=function(){
                if(k>now){
                    for(let j=0;j<sons.length;j++){
                        sons[j].classList.remove("son1");
                    }
                    sons[k].classList.add("son1");
                    boxs[k].style.left=width+"px";
                    animate(boxs[now],{left:-width});
                    animate(boxs[k],{left:0});
                    now=next=k;
                }
                else if(k<now){
                    for(let j=0;j<sons.length;j++){
                        sons[j].classList.remove("son1");
                    }
                    sons[k].classList.add("son1");
                    boxs[k].style.left=-width+"px";
                    animate(boxs[now],{left:width});
                    animate(boxs[k],{left:0});
                    now=next=k;
                }
                else{
                    return;
                }
            }
        }
    }


    box1.forEach(function(element){
        lbt(element);
    })
}