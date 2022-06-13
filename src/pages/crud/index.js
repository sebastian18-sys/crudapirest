import React, { useEffect, useState } from 'react'
import "./crud.css"
import { getDataFetch } from '../../services/getDataProfesor'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal'
import Edit from '../../components/edit'
import Delete from '../../components/delete'
import { FaTrashAlt, FaEdit } from "react-icons/fa"


export default function Crud() {
    
    // State Modal
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalAlert, setShowModalAlert] = useState(false)
    const [count, setCount] = useState(0)

    // State Data API
    const [dataProfesor, setDataProfesor] = useState([])
    const [getId, setGetId] = useState(null)

    //Show Modal
    const handleClickEdit = (id, dni, apellido, nombre, facultad) => {
        const data = {id, dni, apellido, nombre, facultad}
        setGetId(data)
        return setShowModalEdit(true)
    }

    const handleClickAlert = (id) => {
        setGetId(id)
        return setShowModalAlert(true)
    }

    //Close Modal
    const handleCloseEdit = () => {
        setCount(count => count + 1)
        setShowModalEdit(false)
    }

    const handleCloseAlert = () => {
        setCount(count => count + 1)
        setShowModalAlert(false)
    }

    useEffect(() => {

        getDataFetch().then((data) => {
            setDataProfesor(data)
        })

    }, [count])

    return (
        <main className='crud'>
            <h1>Información docente</h1>
            <table className='crud__table'>
                <thead className='crud__tableHead'>
                    <tr>
                        <th scope='col'>DNI</th>
                        <th scope='col'>APELLIDOS</th>
                        <th scope='col'>NOMBRES</th>
                        <th scope='col'>FACULTAD</th>
                        <th scope='col'>ACCION</th>
                    </tr>
                </thead>
                <tbody className='crud__tableBody'>
                {dataProfesor.map((profesor, index) => (
                    <tr key={index}>
                        <td>{profesor.dni}</td>
                        <td>{profesor.apellido}</td>
                        <td>{profesor.nombre}</td>
                        <td>{profesor.facultad}</td>
                        <td>
                            <FaEdit onClick={() => handleClickEdit(profesor.id, profesor.dni, profesor.apellido, profesor.nombre, profesor.facultad)} />
                            <FaTrashAlt onClick={() => handleClickAlert(profesor.id)} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/create">
                <button className='crud__buttonSave'>
                    Agregar profesor
                </button>
            </Link>
            {showModalEdit && (
                <Modal onClose={handleCloseEdit}>
                    <Edit
                        data={getId}
                        handleCloseEdit={handleCloseEdit}
                    />
                </Modal>
            )}
            {showModalAlert && (
                <Modal onClose={handleCloseAlert} alert>
                    <Delete
                        id={getId}
                        handleCloseAlert={handleCloseAlert}
                    />
                </Modal>
            )}
        </main>
    )
}
