import {  Modal, Box } from "@mui/material";
import styles from './modal.module.css'

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function MainModal({open, handleClose}) {

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style} >
            <p style={{textAlign: 'center'}}>Você tem 18 anos ou mais?</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', width: '100%' }}>
                <button className={styles.btnNao}>NÃO</button>
                <button className={styles.btnModal} onClick={handleClose}>SIM</button>
            </div>
         
       </Box>
    </Modal>
  );
}
