// JavaScript Document
document.addEventListener( "deviceready", onDeviceReady );

var sfw;

function onDeviceReady( event ) {
  console.log("deviceready");
  sfw = new SalesforceWrapper();
}