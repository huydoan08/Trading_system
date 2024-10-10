import { Box, ListItemText } from "@mui/material";

export default function ItemLists({ item }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
      <Box
        sx={{
          width: "10px",
          height: "10px",
          backgroundColor: "black",
          borderRadius: "50%",
          marginRight: "20px",
          flexShrink: 0,
          mt: {
            xs: "8px", 
            sm: "10px", 
            md: "15px", 
            lg: "18px", 
          }
        }}
      />
      <ListItemText
        primaryTypographyProps={{
          sx: {
            fontSize: {
              xs: "12px", 
              sm: "16px", 
              md: "22px", 
              lg: "26px", 
            },
            fontWeight: "700",
          },
        }}
        primary={item}
      />
    </Box>
  );
}
