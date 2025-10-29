async function fetchData(params) {
    try {
        
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', 
            {
                method: 'POST',
                body: JSON.stringify({
                    title: 'Holiday nigthmares ',
                    body: 'When I was kidnapped in Scotland',
                    userID: 101,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        
        if(!response.ok){
            throw new Error("Failed to obtain the data")
        }

        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
    finally {
        console.log("completed")
    }
}

fetchData()