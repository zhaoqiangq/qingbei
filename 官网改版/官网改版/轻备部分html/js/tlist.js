$(document).ready(function(){
	//小图左右按钮初始化
	function btnBInitA(){
		if(allPic > 4) {
			$("#sRightBtnB").attr("class","sRightBtnB");
		}
	}
	function btnBInitB(){
		if(curPic > 2 && (allPic-curPic) > 4) {
			if($("#sLeftBtnB").attr("class") != "sLeftBtnB") {$("#sLeftBtnB").attr("class","sLeftBtnB");}
			if($("#sRightBtnB").attr("class") != "sRightBtnB") {$("#sRightBtnB").attr("class","sRightBtnB");}
		}else if(curPic < 3){
			if($("#sLeftBtnB").attr("class") != "sLeftBtnBBan") {$("#sLeftBtnB").attr("class","sLeftBtnBBan");}
			if(allPic > 4) {
				if($("#sRightBtnB").attr("class") != "sRightBtnB") {$("#sRightBtnB").attr("class","sRightBtnB");}
			}else{
				if($("#sRightBtnB").attr("class") != "sRightBtnBBan") {$("#sRightBtnB").attr("class","sRightBtnBBan");}
			}
		}else if(curPic > (allPic-4)) {
			if($("#sRightBtnB").attr("class") != "sRightBtnBBan") {$("#sRightBtnB").attr("class","sRightBtnBBan");}
			if(allPic > 4) {
				if($("#sLeftBtnB").attr("class") != "sLeftBtnB") {$("#sLeftBtnB").attr("class","sLeftBtnB");}
			}else{
				if($("#sLeftBtnB").attr("class") != "sLeftBtnBBan") {$("#sLeftBtnB").attr("class","sleftBtnBBan");}
			}
		}
	}
	//小图标签selected函数
	function smallPicSelected(){
		if(!$(".scrolltab .ulSmallPic li:eq("+curPic+")").hasClass("liSelected")) {$(".scrolltab .ulSmallPic li:eq("+curPic+")").addClass("liSelected");}
		if(preShowPic!=(-1)) {
			if($(".scrolltab .ulSmallPic li:eq("+preShowPic+")").hasClass("liSelected")) {
				$(".scrolltab .ulSmallPic li:eq("+preShowPic+")").removeClass("liSelected");
			}
		}
	}
	//小图滚动函数
	function smallPicScroll(){
		if(curPic != preShowPic) {
			var leftPosition=0;
			if(curPic>2 && curPic<($(".scrolltab .ulSmallPic li").length-3)) {
				leftPosition=-(curPic-2)*95;
			}else if(curPic > ($(".scrolltab .ulSmallPic li").length-4) && $(".scrolltab .ulSmallPic li").length>4) {
				leftPosition=-($(".scrolltab .ulSmallPic li").length-4)*95;
			}
			leftPosition+="px";
			$(".scrolltab .ulSmallPic").attr("rel","moving");
			$(".scrolltab .ulSmallPic").animate({left:leftPosition},200,function(){$(".scrolltab .ulSmallPic").attr("rel","stop");});
		}
	}
	//小图li按键效果
	for (var i=0;i<$(".scrolltab .ulSmallPic li").length;i++) {
		(function(j) {
			$(".scrolltab .ulSmallPic li:eq("+j+")").click(function() {
				if($(this).attr("class") != "liSelected") {
					numInit(j);
					btnAInit();
					smallPicSelected();
				}
			})
		}) (i);
	}
	
	//小图左右按键效果
	$("#sLeftBtnB").mouseover(function(){
		if($(this).attr("class")=="sLeftBtnB") {
			$(this).attr("class","sLeftBtnBSel");
		}
	});
	
	$("#sLeftBtnB").mouseout(function(){
		if($(this).attr("class")=="sLeftBtnBSel") {
			$(this).attr("class","sLeftBtnB");
		}
	});
	
	$("#sLeftBtnB").click(function(){
		if($(this).attr("class")=="sLeftBtnBSel") {
			var leftPosition=$(".scrolltab .ulSmallPic").css("left");
			var leftPositionNum=Number(leftPosition.substring(0,(leftPosition.length-2)));
			leftPosition=leftPositionNum+95+"px";
			if(leftPosition=="0px") {if($(this).attr("class") != "sLeftBtnBBan") {$(this).attr("class","sLeftBtnBBan");}}
			var bestLeftNum=-($(".scrolltab .ulSmallPic li").length-4)*95;
			if((leftPositionNum+95) > bestLeftNum && $("sRightBtnB").attr("class") != "sRightBtnB") {$("#sRightBtnB").attr("class","sRightBtnB")}
			if($(".scrolltab .ulSmallPic").attr("rel")=="stop"){
				$(".scrolltab .ulSmallPic").attr("rel","moving");
				$(".scrolltab .ulSmallPic").stop();
				$(".scrolltab .ulSmallPic").animate({left:leftPosition},200,function(){$(".scrolltab .ulSmallPic").attr("rel","stop");});
			}
		}
	});
	
	$("#sRightBtnB").mouseover(function(){
		if($(this).attr("class")=="sRightBtnB") {
			$(this).attr("class","sRightBtnBSel");
		}
	});
	
	$("#sRightBtnB").mouseout(function(){
		if($(this).attr("class")=="sRightBtnBSel") {
			$(this).attr("class","sRightBtnB");
		}
	});
	
	$("#sRightBtnB").click(function(){
		if($(this).attr("class")=="sRightBtnBSel"){
			var leftPosition=$(".scrolltab .ulSmallPic").css("left");
			var leftPositionNum=Number(leftPosition.substring(0,(leftPosition.length-2)));
			leftPosition=leftPositionNum-95+"px";
			var bestLeftNum=-($(".scrolltab .ulSmallPic li").length-4)*95;
			if((leftPositionNum-95)==bestLeftNum) {$(this).attr("class","sRightBtnBBan");}
			if(leftPositionNum==0 && $("#sLeftBtnB").attr("class")=="sLeftBtnBBan") {$("#sLeftBtnB").attr("class","sLeftBtnB");}
			if($(".scrolltab .ulSmallPic").attr("rel")=="stop") {
				$(".scrolltab .ulSmallPic").attr("rel","moving");
				$(".scrolltab .ulSmallPic").stop();
				$(".scrolltab .ulSmallPic").animate({left:leftPosition},200,function(){$(".scrolltab .ulSmallPic").attr("rel","stop");});
			}
		}
	});
	
	liMouseOn();
	numInit("init");
	btnAInit();
	btnBInitA();
	smallPicSelected();	

});