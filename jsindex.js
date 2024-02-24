let buttonClickMe = document.getElementById ("click"); 
let imgt = document.getElementById("img1");
let imgr = document.getElementById("img2");
let p1 = document.getElementById("iLoveYou");
let about = document.getElementById("lovekarma");
let wd = document.getElementById("wdy")
let bt = document.getElementById("btw")


wd.style.display="none"
p1.style.display ="none" ;


about.addEventListener("click", click1)

 buttonClickMe.onclick =  function(){
    
    imgr.style.display ="flex"; 

    imgt.style.display ="flex"; 

}




btw.onclick = function(){

    wdy.style.display="block"
}
function click1() {
    p1.style.display="block"
}


bt.onclick = function(){ 
     wd.style.display="block" }









// function click3() {

//     wd.style.display="block";

// }