import React, { useState } from 'react';
import axios from 'axios';

import { TextField, Box, Stack, Container, Button, CircularProgress } from '@mui/material';

export default function SignUp (props) {
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        try{
            setLoading(true);

            axios.get(process.env.REACT_APP_API + "subscribe")
            .then((res) => {
                console.log(res)
            })
            .finally(() => setLoading(false))

            // fetch(process.env.REACT_APP_API + "signup", {
            //     headers: new Headers({
            //         'Referrer-Policy': 'origin'
            //     })
            // })
            // .then((res) => console.log(res))
            // .finally(() => setLoading(false))
        } catch (e) {
            setLoading(false);
            console.error(e);
        }
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
                            <TextField className="input" id="first-name" label="First Name" variant="outlined"/>
                            <TextField className="input" id="last-name" label="Last Name" variant="outlined"/>
                        </Container>
                        <Container>
                            <TextField className="input" id="email" label="Email" variant="outlined" required/>
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
            </Stack>
        </Box>
    );

}