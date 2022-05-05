import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";

const ImagePreviewCard = ({ src, name, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 5 }} variant="outlined">
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onDelete}>
            <CloseRounded />
          </IconButton>
        }
        title={name}
      />
      <CardMedia component="img" height="194" image={src} alt="Paella dish" />
    </Card>
  );
};

export default ImagePreviewCard;
