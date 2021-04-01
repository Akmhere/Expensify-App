const promise = new Promise ((resolve,reject)=>{
    reject('something went wrong');
});
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error :' , error);
});