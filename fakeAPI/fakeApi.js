export function getStockData(){
    let date = new Date()
    return {
        name: "QtechAI",
        sym: "QTA",
        price: (Math.random() * 3).toFixed(2),
        time: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
}