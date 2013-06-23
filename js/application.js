// JavaScript Document
document.addEventListener( "deviceready", onDeviceReady );

var templates = {
    home:"views/ad.html",
    loaded: 0,
    requested: 0,
}; 


function onDeviceReady( event ) {
	alert("jasflk");
  console.log("deviceready");
  //load Mousetache HTML templates
    for (var key in templates) {
        (function() {
            var _key = key.toString();
            if ( _key != "loaded" && _key != "requested" ){
                templates.requested ++;
         
                 var templateLoaded = function( template ){
                    onTemplateLoaded( template, _key );
                 }
                
                $.get( templates[ _key ], templateLoaded );
             }
         })();
    }
}
function onTemplateLoaded(template, key) {
    
   // console.log( key + ": " + template);
    templates[ key ] = template;
    templates.loaded ++;
    
    if ( templates.loaded == templates.requested ) {
        setupDefaultView();
    }
}
var header, container;

function setupDefaultView() {
    //console.log("setupDefaultView");
    $("body").html( templates.home );
}