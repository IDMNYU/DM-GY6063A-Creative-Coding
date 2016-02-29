/**
* 2D noise, based on Nature of Code Example 1.6
*/
float incr = 0.01; //value to increment our x and y offsets

void setup(){
  size(500,500);
  loadPixels();//loads all of our window pixels in a 1 dimensional array
  float xOff = 0.0;
  
  for(int x=0; x < width; x++){ //loop through each pixel horizontally  
    float yOff = 0.0;
    for(int y = 0; y < height; y++){//& loop through each pixel vertically
      float bright = map(noise(xOff,yOff),0,1,0,255); //map our 2D noise to a value between 0->255
      //assign a brightness value to the current item in our pixels array
      // notice how we are running a nested for loop, but referencing items in 
      // a 1-dimensional array 
      pixels[x+y*width] = color(bright);
      yOff += incr; // add assign our increment to yOff
    }
    xOff += incr; // add assign our increment to xOff
  }
  updatePixels();//update the screen to reflect the changes to our pixels;
}
