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
		yiru.style.height="78px";
		yiru.style.transition="0.5s";
		yiru.style.display="block";
	}
	box.onmouseleave=function(){
		yiru.style.height=0;
		yiru.style.transition="0.5s";
		yiru.style.display="";
	}
}