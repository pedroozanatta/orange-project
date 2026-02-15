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

    const data = await response.json()

    if(!response.ok){
        throw new Error(data?.error?.message || "Email ou senha inválidos") 
    }

    return data
}