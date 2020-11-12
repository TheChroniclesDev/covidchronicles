function toggleAids() {
  (function() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  
    var colorIndex = 0;
  
    setInterval(function(){
      
      document.body.style.backgroundColor = colors[colorIndex++];
  
      colorIndex %= colors.length;
      var img = document.createElement("img");
      img.src = "images/pepelaugh.png";
      img.setAttribute('width', 500);
      img.setAttribute("style", "margin-top:-800px; margin-left:700px");
      document.body.appendChild(img);
      }, 50);  
  })();
}





const swup = new Swup();
