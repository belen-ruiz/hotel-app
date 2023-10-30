import React from 'react'
import { Link } from "react-router-dom";
import { useUsersContext } from '../../context/UserProvider';
import { BtnContained } from '../buttons/Buttons';

export const BookNow = () => {

    const inputs = [
        { label: "Nombre", name: "nombre", type: "text"},
        { label: "E-mail", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
        { label: "Acepto terminos y condiciones", name: "conditions", type: "checkbox" }
    ];

    const { handleChange, handleSubmit } = useUsersContext()


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
                    <h5>Create Account</h5>
                    <form onSubmit={handleSubmit}>
                    {
                        inputs.map((i) => (
                            <div key={i.name}>
                            <label htmlFor={i.name}>
                                {i.label}
                            </label>
                            <input 
                                i={i} 
                                onChange={handleChange}
                                type={i.type}
                                name={i.name}
                                /> 
                            </div>))
                        }
                        <BtnContained text="create" />

                    </form>
                </div>

                <div className="modal-content">
                    <h5>Sign In</h5>
                    <form>
                        <label htmlFor="email">
                            E-Mail
                            <input
                                onChange={handleChange}
                                type="email"
                                name="nombre"
                            />
                        </label>

                        <label htmlFor="password">
                            Contraseña:
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                            />
                            <Link>No recuerdo mi contraseña</Link>
                        </label>
                        <BtnContained text="sign in" />
                    </form>
                </div>
            </div>
        </div>
  )
}


