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
ba(data.basics);
})
//main div class calling from html
// var main=document.querySelector('main');
var main=document.getElementById('main');
//left div creation
var left=document.createElement("div");
left.classList.add("left");
//id for left div
left.setAttribute("id","left");
//appending main div
main.appendChild(left);
console.log(left);
function ba(basic){
  //creation of img
var img=document.createElement("img");
img.src=basic.photo;
left.appendChild(img);
//name creation
var name=document.createElement("h1");
name.textContent=basic.name;
left.appendChild(name);
//creating email
var mail=document.createElement("p");
mail.textContent=basic.email;
name.appendChild(mail);
//mobile appending
var mb=document.createElement("h4");
mb.textContent=basic.mobile;
mail.appendChild(mb);

}
