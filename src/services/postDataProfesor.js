export const postDataFetch = (values) => {

    const { dni, apellido, nombre, facultad } = values
    
    return fetch("https://apirestprofesores.azurewebsites.net/api/Profesores", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            dni: dni,
            apellido: apellido,
            nombre: nombre,
            facultad: facultad
        })
    }).then(res => res.json())
}