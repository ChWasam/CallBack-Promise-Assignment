//Callbacks implementations

function carMaintenance(cb:(text:string)=>void){
    console.log("I leave my car at 9 in workshop");

setTimeout(() => {
    console.log("Car is fixed...");
    cb("Your car is ready");
}, 2000);
}
function carMaintCallBack(text:string){
    console.log("Car Maint Call back...",text);
    pickDress(dressCallBack);
}

function pickDress(callback:(text:string)=>void){
    setTimeout(() => {
        console.log("Your Dress is ready"); 
        callback("pick your dress")
    }, 100);
}

function dressCallBack(text:string){
    console.log("this is dress callback..",text);
    attendEvent(eventCallBack);
}

function attendEvent(cb: (text:string)=>void){
    console.log("Now you can attend the event");
    cb("Now you can go home")
}
function eventCallBack(text:string){
    console.log(text);
    BacktoHome();
}

function BacktoHome(){
    console.log("reached home");
}
// ===========================
// functin calling 
carMaintenance(carMaintCallBack);
setTimeout(() => {
    console.log("Do grocery");
    }, 0);
