import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Collapse,
} from "@mui/material";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState({});

  const toggleMenu = (menu) => {
    setOpen((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
      }}
    >
      <div>
        <Typography
          variant="h6"
          style={{
            padding: 16,
            fontWeight: "bold",
            textAlign: "center",
            color: "#007bff",
          }}
        >
          TRADING SYSTEMS
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/trading-system">
          <ListItemIcon>
            <SettingsSystemDaydreamIcon />
          </ListItemIcon>
          <ListItemText primary="TRADING SYSTEMS" />
        </ListItem>
      </List>
      <Divider />
      <ListItem button onClick={() => toggleMenu("certificates")}>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon>
        <ListItemText primary="Operational Certificates" />
        {open["certificates"] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open["certificates"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/big-win-trades" sx={{ pl: 4 }}>
            <ListItemText primary="Lệnh thắng lớn" />
          </ListItem>
          <ListItem button component={Link} to="/early-profit" sx={{ pl: 4 }}>
            <ListItemText primary="Lệnh chốt lời non" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/big-loss-trades"
            sx={{ pl: 4 }}
          >
            <ListItemText primary="Lệnh thua lỗ lớn" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/missed-opportunity"
            sx={{ pl: 4 }}
          >
            <ListItemText primary="Bỏ lỡ cơ hội tốt" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <List>
        <ListItem button component={Link} to="/important-trades">
          <ListItemIcon>
            <SettingsSystemDaydreamIcon />
          </ListItemIcon>
          <ListItemText primary="IMPORTANT NOTES" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/criteria">
          <ListItemIcon>
            <SettingsSystemDaydreamIcon />
          </ListItemIcon>
          <ListItemText primary="CRITERIA BEFORE ENTRY ORDERS" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/technical-analysis">
          <ListItemIcon>
            <SettingsSystemDaydreamIcon />
          </ListItemIcon>
          <ListItemText primary="TECHNICAL ANALYSIS" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
