/**2017-01-13**/

//滚动显示左右悬浮
$(window).scroll(function(){

	var creenH = $(".lw-main").height()+$(".lw-banner").height();
	var topH = $(window).scrollTop();

	if(topH > creenH){
		//$(".lw-right-showy").show();
		//$(".lw-store-xf").show();
	}
	else{
		//$(".lw-right-showy").hide();
		//$(".lw-store-xf").hide();
		
	}
})


//菜单高亮
$(function(){
	
	//边界处理
 	function sideDel(obj,ele,num){
 		for(var i = 0;i<obj.find(ele).length;i++){
			if((i+1)%num==0){
				obj.find(ele).eq(i).css("margin-right","0")
			}
			
		}
 		
 	};
 	

	//列表边界处理
	function sideDeal(obj,objChild,num,classN){
		for(var i = 0; i <$(obj).find(objChild).length;i++){
			
			if((i+1)%num==0){
				$(obj).find(objChild).eq(i).addClass(classN)
			}
		}
		
	}

	//切换
	
	function tabList(obj,curTab){
		$(obj).find("span").live("click",function(){
			
			$(obj).find("span").removeClass(curTab);
			$(this).addClass(curTab);
			$(obj).find(".tab-list").fadeOut();
			$(obj).find(".tab-list").eq($(this).index()).fadeIn();
		})
		
	};
	
	$(".lw-nav-list li").hover(function(){
		
		$(this).find("ol").stop().slideDown();
		
	},function(){
		$(this).find("ol").stop().slideUp();
	})
	
	$(".lw-wx").hover(function(){
		
		$(".show-wx-ewm").show();
		
	},function(){
		
		$(".show-wx-ewm").hide();
	})
	
	$(".lw-footer-wx").hover(function(){
		
		$(".show-wx-ewm2").show();
		
	},function(){
		
		$(".show-wx-ewm2").hide();
	})
	
	//左侧悬浮
	$(".lw-store-addrss").hover(function(){
		
		var spanNum = $(this).index();
			spanNum = spanNum >($(".lw-store-addrss").length-2)?($(".lw-store-addrss").length-2):spanNum;
		
		var topLength = (spanNum)*60;
			$(".lw-store-detial").hide();
			$(".lw-store-detial").eq(spanNum).css("margin-top",-(180-topLength)+"px");
			$(".lw-store-detial").eq(spanNum).show();
		
	},function(){
		
		$(".lw-store-detial").hide();
	})
	
	
	function sidedeal(){
		//首页 合作伙伴边界处理
	 	sideDel($(".lw-index-partner-list"),"li",6);
		//首页 海外婚礼列表处理
	 	sideDel($(".lw-index-abroad-list"),"li",3);
		//首页 海外婚礼策划处理
	 	sideDel($(".lw-index-plan-list"),"li",3);
		
	}
	
	sideDeal(".lw-join-advance","li","2","rightAlign");
	sideDeal(".lw-raiders-list","li","2","lw-raiders-right");	
	
 	
 	$(".lw-index-plan-list li").hover(function(){
 		$(this).find("span").stop().animate({"bottom":"-100%"},500,"swing");
 		$(this).find("dl").stop().animate({"bottom":"5%"},500,"swing");
 		
 		
 	},function(){
 		
 		$(this).find("dl").stop().animate({"bottom":"-200%"},500,"swing");
 		$(this).find("span").stop().animate({"bottom":"0"},500,"swing");
 	})
 	
 	//广告栏切换
 	
 	$(".lw-index-gg-tab span").live("mouseover",function(){
 		var eq = $(this).index();
 		$(".lw-index-gg-tab span").find("label").attr("class","");
 		$(".lw-index-gg-tab span").removeClass("index-gg-cur");
 		$(this).addClass("index-gg-cur");
 		$(this).find("label").attr("class","lable-gg-bg"+eq);
 		$(".lw-index-gg img").fadeOut();
 		$(".lw-index-gg img").eq(eq).stop().fadeIn();
 	})
 	
 	//新闻切换
 	$(".new-list-tab").css("height",$(".le-index-news-list-title").height()+$(".tab-list").height()+20+"px")
 	tabList(".new-list-tab","titleCur");
 	
 	$(".new-abroad-show").css("height",$(".le-index-news-list-title").height()+$(".new-abroad-show").find(".tab-list").height()+20+"px")
 	tabList(".new-abroad-show","titleCur");
 	
 	//右侧悬浮
 	$(".lw-right-tel").hover(function(){
 		$(".lw-right-tel").stop().animate({"width":"166px","background":"#444"},300)
 		$(".lw-right-tel").find("p").fadeIn();
 	},function(){
 		$(".lw-right-tel").stop().animate({"width":"50px","background":"#df4390"},300)
 		$(".lw-right-tel").find("p").fadeOut();
 		
 	})
 	$(".lw-right-ewm").hover(function(){
 		$(".show-wx-ewm3").stop().animate({"right":"11px"},600)
 		
 	},function(){
 		$(".show-wx-ewm3").stop().animate({"right":"-1000px"},600)
 		
 		
 	})
 	
 	//移动端新闻切换
 	$(".lw-tel-news-title label").live("touchend",function(){
 		$(".lw-tel-news-title label").removeClass("telnewscur");
 		$(this).addClass("telnewscur");
 		$(".lw-tel-news-list").find(".tab-list").hide();
 		$(".lw-tel-news-list").find(".tab-list").eq($(this).index()).show();
 	})
 	
	function resetWidth(){
		//底部地址宽度
		$(".lw-footer-store-list dt").css("width",($(".lw-main").width()*0.45-80)+"px");
		//品牌
 		
 		$(".lw-index-brand-title").css("height",($(".lw-index-brand-right").height())+"px");
 		if($(".lw-index-gg").find("img").eq(0).height()!=0){
 			$(".lw-index-gg").css("height",$(".lw-index-gg").find("img").eq(0).height()+"px");
 			
 		}
 		else{
 			
 		}
 		sidedeal();
	}
	if($(window).width()>960){
		resetWidth()
	}
	
	//project js
	
	//tab title center
	function tabTitle(){
		var tabW = 0;
		for(var i = 0;i<=$(".tab-list-title label").length;i++){
			
			tabW = $(".tab-list-title label").eq(i).outerWidth(true)+tabW;
		}
	
		$(".tab-list-title label").eq(0).css("margin-left",($(".tab-list-title").width()-tabW-15)/2+"px");
		
	}
	tabTitle();
	
	//服务理念 八条信息
	for(var i = 0 ;i <$(".lw-fwln-line-eight li").length;i++){
		
		if((i+1)%2==0){
			
			$(".lw-fwln-line-eight").find("li").eq(i).css("float","right");
			
		}
		$(".lw-fwln-line-eight").find("li").eq(i).css("background-image","url(images/lw-img/0"+(i+1)+".png)");
	}
	
	//乐惟直播
	for(var i = 0 ;i <$(".lw-fwln-lwzb li").length;i++){
		
		if((i+1)%3==0){
			
			$(".lw-fwln-lwzb").find("li").eq(i).css("margin-right","0");
			
		}
	}
	
	
	//品牌历程
	/*function processList(){
		
		var upLength  = 0;
		var DownLength  = 0;
		for(var i = 0; i< $(".lw-scroll-process-up").find(".lw-process-list-up").length;i++){
			
			upLength = upLength + $(".lw-scroll-process-up").find(".lw-process-list-up").width();
		} ;
		
		
		for(var i = 0; i< $(".lw-scroll-process-down").find(".lw-process-list-up").length;i++){
			
			DownLength = DownLength +$(".lw-scroll-process-down").find(".lw-process-list-up").width();
		}
		
		if(upLength < DownLength){
			
			alert("a")
			
		}
		else{
			alert("b")
		}
		
		
	}*/
	
//人才招聘
if($("div").hasClass("job-list-show")){
	
	//黑灰相间
	for(var i =0;i<$(".job-list-show dl").length;i++){
		
		if((i+1)%2==0){
			$(".job-list-show dl").eq(i).find("dd").css("background","#f3f3f3");
		}

	}
	
	//点击事件
	$(".job-list-show dl").find("dd").live("click",function(){
		
		if($(this).find("em").hasClass("upjt")){
			$(this).find("em").removeClass("upjt");
			$(this).find("em").html("展开");
			
		}
		else{
			$(this).find("em").addClass("upjt");
			$(this).find("em").html("收起");
			
		};
		$(this).next("dt").slideToggle();
		
	})
	
}
	

 //品牌历程

function TimeScroll(){
	var tabNum =Math.ceil( $(".lw-position").width()/440);
	var rightNum = 0;
	switch(tabNum){
		case 1: rightNum =2;break;
		case 2: rightNum=3; break;
		case 3: rightNum =5; break;
		case 4: rightNum =7; break;
	
	}
	var dlWidth1 = $(".lw-scroll-process-up").find("dl").outerWidth();
	var dlWidth2 = $(".lw-scroll-process-down").find("dl").outerWidth();
	var containW =$(".lw-process-container").width();
	var numYear1 = Math.ceil(containW/dlWidth1);
	var numYear2 = Math.ceil(containW/dlWidth2);
	var left_num = $(".lw-scroll-process-up").find("dl").eq(0).attr("data-time");
	$(".lw-process-rightbtn").html((parseInt(left_num)+parseInt(rightNum)));
	
	var i =0;
	var timePlay = function(i){
		
		$(".lw-scroll-container").animate({"margin-left":(-i)*dlWidth2+"px"})
		
	}
	
	$(".lw-process-rightbtn").live("click",function(){
		i++;
		if(i<(tabNum)){
			
			i=i;
			$(".lw-process-rightbtn").removeClass("datanull");
			$(".lw-process-leftbtn").removeClass("datanull");
			$(".lw-process-rightbtn").html((parseInt(left_num)+parseInt(rightNum))+i);
			$(".lw-process-leftbtn").html((parseInt(left_num))+i);
		}
		else{
			
			i=tabNum;
			$(".lw-process-rightbtn").addClass("datanull");
			$(".lw-process-rightbtn").html(" ")
			
		};
		if($(this).hasClass("datanull")){
			
			
		}else{
			timePlay(i);
			
			
			
		}
		
	});
	
	//左切换
	$(".lw-process-leftbtn").live("click",function(){
		i--;
		console.log(i);
		if(i>=0){
			i=i
			$(".lw-process-leftbtn").removeClass("datanull");
			$(".lw-process-rightbtn").html((parseInt(left_num)+parseInt(rightNum))+i);
			$(".lw-process-leftbtn").html((parseInt(left_num))+i);
			
		}
		else{
			i=0;
			$(".lw-process-leftbtn").addClass("datanull");
			$(".lw-process-leftbtn").html(" ")
			
		}
		if($(this).hasClass("datanull")){
			
			
		}else{
			timePlay(i)
			
		}
		
		
		
	})
	
		
		
}

TimeScroll();



	//海外婚礼
	sideDeal(".lw-oversea-wed","li",2,"rightMrign");

	
	

	
	//海外婚礼详情图片切换
	
	imgTab(".lw-sea-deital-imgscroll");
	
	//窗口调整
	$(window).resize(function(){
			
			if($(window).width()>960){
					resetWidth()
				}
				
		
		})
	
})


//js  方法部分

//图片切换
function imgTab(obj){
	
		var _this = $(obj);
		var _leftBtn = _this.find(".leftBtn");
		var _rightBtn = _this.find(".rightBtn");
		var _len = _this.find("li").length;
		var _imgNum = _this.find(".imgNum");
		var _num = 0;
		 _this.find("li").hide();
		 _this.find("li").eq(0).fadeIn();
		 imgNum(0);
		 //图片淡隐淡现
		 function fadeImg(i){
			
			 _this.find("li").hide();
			 _this.find("li").eq(i).fadeIn("slow"); 
		 }
		 function imgNum(i){
			 _imgNum.html(" assgag");
			 _imgNum.html((i+1)+"/"+_len);
			
		 }
		 //切换
		 _leftBtn.live("click",function(){
			 _num--;
			 _num = _num<0?0:_num;
			 fadeImg(_num);
			 imgNum(_num)
		 });
		 //切换
		 _rightBtn.live("click",function(){
			 _num++;
			 _num = _num<_len?_num:(_len-1);
			 fadeImg(_num);
			 imgNum(_num)
		 });
		
		
		
		
	
}




	