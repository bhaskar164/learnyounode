let timeTakingProcess = (cb) =>{
    console.log("Time taking Process......")
    setTimeout(() => {
        console.log('First');
        let data  = 'Data Fetched Successfully';
        cb(data);
        // return 'Data fetched!';
        setTimeout(() => {
            // console.log();
            cb(data);
        }, 1500);
    }, 1000);
    
    // return 'Data fetched!';
    // return "Himanshu";
    
}


// console.log("Entering To a Loop...")
// setTimeout(() => {
//     loop();
// }, 0);


// let p1 = new Promise( (resolve,reject)=>{
    timeTakingProcess( (data)=>{
        console.log(data);      //JO bhi task hum time consuming process se karwana chahte hain ussey humesha callback se handle karenge
    });  

    for(let i=0;i<=4;i++){
        console.log('You are here');
    }   
    // setTimeout(()=>{
    //     if(data !== undefined){
    //         resolve(data);
    //     }
    //     else{
    //         reject("Not FullFilled!");
    //         console.log(data);
    //     }
    // }, 5000);
    
        
// });
// p1.then( (data)=>{
//     console.log("Time Taking Task Completed!");
//     console.log("Here is the data" + data );
// }).catch( (err)=>{
//     console.log("Some Error Occured!");
//     console.log(err);
// })