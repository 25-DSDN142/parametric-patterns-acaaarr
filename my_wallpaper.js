//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //DEVELOP_GLYPH
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 255, 255); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function




    noStroke();
  let hair = color(156, 156, 156);
  fill(hair);
  //bun
  var hw = 120;
  var bb = 85;
  var m = -3;
  if (bb<75){hw = 125};
  ellipse(150, 45, bb, bb);
  //head
  // ...existing code...
  //head
  let skin;
  if (m > 1) {
    skin = color(245, 135, 135);
  } else {
    skin = color(179, 192, 245);
  }
  fill(skin);
  ellipse(100, 100, hw, 150);
// ...existing code...
  fill(255, 255, 255);
  //left eye
  if (w<20){b=55}
  var w = 30;
  var e = w / 2;
  ellipse(60, 80, 30, w);
  //right eye
  ellipse(110 ,80, 30, w);
  //hair and eyebrows

  fill(hair);
  circle(62, 80, e);
  circle(112, 80, e);
  triangle(90, 22, 160, 20, 165, 95);
  triangle(50, 45, 85, 20, 105, 40);
    //eyebrows
  //left
  rotate(0);
  var b =60;
   ellipse(60, b, 30, 10);
  //right
  rotate(0);
  ellipse(105, b, 30, 10);
  strokeWeight(1);
  stroke(0);
  noFill();

//left lash
//1
  curve(70, 60, 50, 60, 50, 73, 70, 90);
//2
  curve(80, 60, 58, 59, 58, 71, 80, 90);
  //3
  curve(88, 60, 66, 60, 66, 71, 88, 80);
var x=(50);

//right lash
//1
  curve(130, 60, 50+x, 60, 50+x, 73, 130, 90);
//2
  curve(130, 60, 58+x, 59, 58+x, 71, 130, 90);
  //3
  curve(130, 60, 66+x, 60, 66+x, 71, 130, 80);
  //nose
  stroke(145, 74, 60);
  line(83, 90, 75, 120);
  line(88, 120, 75, 120);
  //mouth
  noStroke();
  fill(227, 59, 98);
  ellipse(83, 135-m, 30, 10);
  ellipse(83, 145+m, 30, 10);
  //bababoii


}
