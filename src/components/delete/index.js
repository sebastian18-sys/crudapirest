import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteDataFetch } from '../../services/deleteDataProfesor'
import "./delete.css"

export default function Delete(props) {

    const navigate = useNavigate();

    // Function Delete DATA
    const onDeleteData = async (id, handleClose) => {
        const close = handleClose;
        await deleteDataFetch(id)
        close()
        navigate("/")
    }

    return (
        <section className='delete'>
            <h2>¿Estás seguro que quieres eliminar este elemento?</h2>
            <div className='delete__button'>
                <button className='delete__buttonDelete' onClick={() => onDeleteData(props.id, props.handleCloseAlert)}>Eliminar</button>
            </div>
        </section>
    )
}
