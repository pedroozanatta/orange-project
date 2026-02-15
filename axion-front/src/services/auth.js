const API_URL = "http://localhost:1337";

export async function  loginRequest(email, password) {
    const response = await fetch(`${API_URL}/auth/local`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier: email,
                password: password,
            })
        })

    if(!response.ok){
        throw new Error(response.error.msg)
    }

    return response.json() 
}