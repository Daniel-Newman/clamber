$(function(){
var zip = function (){
  $('.wraper').css({"filter": "blur(5px) brightness(35%)"});
  $('.wraper .clam').css({"filter": "blur(5px) brightness(35%)"});
 $('body').append('<div class="locget"><div class="back"><a href="99114">Colville</a><a href="99202">Spokane</a><!-- ="United States">United States</option><option value ="United Kingdoms">United Kingdoms</option><option value ="Canada">Canada</option></select><br/><br/><input type ="submit" value="Go">--></div></div>');
 $('.locget').css({
 "position":"absolute",
  "margin":"400px 0 0 0",
  "width":"100%"
   
 });
 $('.locget .back').css({
 "width":"200px",
  "margin":"0 auto",
   "text-align":"center" ,
  "filter": "drop-shadow(3px 3px 8px #DDD, 8px)"
  });
 $('.locget .back a').css({
 "width":"180px",
  "padding":"12px 20px",
"margin":"8px", 
  "border-radius":"5px",
"border":"3px solid #347BE6",
  "background-color":"#99c2ff"
 });

 $('.locget .back input[type=submit]:hover').css({
  "background-color":"#1f5bb5"
 });
}
$('#c2').on('click', zip);
});
