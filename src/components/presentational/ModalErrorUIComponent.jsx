import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState, useEffect} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const ModalErrorUIComponent = ({modalTitle, modalText}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true)
    }, [modalTitle, modalText]);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {modalText}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
