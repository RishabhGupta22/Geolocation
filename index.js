 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("LATITUDE: " + position.coords.latitude + "<br>LONGITUDE: " + position.coords.longitude);
  });
}
  $(document).ready(function(){
 $("#btn1").click(function(){
   //$("#data").removeClass("hidden");
 $("#data").slideToggle().removeClass("hidden"); 
 });
  });