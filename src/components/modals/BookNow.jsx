import React from 'react'
import { Link } from "react-router-dom";
import { useUsersContext } from '../../context/UserProvider';

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
                        <button>CREATE</button>

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
                        <button>SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
  )
}



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import "../../app.css";
// import { useUsersContext } from "../../Context/UsersContext";

// export function UserSession({}) {

    
//     const inputs = [
//         { label: "Nombre", name: "nombre", type: "text"},
//         { label: "Apellido", name: "apellido", type: "text"},
//         { label: "E-mail", name: "email", type: "email" },
//         { label: "Password", name: "password", type: "password" },
//         { label: "Repetir Password", name: "passwordChecked", type: "password" },
//         { label: "Acepto terminos y condiciones", name: "conditions", type: "checkbox" }
//     ];

//     const { form , handleChange} = useUsersContext()

//     const handleSubmit = () => {
//         console.log(form);
//     };

//     return (
//         <ModalContainer>
//             <ModalView>
//                 <ModalHeader>
//                     <Title>
//                         <CloseBtn onClick={() => window.history.go(-1)}>
                        
//                             x
//                         </CloseBtn>
//                     </Title>
//                 </ModalHeader>

//                 <ModalContent>
//                     <h5>Create Account</h5>
//                     <Form onSubmit={handleSubmit}>
//                     {
//                         inputs.map((i) => (
//                             <div key={i.name}>
//                             <label htmlFor={i.name}>
//                                 {i.label}
//                             </label>
//                             <input 
//                                 i={i} 
//                                 onChange={handleChange}
//                                 type={i.type}
//                                 name={i.name}
//                                 /> 
//                             </div>))
//                         }
//                         <button>CREATE</button>

//                     </Form>
//                 </ModalContent>

//                 <ModalContent>
//                     <h5>Sign In</h5>
//                     <Form>
//                         <label htmlFor="email">
//                             E-Mail
//                             <input
//                                 onChange={handleChange}
//                                 type="email"
//                                 name="nombre"
//                             />
//                         </label>

//                         <label htmlFor="password">
//                             Contraseña:
//                             <input
//                                 onChange={handleChange}
//                                 type="password"
//                                 name="password"
//                             />
//                             <Link>No recuerdo mi contraseña</Link>
//                         </label>
//                         <button>SIGN IN</button>
//                     </Form>
//                 </ModalContent>
//             </ModalView>
//         </ModalContainer>
//     );
// }

// const KeyframeFadeIn = keyframes`
//     from {
//         transform: scale(0);
//     }
//     to {
//         transform: scale(1);
//     }
// `;

// const KeyframeFadeOut = keyframes`
//     from {
//         transform: scale(1);
//     }
//     to {
//         transform: scale(0);
//     }
// `;

// const ModalContainer = styled.div`
//     background-color: rgba(0, 0, 0, 0.3);
//     position: fixed;
//     top: 0;
//     left: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: black;
//     z-index: 199;
//     width: 100%;
//     height: 100vh;
// `;

// const ModalView = styled.div`
//     background-color: white;
//     border-radius: 10px;
//     overflow: hidden;
//     width: 90%;
//     height: 90vh;
//     box-sizing: border-box;

//     animation: ${KeyframeFadeIn} 0.3s ease forwards;
// `;

// const ModalHeader = styled.div`
//     background-color: white;
//     padding: 10px;
//     display: flex;
//     justify-content: space-between;
// `;

// const Title = styled.div``;

// const CloseBtn = styled.div`
//     border: none;
//     background: none;
//     font-weight: bold;
//     padding: 10px 15px;
//     border-radius: 3px;
//     cursor: pointer;
//     color: #999;

//     &:hover {
//         color: black;
//     }
// `;

// const FadeOut = styled.div`
//     animation: ${KeyframeFadeOut} 0.3s ease;
// `;

// const ModalContent = styled.div``;

// const Form = styled.form``;
