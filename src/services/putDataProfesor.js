export const putDataFetch = (id, dni, apellido, nombre, facultad) => {

    return fetch(`https://apirestprofesores.azurewebsites.net/api/Profesores/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            dni: dni,
            apellido: apellido,
            nombre: nombre,
            facultad: facultad
        })
    }).then(res => res.text())
}