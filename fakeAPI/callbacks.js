function getUserName(validateCredentials){
    let userName = "Braulio"

    validateCredentials(userName)
}

function validateCredentials(userName){
    if(userName === "Braulio"){
        console.log("true")
    } else{
        console.log("false")
    }
}