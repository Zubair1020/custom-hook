import {Typography, Card, CardContent, CardMedia, CardActionArea, Link} from '@mui/material';


export const UserCardUIComponent = ({userData}) => {
    return (
        <Card sx={{width: 320, pb: "1rem"}} elevation={5}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={userData.imgSrc}
                    alt={userData.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {userData.name}
                    </Typography>
                    <Typography gutterBottom>
                        Email : {userData.email}
                    </Typography>
                    <Typography gutterBottom>
                        Phone : {userData.phone}
                    </Typography>
                    <Typography gutterBottom>
                        Website : <Link>{userData.website}</Link>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}