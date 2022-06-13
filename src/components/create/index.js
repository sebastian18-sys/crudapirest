import React from 'react'
import "./create.css"
import { Link, useNavigate } from 'react-router-dom'
import { postDataFetch } from '../../services/postDataProfesor'
import { useForm } from "react-hook-form"

export default function Create() {

    // Form and Navigate
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate();

    // Function Send POST Data
    const onSubmit = async (values) => {

        await postDataFetch(values)
        navigate("/", {replace: true})

    }

    return (
        <section className='create'>
            <h3>Agregar profesor</h3>
            <form className='create__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='create__formInput'>
                    <label>DNI: </label>
                    <input 
                        name='dni'
                        placeholder='Ingrese su DNI'
                        type='text'
                        {...register("dni")}
                    />
                </div>
                <div className='create__formInput'>
                    <label>Apellidos: </label>
                    <input 
                        name='apellido'
                        placeholder='Ingrese su apellido'
                        type='text'
                        {...register("apellido")}
                    />
                </div>
                <div className='create__formInput'>
                    <label>Nombres: </label>
                    <input 
                        name='nombre'
                        placeholder='Ingrese su nombre'
                        type='text'
                        {...register("nombre")}
                    />
                </div>
                <div className='create__formInput'>
                    <label>Facultad: </label>
                    <input 
                        name='facultad'
                        placeholder='Ingrese la facultad'
                        type='text'
                        {...register("facultad")}
                    />
                </div>
                <button className='create__buttonSave'>Guardar</button>  
            </form>
            <Link to="/">
                <p>Regresar</p>
            </Link>
        </section>
    )
}
