$("#load").css("display", "none");
$(loadmore);

var footer = document.getElementById("footer");
var but = document.getElementById("load");
but.addEventListener("click",loadmore);

window.addEventListener("scroll", function(){
  if(window.pageYOffset >400){
    $( "#load" ).fadeIn( "slow" );
    $( "#footer" ).fadeOut( "slow" );
  }
  else{
    $( "#load" ).fadeOut( "slow" );
    $( "#footer" ).fadeIn( "slow" );
  }
},false);


var memenum = 8;


function loadmore(){
    for(var i = 0;i<5;i++){
      if(memenum>0){
      var source = "images/memes/"+memenum+".jpg";
      var div = document.createElement("div");
      div.classList.add("content");

      var captiontext  = document.getElementById(memenum).value;
      var caption = document.createElement("p");
      caption.classList.add("caption");
      var text = document.createTextNode(captiontext);
      caption.appendChild(text);

      var img = document.createElement("img");
      img.classList.add("content-image");
      img.src = source;
      img.alt = "dotahumor";


      div.appendChild(caption);
      div.appendChild(img);

      var element = document.getElementById("feed");
      element.appendChild(div);
      memenum--;
    }
  }
}
