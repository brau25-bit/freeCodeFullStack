async function fetchData() {
    try{
        const response = await fetch("https://apis.Scrimba.com/dog.ceo/api/breeds/images/random")
        if(!response.ok){
            throw new Error("there was a problem with the API")
        }
        const data = await response.json()
        
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("completed")
    }
}


fetchData()