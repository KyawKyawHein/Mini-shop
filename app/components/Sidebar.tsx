"use client"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [open,setOpen] = useState<boolean>(false)
    const {push} = useRouter();
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };   
      
      const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {sideBarItems.map((text, index) => (
              <ListItem onClick={()=>push(text.url)} key={text.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
        name:"မူလနေရာ",
        url:"/",
    },
    {
        id:2,
        name:"ပစ္စည်းများ",
        url:"/products",
    },
    {
        id:3,
        name:"အကြွေးစာရင်းများ",
        url:"/debts",
    },
]
