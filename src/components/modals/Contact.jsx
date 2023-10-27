import { Divider } from "@mui/material";
import { Stack, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useUsersContext } from "../../context/UserProvider";

export const Contact = () => {
    const inputs = [
        { label: "Name", name: "name", type: "text" },
        { label: "E-mail", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
        {
            label: "I agree to terms and conditions",
            name: "conditions",
            type: "checkbox",
        },
    ];

    const { handleChange, handleSubmit } = useUsersContext();

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
                        <form className="form" onSubmit={handleSubmit}>
                            {inputs.map((i) => (
                                <Box key={i.name} className="form-label">
                                    <label htmlFor={i.name}>{i.label}</label>
                                    <input
                                        style={{width: "100%"}}
                                        i={i}
                                        onChange={handleChange}
                                        type={i.type}
                                        name={i.name}
                                        placeholder={`Enter your ${i.name}`}
                                    />
                                </Box>
                            ))}
                            <button>CREATE</button>
                        </form>
                    </Stack>

                    {/* sign in */}
                    <Stack className="modal-content">
                        <p className="title">Sign In</p>
                        <form className="form" onSubmit={handleSubmit} >
                            <Box className="form-label">
                                <label htmlFor="email">
                                    E-Mail </label>
                                    <input
                                    style={{width: "100%"}}
                                        onChange={handleChange}
                                        type="email"
                                        name="nombre"
                                        placeholder="Enter your e-mail"
                                    />
                                
                            </Box>

                            <Box className="form-label">
                                <label htmlFor="password">
                                    Contraseña: </label>
                                    <input
                                    style={{width: "100%"}}
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                    />
                                
                            </Box>

                            <Link>No recuerdo mi contraseña</Link>

                            <button>SIGN IN</button>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
