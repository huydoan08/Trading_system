import { Typography } from "@mui/material";

export default function Header({children}) {
    return (
        <Typography variant="h6" gutterBottom fontSize={"45px"} align="center" fontWeight={700}>
          {children}
        </Typography>
    )
}