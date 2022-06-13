import React from 'react'
import "./edit.css"
import { putDataFetch } from '../../services/putDataProfesor'
import { useForm } from "react-hook-form"

export default function Edit(props) {

    // Form
    const { register, handleSubmit } = useForm()

    const handleClose = props.handleCloseEdit
    const { id, dni, apellido, nombre, facultad} = props.data

    // Function PUT Data
    const onSubmit = async (values) => {

        const {dni, apellido, nombre, facultad} = values
        await putDataFetch(id, dni, apellido, nombre, facultad)
        handleClose()
        
    }

    return (
        <section className='edit'>
            <h3>Editar profesor</h3>
            <form className='edit__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='edit__formText'>
                    <label>DNI: </label>
                    <input
                        name='dni'
                        placeholder='Ingrese su DNI'
                        type='text' 
                        onChange={(e) => e.target.value}
                        {...register("dni")}
                        defaultValue={dni}
                    />
                </div>
                <div className='edit__formText'>
                    <label>Apellidos: </label>
                    <input 
                        name='apellido'
                        placeholder='Ingrese su apellido'
                        type='text'
                        onChange={(e) => e.target.value}
                        {...register("apellido")}
                        defaultValue={apellido}
                    />
                </div>
                <div className='edit__formText'>
                    <label>Nombres: </label>
                    <input 
                        name='nombre'
                        placeholder='Ingrese su nombre'
                        type='text'
                        onChange={(e) => e.target.value}
                        {...register("nombre")}
                        defaultValue={nombre}
                    />
                </div>
                <div className='edit__formText'>
                    <label>Facultad: </label>
                    <input 
                        name='facultad'
                        placeholder='Ingrese la facultad'
                        type='text'
                        onChange={(e) => e.target.value}
                        {...register("facultad")}
                        defaultValue={facultad}
                    />
                </div>
                <button className='edit__buttonSave'>Guardar</button>
            </form>
        </section>
    )
}
