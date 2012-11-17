# Eyes jQuery Plugin

Eyes is a jQuery plugin to create eyes in your html pages.

## Usage

Include the plugin script

``` html
<script type="text/javascript" src="jquery-eyes.js"></script>
```

``` js
$("#eyes").Eyes();
```
  
or to customize properties

``` js
$('#customEyes').Eyes({
	width				: 92,//eyes' width
	height			  	: 40,//eyes' height
	eyeWidth		  	: 34,//width of single eye
	borderRadius		: 30,//border radius for eye element
	pupilBG				: '#231F20',//pupil's background
	pupilWidth			: 20,//pupils' width
	pupilHeight		  	: 20,//pupils' height
	pupilBorderRadius 	: 20,//pupils' border radius
});


```
