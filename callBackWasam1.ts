// Cricket Example by Wasam


function firstOver(callback: () => void){
    setTimeout(()=>{
    console.log("First over in progress");
    callback();
    },6000)
  
    }
    
    function secondOver(callback: () => void){
        setTimeout(()=>{
            console.log("Second over in progress");
            callback();
            },4000)
    }
    function thirdOver(callback: () => void){
        setTimeout(()=>{
            console.log("Third over in progress");
            callback();
            },2000)
    }
    function firstOver_CB(){
        console.log("First over done ");
        secondOver(secondOver_CB);
    }
    function secondOver_CB(){
        console.log("Second over done ");
        thirdOver(thirdOver_CB);
    }
    function thirdOver_CB(){
        console.log("Third over done ");
    }
    
    firstOver(firstOver_CB);