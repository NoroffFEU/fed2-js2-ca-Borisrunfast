export function isAuthor(name) {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const adminName = userData.name
    
    return adminName == name
}