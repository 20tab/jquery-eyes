/* ------------------------------------------------------------------------
	Class: Eyes
	Use: Eyes clone for jQuery
	Author: Raffaele Colace - 20tab s.r.l. (http://20tab.com)
	Version: 0.0.1 - Beta
	|				|
  1	|		2		| 3 
----A---------------B---
  4	|	   eyes		| 6
----C---------------D---  
  7	|		8		| 9
  	|				|
------------------------------------------------------------------------- */
(function( $ ) {

	$.fn.Eyes = function(options){
		var config = $.extend({
			width				: 92,//eyes' width
			height			  	: 40,//eyes' height
			eyeWidth		  	: 34,//width of single eye
			borderRadius		: 30,//border radius for eye element
			pupilBG				: '#231F20',//pupil's background
			pupilWidth			: 20,//pupils' width
			pupilHeight		  	: 20,//pupils' height
			pupilBorderRadius 	: 20,//pupils' border radius
			target				: "*", //selectors for the events target
			
		},options);
		
		$('.eyesfixfloat').css({
			width:'100%',
			height:'0',
			clear:'both'
		});
	
		return this.each(function(){
			
			$(this).html('<div class="eye left_eye">'
				+'<div class="pupil"></div></div>'
				+'<div class="eye right_eye"><div class="pupil"></div></div>'
				+'<div class="eyesfixfloat"></div>');
			
			var eyeW = config.eyeWidth;
			if(config.eyeWidth > config.width/2){
				eyeW=config.width/2;
			}
			
			$(this).css({
				width:config.width+'px',
				height:config.height+'px',
				position:'relative',
				padding:'0'
			});
			
			$(this).find('.eye').css({
				margin:'0',
				width:eyeW+'px',
				height:config.height+'px',
				position:'relative',
				'-webkit-border-radius': config.borderRadius+'px',
				'-moz-border-radius': config.borderRadius+'px',
				'border-radius': config.borderRadius+'px'
			});
			$(this).find('.left_eye').css('float','left');
			$(this).find('.right_eye').css('float','right');
			
			$(this).find('.pupil').css({
				background:config.pupilBG,
				width:config.pupilWidth+'px',
				height:config.pupilHeight+'px',
				'-webkit-border-radius': config.pupilBorderRadius+'px',
				'-moz-border-radius': config.pupilBorderRadius+'px',
				'border-radius': config.pupilBorderRadius+'px',
				position:'absolute'
			});	
			
			var MAX_BOTTOM = config.height - config.pupilHeight;
			var MAX_RIGHT = config.eyeWidth - config.pupilWidth;
		
			var eyes_pos = $(this).offset();
			var eyes_w = $(this).width();
			var eyes_h = $(this).height();
			
			var A = [eyes_pos.left,eyes_pos.top];
			var B = [eyes_pos.left + eyes_w, eyes_pos.top];
			var C = [eyes_pos.left,eyes_pos.top + eyes_h];
			var D = [eyes_pos.left + eyes_w,eyes_pos.top + eyes_h];
			var eyes = $(this);
			$(document).bind('mousemove', function(e){
		
				var pupils = eyes.find('.pupil');
				var x = e.pageX;
				var y = e.pageY;
				if(y < A[1]){
					if(x < A[0]){// Sector 1
						pupils.css({top:0,right:"",bottom:"",left:0});
					}
					else if(A[0] <= x && x <= B[0]){//Sector 2
						if(parseInt((x - eyes_pos.left)/2) <= MAX_RIGHT){
							var l = parseInt((x - eyes_pos.left)/2);
							pupils.css({top:"0",right:"",bottom:"",left:parseInt((x - eyes_pos.left)/2)});
						}
					}
					else if(x > B[0]){// Sector 3
						pupils.css({top:"0",right:"0",bottom:"",left:""});
					}
				}
				if(A[1] <= y && y <= C[1]){
					if(x < A[0]){// Sector 4
						if(parseInt((y - eyes_pos.top)) <= MAX_BOTTOM){
							pupils.css({top:parseInt((y - eyes_pos.top)),right:"",bottom:"",left:"0"});
						}
					}
					else if(A[0] <= x && x <= B[0]){ // Sector 5
						if(parseInt((x - eyes_pos.left)/2) <= MAX_RIGHT && parseInt((y - eyes_pos.top)) <= MAX_BOTTOM){
							var l = parseInt((x - eyes_pos.left)/2);
							pupils.css({top:parseInt((y - eyes_pos.top)),right:"",bottom:"",left:parseInt((x - eyes_pos.left)/2)});
						}
					}
					else if(x > B[0]){// Sector 6
						if(parseInt((y - eyes_pos.top)) <= MAX_BOTTOM){
							pupils.css({top:parseInt((y - eyes_pos.top)),right:"0",bottom:"",left:""});
						}	
					}
				}
				else if(y > C[1]){
					if(x < A[0]){// Sector 7
						pupils.css({top:"",right:"",bottom:"0",left:"0"});
					}
					else if(A[0] <= x && x <= B[0]){// Sector 8;
						if(parseInt((x - eyes_pos.left)/2) <= MAX_RIGHT){
							var l = parseInt((x - eyes_pos.left)/2);
							pupils.css({top:"",right:"",bottom:"0",left:l});
						}
					}
					else if(x > B[0]){ // Sector 9;
						pupils.css({top:"",right:"0",bottom:"0",left:""});
					}
				}
			});
		});	
	}
}( jQuery ) );
