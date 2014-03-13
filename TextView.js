var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var text;

function useItem() {

text.setText("Tapped a block!");
text.setTextColor(android.graphics.Color.GREEN);

}

function newLevel(){
  
ctx.runOnUiThread(new java.lang.Runnable(){
  
run: function(){
  
try{
  
GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
text = new android.widget.TextView(ctx);
text.setText("I'm a TextView!");

layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.setGravity(android.view.Gravity.RIGHT);
layout.addView(text);

GUI.setContentView(layout);
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0);

} catch (e){
print ("Error: "+e)
}
 
}});
}


function leaveGame(){
  
ctx.runOnUiThread(new java.lang.Runnable(){
  
run: function(){
  
if(GUI != null){
  
GUI.dismiss();
  
}
}
  
});
  
}
