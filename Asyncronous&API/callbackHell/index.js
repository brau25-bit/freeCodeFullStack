function uploadFiles(){
    return new Promise((resolve,reject) => {
        console.log("Step 1 completed")
        setTimeout(() => {
           resolve() 
        }, 1000);
    })
}

function processFiles(){
    return new Promise((resolve,reject) => {
        console.log("Step 2 completed")
        setTimeout(() => {
           resolve() 
        }, 1000);
    })
}

function notifyUSer(){
    return new Promise((resolve,reject) => {
        console.log("Step 3 completed")
        setTimeout(() => {
           resolve() 
        }, 1000);
    })
}


try {
    await uploadFiles()
    await processFiles()
    await notifyUSer()
} catch (error) {
    console.log(error)
}