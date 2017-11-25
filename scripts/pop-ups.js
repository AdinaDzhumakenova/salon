/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/
//About Page Pop Up
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
					disablePopupProjects();
					disablePopupContact();
					disablePopupBlog();
					centerPopupAbout();
					loadPopupAbout();
				    $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
				$("#bg").click(function(){
					disablePopupAbout();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAbout();
			});
			});
//Projects Page Pop Up
			var popupProjectsStatus = 0;
			
			function loadPopupProjects(){
				if(popupProjectsStatus==0){
					$("#popupProjects").fadeIn("slow");
					popupProjectsStatus = 1;
				}
			}
			
			function disablePopupProjects(){
				if(popupProjectsStatus==1){
					$("#popupProjects").fadeOut("slow");
					popupProjectsStatus = 0;
				}
			}
			
			function centerPopupProjects(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupProjectsHeight = $("#popupProjects").height();
				var popupProjectsWidth = $("#popupProjects").width();
				$("#popupProjects").css({
					"position": "absolute",
					"top": windowHeight/2-popupProjectsHeight/2,
					"left": windowWidth/2-popupProjectsWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupProjects").fadeOut();
				popupProjectsStatus = 0;
				$("#projects").click(function(){
				$("#popupProjects").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupContact();
					disablePopupBlog();					
					centerPopupProjects();
					loadPopupProjects();
				    $("#popupProjects").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupProjectsClose").click(function(){
					disablePopupProjects();
				});
				$("#bg").click(function(){
					disablePopupProjects();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupProjects();
			});
			});
//Contact Page Pop Up
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupProjects();
					disablePopupBlog();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});
//Blog Page Pop Up
			var popupBlogStatus = 0;
			
			function loadPopupBlog(){
				if(popupBlogStatus==0){
					$("#popupBlog").fadeIn("slow");
					popupBlogStatus = 1;
				}
			}
			
			function disablePopupBlog(){
				if(popupBlogStatus==1){
					$("#popupBlog").fadeOut("slow");
					popupBlogStatus = 0;
				}
			}
			
			function centerPopupBlog(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupBlogHeight = $("#popupBlog").height();
				var popupBlogWidth = $("#popupBlog").width();
				$("#popupBlog").css({
					"position": "absolute",
					"top": windowHeight/2-popupMastHeight/2,
					"left": windowWidth/2-popupMasterWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupBlog").fadeOut();
				popupBlogStatus = 0;
				$("#blog").click(function(){
				$("#popupBlog").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();					
					centerPopupBlog();
					loadPopupBlog();
				    $("#popupBlog").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupBlogClose").click(function(){
					disablePopupBlog();
				});
				$("#bg").click(function(){
					disablePopupBlog();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupBlog();
			});
			});
//Master Page Pop Up


			var popupMasterStatus = 0;
			
			function loadPopupMaster(){
									$("#popupMaster").fadeIn("slow");
				if(popupMasterStatus==0){
					$("#popupMaster").fadeIn("slow");
					popupMasterStatus = 1;
				}
			}
			
			function disablePopupMaster(){
				if(popupMasterStatus==1){
					$("#popupMaster").fadeOut("slow");
					popupMasterStatus = 0;
				}
			}
			
			function centerPopupMaster(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupMaterHeight = $("#popupMaster").height();
				var popupMasterWidth = $("#popupMaster").width();
				$("#popupMaster").css({
					"position": "absolute",
					"top": windowHeight/2-popupMaterHeight/2,
					"left": windowWidth/2-popupMasterWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupMaster").fadeOut();
				popupMasterStatus = 0;
				$("#master").click(function(){
				$("#popupMaster").css({
					"visibility": "visible"	});

					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();		
					disablePopupBlog()			
					centerPopupMaster();
					loadPopupMaster();
				    $("#popupMaster").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	



				});
				$("#popupMasterClose").click(function(){
					disablePopupMaster();
				});
				$("#bg").click(function(){
					disablePopupMaster();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupMaster();
			});
			});


var popupSharesStatus = 0;
			
			function loadPopupShares(){
									$("#popupShares").fadeIn("slow");
				if(popupSharesStatus==0){
					$("#popupShares").fadeIn("slow");
					popupSharesStatus = 1;
				}
			}
			
			function disablePopupShares(){
				if(popupSharesStatus==1){
					$("#popupShares").fadeOut("slow");
					popupSharesStatus = 0;
				}
			}
			
			function centerPopupShares(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupSharesHeight = $("#popupShares").height();
				var popupSharesWidth = $("#popupShares").width();
				$("#popupShares").css({
					"position": "absolute",
					"top": windowHeight/2-popupSharesHeight/2,
					"left": windowWidth/2-popupSharesWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupShares").fadeOut();
				popupSharesStatus = 0;
				$("#shares").click(function(){
				$("#popupShares").css({
					"visibility": "visible"	});

					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();		
					disablePopupBlog()			
					centerPopupShares();
					loadPopupShares();
				    $("#popupShares").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	



				});
				$("#popupSharesClose").click(function(){
					disablePopupShares();
				});
				$("#bg").click(function(){
					disablePopupShares();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupShares();
			});
			});