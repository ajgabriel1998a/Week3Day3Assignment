import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Display = ({ personData }) => {

    const personList = personData.map(user => {
        return (
            <div key={user.name}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <label>Date of Birth: {user.dateofbirth}</label><br/>
                            <label>Email: {user.email}</label><br/>
                            <label>Contact No: {user.contact}</label><br/>
                            <label>Tell me about yourself: {user.yourself}</label><br/>
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
        )
    });

    return (
        <>
            {personList}
        </>
    )
}

export default Display;