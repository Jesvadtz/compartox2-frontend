import { ListItem, ListItemText } from "@mui/material";

export default function ItemDashboard({ text, count }) {
  return (
    <div>
      <ListItem sx={{ alignSelf: "stretch" }}>
        <ListItemText primary={text} secondary={count} />
      </ListItem>
    </div>
  );
}
