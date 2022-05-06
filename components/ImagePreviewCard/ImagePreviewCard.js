import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";

import styles from "./ImagePreviewCard.module.scss";

const ImagePreviewCard = ({ src, name, onDelete }) => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "flex-start",
      }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height="48"
        image={src}
        alt="Image preview"
        className={styles.previewImage}
      />
      <CardHeader
        sx={{ alignItems: "center" }}
        title={name}
        className={styles.previewTitle}
      />
      <IconButton aria-label="settings" onClick={onDelete}>
        <CloseRounded />
      </IconButton>
    </Card>
  );
};

export default ImagePreviewCard;
