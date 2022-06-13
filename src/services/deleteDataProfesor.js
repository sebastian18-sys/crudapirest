export const deleteDataFetch = (id) => {
    
    return fetch(`https://apirestprofesores.azurewebsites.net//api/Profesores/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.text())
}