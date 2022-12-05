import React, { useState } from 'react';
import axios from 'axios';

import { TextField, Box, Stack, Container, Button, CircularProgress, Alert } from '@mui/material';

export default function SignUp (props) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleClick = async () => {
        setLoading(true);
        setError(false);

        const data = {
            "firstName": firstName, 
            "lastName": lastName, 
            "email": email, 
        }

        axios.post(process.env.REACT_APP_API + "api/subscribe/", data)
        .then((res) => {
            setSuccess(true);
            setError(false);
        })
        .catch((e) => {
            let errorMessage = "";
            const data = e.response.data;
            if (data.includes("'email': [ErrorDetail(string='subscribe form with this Email already exists.', code='unique'")){
                errorMessage += "Email is already subscribed.\n";
            }
            else {
                errorMessage += "Server Error, please try again later.\n";
            }
            setErrorMessage(errorMessage);
            setSuccess(false);
            setError(true);
            console.error(e);
        })
        .finally(() => setLoading(false))
    }

    return (
        <Box
            sx={{
                display: "flex",
                padding: '2px',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: "75%",
            }}
        >
            <Stack spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                <Container sx={{textAlign: 'center'}}>
                    <h2>Subscribe to our newsletter!</h2>
                </Container>
                {
                    !loading ? 
                    <Stack spacing={2}>
                        <Container>
                            <TextField sx={{"paddingRight": "1em"}} className="input" id="first-name" label="First Name" value={firstName} onChange={handleFirstNameChange} variant="outlined"/>
                            <TextField className="input" id="last-name" label="Last Name" value={lastName} onChange={handleLastNameChange} variant="outlined"/>
                        </Container>
                        <Container>
                            <TextField sx={{"width": "100%"}} className="input" id="email" label="Email" value={email} onChange={handleEmailChange} variant="outlined" required/>
                        </Container>
                        <Container sx={{textAlign: 'center'}}>
                            <Button 
                                variant="contained"
                                sx={{width:'100%'}}
                                onClick={() => handleClick()}
                            >
                                Submit
                            </Button>
                        </Container>
                    </Stack> :
                    <CircularProgress/>
                }
                { error && !success && <Alert severity='error'>{errorMessage}</Alert> }
                { !error && success && <Alert severity='success'>"Subscribed!"</Alert> }
            </Stack>
        </Box>
    );

}