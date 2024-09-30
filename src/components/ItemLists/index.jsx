import { Box, ListItemText } from "@mui/material";

export default function ItemLists({ item }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <Box
        sx={{
          width: "10px",
          height: "10px",
          backgroundColor: "black",
          borderRadius: "50%",
          marginRight: "30px",
          flexShrink: 0,
          mt: "20px",
        }}
      />
      <ListItemText
        primaryTypographyProps={{
          sx: {
            fontSize: {
              xs: "16px", 
              sm: "20px", 
              md: "24px", 
              lg: "30px", 
            },
            fontWeight: "700",
          },
        }}
        primary={item}
      />
    </Box>
  );
}
