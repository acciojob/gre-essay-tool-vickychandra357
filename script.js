//your code here
function wordCount() {
 var text = document.getElementById("evaluatedText").value;
 var count = 0;
 var split = text.split(' ');
 for (var i = 0; i < split.length; i++) {
  if (split[i] != "") {
   count ++;
  }
 }
 document.getElementById("wordCount").innerHTML = count;
}