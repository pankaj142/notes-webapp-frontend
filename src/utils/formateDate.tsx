
const formatDate = (date : string) : string => {
    let formatedDate = new Date(date).toLocaleString("en-US", {
        year : "numeric",
        month : "short",
        day : "numeric",
        hour : "numeric",
        minute : "numeric"
    })
    return formatedDate
}

export default formatDate;