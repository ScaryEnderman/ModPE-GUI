var GUI; // define our GUI
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); // define our Minecraft Activity
var text; //define our text here so it is changeable later on

function useItem() { // if we tap a block

ctx.runOnUiThread(new java.lang.Runnable(){
  
run: function(){
  
try {
  
text.setText("Tapped a block!"); // our TextView's text will be set to "Tapped a block!"
text.setTextColor(android.graphics.Color.GREEN); // our TextView's color will be set to green

} catch (e){
print ("Error: "+e) //error catch
}
 
}});

}

function newLevel(){ //once a world is loaded
  
ctx.runOnUiThread(new java.lang.Runnable(){
  
run: function(){
  
try{
  
GUI = new android.widget.PopupWindow(); // set our GUI to a PopupWindow

var layout = new android.widget.LinearLayout(ctx); // make a LinearLayout where we can add our TextView
text = new android.widget.TextView(ctx); // defining our TextView
text.setText("I'm a TextView!"); // setting it's text to "I'm a TextView!"

layout.setOrientation(android.widget.LinearLayout.VERTICAL); // set our layout's orientation to 'VERTICAL'
layout.setGravity(android.view.Gravity.RIGHT); // we want our text to show up at the right side of the screen
layout.addView(text); // finally we add our TextView to the main layout

GUI.setContentView(layout); // now we need to add our layout to the gui (the pop-up)
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); // we are setting the heigth to 'WRAP_CONTENT'
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT); // we are setting the width to 'WRAP_CONTENT'
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0); // now let's place the gui to the bottom right of the screen

} catch (e){
print ("Error: "+e) // error catch
}
 
}});
}


function leaveGame(){ // if we leave our world
  
ctx.runOnUiThread(new java.lang.Runnable(){
  
run: function(){
  
if(GUI != null){ // if the GUI exists
  
GUI.dismiss(); // close it so once we get back to the main screen of MCPE it dissapears
  
}
}
  
});
  
}
