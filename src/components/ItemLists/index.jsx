import { Box, ListItemText } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function ItemLists({ item }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
      <Box
        sx={{
          width: "10px",
          height: "10px",
          backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
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
              lg: "24px", 
            },
            fontWeight: "500",
          },
        }}
        primary={item}
      />
    </Box>
  );
}
