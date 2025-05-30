let notConnected = document.querySelector(".nconnected");
let connected = document.querySelector(".connected");

//Function that checks wheather you are online or offline.
function fetchApi(){
    if(!window.navigator.onLine){
        notConnected.style.display = "block";
        connected.style.display = "none";
    }
    else{
        connected.style.display = "block";
        notConnected.style.display = "none";
    }
}
setInterval(fetchApi,3000);