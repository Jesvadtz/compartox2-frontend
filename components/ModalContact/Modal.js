import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import ButtonPrimary from "../ButtonPrimary";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#FDD534",
  borderRadius: 1,
  boxShadow: 24,
  p: "4rem 2rem",
  textAlign: "center",
};

export default function ModalContact({ open, onClose, onClick }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¡Ya casi es tuyo!
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body2"
            sx={{ mt: 2, mb: 2 }}
          >
            Contacta al vendedor para poder comprar el producto.
          </Typography>
          <ButtonPrimary
            children="Contactar por WhatsApp"
            variant="contained"
          />
          <ButtonPrimary children="Contactar por Email" variant="outlined" />
          <ButtonPrimary children="Cancelar" variant="text" onClick={onClick} />
        </Box>
      </Modal>
    </div>
  );
}
