var canvas, ctx, h, w;

window.onload = function init(){
  //called AFTER the page has loaded
  canvas = document.querySelector("#myCanvas");

  //often useful
  w=canvas.width;
  h=canvas.height;

  //important, we will draw with this object
  ctx = canvas.getContext('2d');

  //Ready to go! 
  //Try to change the parameter value to move the monster

  drawMyMonster(10,10);

};

function drawMyMonster(x,y){
  //draw a big monster 
  //or the head lol

  /*but first you need to save the context as shown
  in the best practices, and use the 2d transformation
  */
  ctx.save();

  //translate the coordinate system, draw relative to it 
  ctx.translate(x,y);

  // (0,0) is the left corner position of the monster.
  ctx.strokeRect(0,0,100,100);

  //eyes
  ctx.fillRect(20,20,10,10);
  ctx.fillRect(65,20,10,10);

  //Nose 
  ctx.strokeRect(45,40,10,40);

  //mouth
  ctx.strokeRect(35,84,30,10);

  //teeth
  ctx.fillRect(38,84,10,10);
  ctx.fillRect(52,84,10,10);

  

  ctx.restore();

}
