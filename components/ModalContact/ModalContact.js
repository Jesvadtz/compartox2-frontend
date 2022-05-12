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

export default function ModalContact({
  open,
  onClose,
  name,
  userName,
  userPhone,
  userEmail,
}) {
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
            ¡Ya casi es tuyo!
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body1"
            sx={{ mt: 2, mb: 2 }}
          >
            Contacta al vendedor para poder comprar el producto.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2">{userName}</Typography>
          <Link
            href={`https://wa.me/+52${userPhone}/?text=${encodeURI(
              "Hola. Estoy interesado en el artículo: "
            )}${encodeURI(name)}${encodeURI(
              " ¿Aún está disponible? Saludos."
            )}`}
            target="_blank"
            passHref
          >
            <ButtonPrimary variant="contained" target="_blank">
              Contactar por WhatsApp
            </ButtonPrimary>
          </Link>
          <Link href={`mailto:${userEmail}`} passHref>
            <ButtonPrimary variant="outlined">
              Contactar por Email
            </ButtonPrimary>
          </Link>
          <ButtonPrimary variant="text" onClick={onClose}>
            Cancelar
          </ButtonPrimary>
        </Box>
      </Modal>
    </div>
  );
}
