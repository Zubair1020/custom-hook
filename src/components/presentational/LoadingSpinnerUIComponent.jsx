import {Backdrop, CircularProgress} from '@mui/material';
import {useEffect, useState} from "react";

export const LoadingSpinnerUIComponent = ({loadingState}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => setOpen(true), [loadingState]);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}