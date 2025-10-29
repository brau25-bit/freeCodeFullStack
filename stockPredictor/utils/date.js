function formatDate(date){
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, 0)
    const days = String(date.getDate()).padStart(2, 0)
    return `${days}/${month}/${year}`
}

function getDateFormated(n){
    let date = new Date()
    date.setDate(date.getDate() - n)
    return formatDate(date)
}

export const date = {
    startDate: getDateFormated(3),
    endDate: getDateFormated(1)
}