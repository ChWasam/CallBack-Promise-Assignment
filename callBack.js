//Callbacks implementations
function carMaintenance(cb) {
    console.log("I leave my car at 9 in workshop");
    setTimeout(() => {
        console.log("Car is fixed...");
        cb("Your car is ready");
    }, 2000);
}
function carMaintCallBack(text) {
    console.log("Car Maint Call back...", text);
    pickDress(dressCallBack);
}
function pickDress(callback) {
    setTimeout(() => {
        console.log("Your Dress is ready");
        callback("pick your dress");
    }, 100);
}
function dressCallBack(text) {
    console.log("this is dress callback..", text);
    attendEvent(eventCallBack);
}
function attendEvent(cb) {
    console.log("Now you can attend the event");
    cb("Now you can go home");
}
function eventCallBack(text) {
    console.log(text);
    BacktoHome();
}
function BacktoHome() {
    console.log("reached home");
}
// ===========================
// functin calling 
carMaintenance(carMaintCallBack);
setTimeout(() => {
    console.log("Do grocery");
}, 0);
export {};
