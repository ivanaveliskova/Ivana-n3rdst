//Creates the viewer and removes the timeline and clock animation
var viewer = new Cesium.Viewer('cesiumContainer', {timeline: false, animation: false});

var pinBuilder = new Cesium.PinBuilder();

//Creates the entities within the viewer
//Adds description, address, and link data.

//Cipher Prime
var cipherPrime = viewer.entities.add({
  id : 'cipherPrime',
  name : 'Cipher Prime',
  position : Cesium.Cartesian3.fromDegrees(-75.1456539, 39.948818),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.GREEN, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
	  width="25%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://www.cipherprime.com/img/ui/cp_vertical_logo_white.png"\
	  alt="Cipher Prime logo">\
	<p>\
	  Address: 239 Chestnut Street, #2A Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://www.cipherprime.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.cipherprime.com/</a>\
	</p>\
	<p>Cipher Prime is a game studio in Philadelphia \
	known for its titles Auditorium, Splice, Pulse, and Fractal.</p>'
});

//Cubist Media Group
var cubistMediaGroup = viewer.entities.add({
  id : 'cubistMediaGroup',
  name : 'Cubist Media Group',
  position : Cesium.Cartesian3.fromDegrees(-75.145009, 39.949939),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.ORANGE, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
	  width="25%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://cubistmediagroup.com/images/logo.png"\
	  alt="Cubist Media Group logo">\
	<p>\
	  Address: 234 Market Street, 3rd Fl Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://www.cubistmediagroup.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.cubistmediagroup.com/</a>\
	</p>\
	<p>Cubist Media Group develops creative and technical solutions for businesses who deliver \
	communications, education, advertising messages and entertainment.</p>'
});


//Cultivate Technologies
var cultivateTechnologies = viewer.entities.add({
  id : 'cultivateTechnologies',
  name : 'Cultivate Technologies',
  position : Cesium.Cartesian3.fromDegrees(-75.146666, 39.959088),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.FUSCHIA, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
	  width="50%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://gocultivate.com/sites/default/themes/cmt/images/logo.png"\
	  alt="Cultivate Technologies logo">\
	<p>\
	  Address: 125 N. 3rd Street, 4th Floor Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://gocultivate.com/" target="_blank" style="color: #77AAFF;">\
	  http://gocultivate.com/</a>\
	</p>\
	<p>Cultivate Technologies is a Philadelphia-based Drupal website design \
	and development shop specializing in content management systems and e-commerce.</p>'
});

//Felt Media
var feltMedia = viewer.entities.add({
  id : 'feltMedia',
  name : 'Felt Media',
  position : Cesium.Cartesian3.fromDegrees(-75.1435673, 39.9555089),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
	  width="25%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://www.feltmedia.com/images/feltmedia-logo.gif"\
	  alt="Felt Media logo">\
	<p>\
	  Address: 222 Vine Street, Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://www.feltmedia.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.feltmedia.com/</a>\
	</p>\
	<p>Felt Media is a digital design firm specializing \
	in web and interactive experiences.</p>'
});

//I-SITE
var isite = viewer.entities.add({
  id : 'isite',
  name : 'I-SITE',
  position : Cesium.Cartesian3.fromDegrees(-75.1454911, 39.9496157),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.PINK, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
	  width="50%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://www.i-site.com/wp-content/themes/i-site2014/images/i-site.png"\
	  alt="I-SITE logo">\
	<p>\
	  Address: 15 S. 3rd Street, #200 Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://www.i-site.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.i-site.com/</a>\
	</p>\
	<p>I-SITE has created technology and design for scooters, magazines, kids, beverages, \
	analgesics, plants, puppets and, of course, themselves. \
	They live in an old toy factory where they work and play.</p>'
});

//Jarvus
var jarvus = viewer.entities.add({
  id : 'jarvus',
  name : 'Jarvus',
  position : Cesium.Cartesian3.fromDegrees(-75.142751, 39.965323),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.PURPLE, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
	  width="50%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://jarv.us/img/jarvusLogo.png"\
	  alt="Jarvus logo">\
	<p>\
	  Address: 908B North 3rd Street, Philadelphia, PA 19123\
	</p>\
	<p>\
	  Website: <a href="http://jarv.us/" target="_blank" style="color: #77AAFF;">\
	  http://jarv.us/</a>\
	</p>\
	<p>Jarvus provides strategic consulting, applications development, \
	and cloud infrastructure support for businesses and education institutions \
	looking to streamline their operations and better connect their teams.</p>'
});

//Messagefirst
var messageFirst = viewer.entities.add({
  id: 'messageFirst',
  name : 'MessageFirst',
  position : Cesium.Cartesian3.fromDegrees(-75.1429712, 39.9547039),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.YELLOW, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
  	<img\
	  width="50%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://www.messagefirst.com/img/logo.png"\
	  alt="MessageFirst logo">\
	<p>\
	  Address: 230 N. 2nd Street, #2C Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://www.messagefirst.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.messagefirst.com/</a>\
	</p>\
	<p>MessageFirst handcrafts elegant designs that leave measurable, lasting impressions. \
	They bring clarity and predictability to complex design challenges.</p>'
});

//SEER Interactive
var seerInteractive = viewer.entities.add({
  id: 'seerInteractive',
  name : 'SEER Interactive',
  position : Cesium.Cartesian3.fromDegrees(-75.142215, 39.967458),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.RED, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
  	<img\
	  width="25%"\
	  style="display: block; margin: 1em auto;"\
	  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABMCAYAAAAcLPsJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2RjQ5QTg3OTExMTFFNEE3QjlFQjU0ODZDNUVBQ0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2RjQ5QTc3OTExMTFFNEE3QjlFQjU0ODZDNUVBQ0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MUU0MDQ3RDU3OUExMUU0QjBBNEI1RjQzQ0IwRTlBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MUU0MDQ3RTU3OUExMUU0QjBBNEI1RjQzQ0IwRTlBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj+5fxoAAA9qSURBVHja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"\
	  alt="SEER Interactive logo">\
	<p>\
	  Address: 1028 N 3rd St Philadelphia, PA 19123\
	</p>\
	<p>\
	  Website: <a href="http://www.seerinteractive.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.seerinteractive.com/</a>\
	</p>\
	<p>Seer Interactive is a digital marketing agency. \
	They believe in doing a few things, and doing them well. \
	For them, that means outstanding service and innovation across SEO, PPC, and Analytics.</p>'
});

//WebLinc
var webLinc = viewer.entities.add({
  id: 'webLinc',
  name : 'WebLinc',
  position : Cesium.Cartesian3.fromDegrees(-75.1457975, 39.950585),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.NAVY, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
  	<img\
	  width="50%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://www.weblinc.com/assets/logo.png"\
	  alt="WebLinc logo">\
	<p>\
	  Address: 12 N. 3rd Street Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://www.weblinc.com/" target="_blank" style="color: #77AAFF;">\
	  http://www.weblinc.com/</a>\
	</p>\
	<p>WebLinc has become an eCommerce leader by consistently delivering smart, \
	innovative, brand-building solutions that address \
	the unique challenges of selling online.</p>'
});

//Wildbit, LLC
var wildBit = viewer.entities.add({
  id: 'wildBit',
  name : 'Wildbit, LLC',
  position : Cesium.Cartesian3.fromDegrees(-75.1459537, 39.9509092),
  billboard : {
    image : pinBuilder.fromColor(Cesium.Color.BROWN, 30).toDataURL(),
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
  },
  description : '\
	<img\
		width="25%"\
		style="display: block; margin: 1em auto;"\
		src="http://wildbit.com/images/logo.png"\
		alt="Wildbit logo">\
	<p>\
	  Address: 20 N. 3rd Street, #701 Philadelphia, PA 19106\
	</p>\
	<p>\
	  Website: <a href="http://wildbit.com/" target="_blank" style="color: #77AAFF;">\
	  http://wildbit.com/</a>\
	</p>\
	<p>Wildbit creates products such as Beanstalk, Postmark and dploy.io.</p>'
});

//Highlights where N 3rd St. is
var n3rdst = viewer.entities.add({
	id: 'n3rdst',
	name: "N3rd St",
	polyline : {
		positions : Cesium.Cartesian3.fromDegreesArray([-75.145657, 39.950205,
		                                                -75.141494, 39.969744]),
		width : 5,
		material : Cesium.Color.WHITE
	},
	description: '\
	<img\
	  width="50%"\
	  style="display: block; margin: 1em auto;"\
	  src="http://laddr-n3rdst.poplar.phl.io/img/n3rd-st-logo.png"\
	  alt="Nerd St. logo">\
	<p>The melting pot of n3rds</p>'
});

//Zooms in on the location of the data points all at once to get an overview
viewer.zoomTo(viewer.entities);

var findLocation = function(){
	//Sets into a variable the button from the HTML
	var $buttonSelect = $('button');

	//When the button is clicked...
	$buttonSelect.on("click", function(){

		//... the ID gets placed into a variable which is then used to find the unique ID of the entities
		var thisButton = $(this).attr('ID'),
			chosenLocation = viewer.entities.getById(thisButton);
		//The unique ID is then used to locate the chosen company and pop up the description for more information
		viewer.flyTo(chosenLocation).then(function(result){
		  if (result) {
		    viewer.selectedEntity = chosenLocation;
		  }
		});
	});
};

findLocation();

