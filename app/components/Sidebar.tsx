"use client"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InventoryIcon from '@mui/icons-material/Inventory';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
    const [open,setOpen] = useState<boolean>(false)
    const {push} = useRouter();
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };   
    const path = usePathname()
      
      const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {sideBarItems.map((text, index) => (
              <ListItem className={`${path ===text.url && 'bg-blue-500 text-white'}`} onClick={()=>push(text.url)} key={text.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon className={`${path ===text.url && 'text-white'}`}>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      
  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="absolute left-0 top-0 md:static"><MenuIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Sidebar;

const sideBarItems = [
    {
        id:1,
        name:"ယနေ့ရောင်းရငွေ",
        url:"/",
        icon : <AttachMoneyIcon />
    },
    {
        id:2,
        name:"ပစ္စည်းများ",
        url:"/products",
        icon : <InboxIcon />
    },
    {
        id:3,
        name:"အကြွေးစာရင်း",
        url:"/debts",
        icon:<InventoryIcon/>
    },
    {
      id:4,
      name:"အဝယ်ပစ္စည်း",
      url:"/debt",
      icon : <DirectionsCarIcon />
  },
]
