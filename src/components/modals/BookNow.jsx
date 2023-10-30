import React from 'react'
import { Link } from "react-router-dom";
import { useUsersContext } from '../../context/UserProvider';
import { BtnContained } from '../buttons/Buttons';


// como el add to cart
export const BookNow = () => {
    
    const { handleChange, handleSubmit, } = useUsersContext()
    const inputs = [
        { label: "Nombre", name: "nombre", type: "text"},
        { label: "E-mail", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
        { label: "Acepto terminos y condiciones", name: "conditions", type: "checkbox" }
    ];


  return (
    <div className="modal-container">
            <div className="modal-view">
                <div className="modal-header">
                    <div className="modal-title">
                        <div  className="btn-close"onClick={() => window.history.go(-1)}>
                            x
                        </div>
                    </div>
                </div>


                <div className="modal-content">
                    <h5>Room Info</h5>
                    <p>You have selected room: </p>
                   
                   

                </div>

                
            </div>
        </div>
  )
}


