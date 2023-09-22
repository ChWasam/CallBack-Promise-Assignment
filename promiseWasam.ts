function carMaint (){
    console.log("Car left at workshop for maintenance");
let cM : Promise<string>= new Promise ((resolve,reject)=> {

   setTimeout(()=>{
     console.log("Mechanic is working on the  car");
     resolve("Car is ready");
   },2000);
});
return cM;
};


function dress (){
  
let dressready: Promise<string>= new Promise ((resolve,reject)=> {

   setTimeout(()=>{
     console.log("Dress is getting ready");
     resolve("Dress is ready");
   },3000);
});
return dressready;
};

function event (){

let readyForEvent : Promise<string>= new Promise ((resolve,reject)=> {

   setTimeout(()=>{
     console.log("Getting ready for event");
     resolve("I am ready");
   },4000);
});
return readyForEvent;
};

function goingHome(){
   console.log("Going back home");
}

let sundayRoutine=carMaint();
function grocery (){
console.log("Done with grocery");
};
grocery();

sundayRoutine
.then((text:string)=>{
  console.log(text);
   return dress();
}).then((text)=>{
   console.log(text);
    return event();
}).then((text)=>{
   console.log(text);
   goingHome();
});