//banner 轮播

/**
 * 2017-03-11
 * zwsvane
 * 
 */

$(function(){
	var bannerDare = new Array();
		
		bannerDare[0] = $(".scroll-banner-img li").length; //banner 个数
		bannerDare[1] = $("body").width(); //banner 宽度
		
		//banner 数字
		$(".banner-num").html("1/"+bannerDare[0]);
		
		$(".lw-banner-big-img").css("padding-left",bannerDare[1]+"px");
		$(".lw-banner-big-img").css("padding-right",bannerDare[1]+"px");
		$(".lw-banner-big-img").css("margin-left",-bannerDare[1]+"px");
		$(".lw-banner-big-img").css("width",(bannerDare[0])*bannerDare[1]+"px");
		$(".last-banner,.first-banner").css("width",bannerDare[1]+"px");
		$(".scroll-banner-img ul").css("width",(bannerDare[0])*bannerDare[1]+"px");
		$(".scroll-banner-img li").css("width",bannerDare[1]+"px");
		
		
		var cur = 0;
		
		
		//滚动方法
		function bannerCorll(){
			
			cur++;
			if(cur <(bannerDare[0])){
				
				$(".banner-small span").removeClass("curbanner");
				$(".banner-small span").eq(cur).addClass("curbanner");
				//banner 数字
				$(".banner-num").html((cur+1)+"/"+bannerDare[0]);
				
				$(".first-banner").animate({"right":bannerDare[1]+"px"},600,"swing");
				$(".scroll-banner-img ul").animate({"margin-left":-bannerDare[1]*cur+"px"},600,"swing");
				
				$(".first-banner").hide();
				$(".first-banner").animate({"right":"-100%"},600,"swing");
			}
			else{
					
					$(".banner-small span").removeClass("curbanner");
					$(".banner-small span").eq(0).addClass("curbanner");
					$(".banner-num").html("1/"+bannerDare[0]);
				$(".first-banner").show();
				$(".scroll-banner-img ul").animate({"margin-left":-bannerDare[1]*cur+"px"},600,"swing");
				$(".first-banner").animate({"right":"0px"},600,"swing");
				$(".scroll-banner-img ul").animate({"margin-left":"0px"},600,"swing");
				cur = 0;
			}
						
			
		}
		
		
		//自动轮播
		var timer = window.setInterval(function(){
						
				bannerCorll();
					
				},4000);
				
				$(".lw-banner").hover(function(){
					
					clearInterval(timer);
					
				},function(){
				
					timer = window.setInterval(function(){
					
						bannerCorll();
							
					},4000);
				
				})
				
		//点击小图切换大图
		$(".banner-small span").live("click",function(){
			cur = $(this).index()-1;
			console.log(cur);
			$(".banner-small span").removeClass("curbanner");
			$(".banner-small span").eq(cur).addClass("curbanner");
			bannerCorll();
			
			
			
		})
		
		//左切换
		$(".banner-left").live("click",function(){
			//cur++;
			//bannerCorll();
			
		})
		
		
		//滚动方法
		function bannerReftCorll(){
			
			cur--;
			if(cur >-1){
				
				$(".banner-small span").removeClass("curbanner");
				$(".banner-small span").eq(cur).addClass("curbanner");
				//banner 数字
				$(".banner-num").html((cur+1)+"/"+bannerDare[0]);
				
				$(".last-banner").animate({"right":"-100%"},600,"swing");
				$(".scroll-banner-img ul").animate({"margin-left":-bannerDare[1]*cur+"px"},600,"swing");
				
				$(".last-banner").hide();
				$(".last-banner").animate({"left":"-100%"},600,"swing");
			}
			else{
					
					$(".banner-small span").removeClass("curbanner");
					$(".banner-small span").eq(0).addClass("curbanner");
					$(".banner-num").html("1/"+bannerDare[0]);
					$(".last-banner").show();
					$(".scroll-banner-img ul").animate({"margin-left":-bannerDare[1]*cur+"px"},600,"swing");
					$(".last-banner").animate({"left":"0px"},600,"swing");
					$(".scroll-banner-img ul").animate({"margin-left":"0px"},600,"swing");
					cur = 0;
			}
						
			
		}
		
		$(".banner-right").live("click",function(){
			
			//bannerReftCorll();
		})
		
		
		
		
})
