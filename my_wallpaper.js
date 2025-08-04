//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function




    noStroke();
  fill(3, 0, 79);
  ellipse(150, 45, 75, 75);
  fill(255, 224, 245);
  ellipse(100, 100, 120, 150);
  fill(255, 255, 255);
  //left eye
  ellipse(60, 80, 30, 20);
  //right eye
  ellipse(110 ,80, 30, 20);
  fill(3, 0, 79);
  circle(62, 80, 10);
  circle(112, 80, 10);
  triangle(90, 22, 160, 20, 165, 95);
  triangle(50, 45, 85, 20, 105, 40);
    //eyebrows
  //left
  rotate(0);
   ellipse(60, 60, 30, 10);
  //right
  rotate(0);
  ellipse(105, 60, 30, 10);
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
  ellipse(83, 135, 30, 10);
  ellipse(83, 145, 30, 10);
  //bababoii


}
