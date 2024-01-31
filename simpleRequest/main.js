let fragment1="partials/about.html"
let fragment2="partials/andmore.html"
let fragment3="partials/moreinfo.html"
function loadFragment(f){
    // 1 create comm object
    let xhr=new XMLHttpRequest()

    // 2 configure connection
    xhr.open("GET",`${f}`)
    
    // 3 get the response
    xhr.onload=function(){
       document.querySelector('.dynamic').innerHTML=xhr.responseText
    }
    
    // 4 send request
    xhr.send()

}