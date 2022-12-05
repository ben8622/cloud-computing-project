import { Grid, Typography, Card, CardContent } from '@mui/material';
import * as React from 'react';

export default function Stock(props) {
    return (
        <Card sx={{minWidth: "100%", background: "#d8e3db"}}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={5} sx={{maxWidth: "100%"}}>
                        <Typography variant="h4">{props.symbol}</Typography>
                        <Typography variant="body">{props.name}</Typography>
                    </Grid>
                    <Grid item xs={7} sx={{display:"flex", alignItems: "center", justifyContent: "end"}}>
                        <Typography>${props.value}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};