export function saveSession(jwt, user){
    localStorage.setItem("token", jwt);
    localStorage.setItem("user", JSON.stringify(user));
}

export function getToken(){
    return localStorage.getItem("token");
}