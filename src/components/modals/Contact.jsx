import React from "react";
import { Stack, Box, Divider } from "@mui/material";
import { useUsersContext } from "../../context/UserProvider";
import { BtnContained, BtnOutlined } from "../buttons/Buttons";

export const Contact = () => {
    const { handleChange, handleSubmit } = useUsersContext();

    const inputsSignUp = [
        { label: "Name", name: "name", type: "text" },
        { label: "E-mail", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
    ];
    const inputsSignIn = [
        { label: "E-mail", name: "email", type: "email" },
        { label: "Contraseña", name: "password", type: "password" },
    ];


    return (
        <Box className="modal-container">
            <Stack className="modal-view">
                {/* close btn */}
                <Box className="modal-header">
                    <div className="modal-title">
                        <div
                            className="btn-close"
                            onClick={() => window.history.go(-1)}
                        >
                            x
                        </div>
                    </div>
                </Box>

                <Divider />

                <Box className="modal-data">
                    {/* create acc */}
                    <Stack className="modal-content">
                        <p className="title">Create Account</p>

                        <form className="form" >
                            {inputsSignUp.map((i) => (
                                <Box key={i.name} className="form-label">
                                    <label htmlFor={i.name}>{i.label}</label>

                                    <input
                                        className="w-100"
                                        i={i}
                                        onChange={handleChange}
                                        type={i.type}
                                        name={i.name}
                                        placeholder={`Enter your ${i.name}`}
                                    />
                                </Box>
                            ))}
                            <BtnContained text="create" onClick={handleSubmit}/>                        

                        </form>
                    </Stack>

                    {/* sign in */}
                    <Stack className="modal-content">
                        <p className="title">Sign In</p>
                        <form className="form">
                            {inputsSignIn.map((i) => (
                                <Box key={i.name} className="form-label">
                                    <label htmlFor={i.name}>{i.label}</label>
                                    <input
                                        className="w-100"
                                        onChange={handleChange}
                                        type={i.type}
                                        name={i.name}
                                        placeholder={`Enter your ${i.name}`}
                                    />
                                </Box>
                            ))}
                            <BtnOutlined text="sign in" />
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
