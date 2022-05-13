import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import ButtonPrimary from "../ButtonPrimary";
import Link from "next/link";

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

export default function ModalInvitee({ open, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            ¡Lo sentimos!
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body1"
            sx={{ mt: 2, mb: 2 }}
          >
            Para poder continuar necesitas tener una cuenta en CompartoX2.
          </Typography>
          <Link href="/signup" passHref>
            <ButtonPrimary variant="contained">Crear una cuenta</ButtonPrimary>
          </Link>
          <Link href="/login" passHref>
            <ButtonPrimary variant="outlined">Iniciar Sesión</ButtonPrimary>
          </Link>
          <ButtonPrimary variant="text" onClick={onClose}>
            Cancelar
          </ButtonPrimary>
        </Box>
      </Modal>
    </div>
  );
}
