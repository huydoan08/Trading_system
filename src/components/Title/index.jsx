import { Typography } from "@mui/material";

export default function Title({children}) {
    return (
        <Typography variant="h6" gutterBottom fontSize={"30px"} fontWeight={700}>
          {children}
        </Typography>
    )
}