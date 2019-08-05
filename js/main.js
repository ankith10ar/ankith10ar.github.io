/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/

/*$('skills-section').appear(function() {
    move();
});*/


/*$('skills-section').on('inview', function(event, isInView) {
  if (isInView) {
    move();
      console.log(isInView);
  } else {
    // element has gone out of viewport
  }
});*/
var counter=0;


$(function() {
       $('#skills-section').waypoint(function() {
           if (counter==0){
                move();
               counter++;
           }
         }, {
           offset: '100%'
         });
    });



function move(){
    var bar = document.getElementsByClassName("progress");
//    console.log(bar);
    
    var iniVal = [];
    for(var a=0;a<bar.length;a++){
        iniVal[a]=parseInt((bar[a].childNodes[1].style.width).replace('%',''));
    }
    
    /*var iniVal = bar.forEach(function(item,index) {
        iniVal = parseInt(item.childNodes[0].style.width.replace('%',''));
    });*/
//    console.log(iniVal);
    
    var dup = iniVal.slice();
    
    var id = setInterval(frame, 10);
    
    function frame() {
    var count=0;
    for (var a=0;a<iniVal.length;a++){
        if(iniVal[a]--<0){
            count++;
        }else{
            bar[a].childNodes[1].style.width = (dup[a]-iniVal[a])+'%';
//            console.log(dup[a]-iniVal[a]);
        }
        if(count==iniVal.length)
            clearInterval(id);
    }
        
    /*iniVal.forEach(function(item,index){
        
    })   */     
  }
}


