//DOM

let status1 = document.getElementsByClassName("status")[0];
console.log(status1);

let btn1=document.getElementById("btn-1");
console.log(btn1);

//Functions

function statusUpdate() {
    if (status1.textContent=="Not Friend") {
            status1.innerHTML="<i>Friends</i>"
            status1.style.backgroundColor="orange"
            btn1.innerHTML="Unfriend"

    }
    else if (status1.textContent=="Friends") {
        
     
        status1.innerHTML="<i>Not Friend</i>"
        status1.style.backgroundColor="white"
        btn1.innerHTML="Add as a Freind"

    ;
   
}
}




//AddingEvent Listener
btn1.addEventListener("click",statusUpdate);


