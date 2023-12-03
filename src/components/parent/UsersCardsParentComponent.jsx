import {UserCardUIComponent} from "../presentational/UserCardUIComponent.jsx";
import {Box, Typography} from "@mui/material";

export const UsersCardsParentComponent = ({usersData = []}) => {
    const generateUniqueId = () => {
        const randomId = Math.random().toString(36).slice(2);
        return randomId.slice(0, 9);
    };

    return (
        <>
            <Typography marginBlock={5} variant="h3" textAlign="center">User Cards Using custom hooks</Typography>
            <Box
                display="flex" flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                gap="5rem"
            >
                {
                    usersData.map((userData, index) => {
                        if (index === 3) index = 33;
                        const id = generateUniqueId()
                        const imgSrc = `https://picsum.photos/id/${28 + index}/600/600`
                        userData.id = id;
                        userData.imgSrc = imgSrc
                        return <UserCardUIComponent key={id} userData={userData}/>
                    })
                }
            </Box></>
    )
}
