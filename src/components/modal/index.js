import React from 'react'
import "./modal.css"

export default function Modal({ children, onClose, alert }) {
  return (
    <div className='modal'>
        <div className={`modal__container ${alert && 'modal__contanier--alert'}`}>
            <button className='modal--button' onClick={onClose}>X</button>
            {children}
        </div>
    </div>
  )
}