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
  strokeWeight(1);
  stroke(0);
  noFill();
  curve(50, 60, 25, 50, 25, 65, 50, 90);
  curve(50, 60, 20, 50, 20, 65, 50, 90);
  curve(50, 60, 30, 50, 30, 65, 50, 90);
var x=38;
var y=(90);
  curve(y, 60, x+25, 50, x+25, 65, y, 90);
  curve(y, 60, x+20, 50, x+20, 65, y, 90);
  curve(y, 60, x+30, 50, x+30, 65, y, 90);

  //bababoii

}
