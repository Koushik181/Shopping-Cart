var myFirstDate = new Promise((resolve,reject)=>{

    var badAssManager = "kiran";
    if(badAssManager=='kiran'){
        reject("You Dont care for me!!!!!!")
    }
    else{
        resolve("Life is more imortant than job");
    }
});

myFirstDate.then(result=>{
    console.log("hi1");
    console.log(result)
}).catch(err=>{
    console.log("hi2");
    console.log(err);
});

console.log("hi3");