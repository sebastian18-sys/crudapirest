export const getDataFetch = () => {
    return fetch("https://apirestprofesores.azurewebsites.net/api/Profesores").then(res => res.json())
}