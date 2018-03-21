//ajax call creation
function jsondata(file,callback) {
  var xhr=new XMLHttpRequest();
xhr.overrideMimeType("appilication/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function() {
if (xhr.readyState === 4 && xhr.status === 200 ){
  callback(xhr.responseText);
}
};
xhr.send();
}
//function calling
jsondata("data.json",function(text) {
let data= JSON.parse(text);
console.log(data);

})
