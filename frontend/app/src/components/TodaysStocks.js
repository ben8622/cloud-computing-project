import * as React from 'react';
import { useState } from 'react';
import {Box, CircularProgress, ListItem, List, Alert, Typography} from '@mui/material'
import Stock from './Stock';
import axios from 'axios';

export default function TodaysStocks() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        setLoading(true)
        axios.get(process.env.REACT_APP_API+"api/get-stocks/")
            .then((res) => res.data)
            .then(data => setData(data))
            .catch((err) => {
                console.error(err.message)
                setError(err)
            })
            .finally(() => { setLoading(false) })
    }, [])

    return (
        <Box 
            sx={{
                display: "flex",
                alignItems: "center", 
                justifyContent: "center",
                minWidth: "75%"
            }}
        >
            {loading && <CircularProgress/>}
            {error && <Alert severity='error'>Error loading stocks! Come back in a couple minutes</Alert>}
            <List sx={{display:"flex", flexDirection:"column", justifyContent:"center", minWidth: '90%'}}>
                {   data && 
                    data.map(({symbol, name, value}) => (
                        <ListItem key={symbol} sx={{display: "flex", flexDirection: "column"}}>
                            <Stock sx={{maxWidth: "80%"}} symbol={symbol} name={name} value={strToFloat(value)}/>
                        </ListItem>
                    ))
                }
                {
                    data &&
                    <ListItem sx={{display:"flex", justifyContent:"center"}}>
                        <Typography variant="overline">Last Updated: {new Date(data[0].createdDate).toLocaleDateString()}</Typography>
                    </ListItem>
                }
            </List>
        </Box>
    )
};

function strToFloat(str) {
    return parseFloat(str).toFixed(2)
}