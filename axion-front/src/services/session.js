export function saveSession(token, user){
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
}

export function getToken(){
    return localStorage.getItem("token")
}

export function logout(){
    localStorage.removeItem("token", "user")
}

export function isAuthenticated(){
    return !localStorage.getItem("token")
}