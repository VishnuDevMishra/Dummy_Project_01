import { Button, TextField } from "@mui/material";
import {  useState } from "react";
import { GuestDetails } from "./GuestDetails";
import './guestList.css';

export const GuestList = () => {
  const [name, setName] = useState<string>("");
  const [guestList, setGuestList] = useState<string[]>([]);
  
  const addGuestHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("Button Clicked");
    if (name === "") {
      return;
    }
    setGuestList([...guestList, name]);
    setName("");
  };


  const listClickHandler = (event: React.MouseEvent) => {
    console.log(event);
  };

  const deteletGuestDetail = (guest: string) => {
    setGuestList((prevData)=>prevData.filter((item)=>item.trim()!==guest.trim()));
  };

  return (
    <div>
      <h3>Guests List</h3>
      <ul onClick={listClickHandler}>
        {guestList.map((item,index) => {
          return (<li className='listItem' key={item}>  <span> <GuestDetails deteletGuestDetail= {deteletGuestDetail} editable={false} name={item} index={index}/> </span> </li>);
        })}
      </ul>
      <TextField
        variant="standard"
        label="Guest Name"
        helperText="(Please enter guest name)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" onClick={addGuestHandler} sx={{ m: 2 }}>
        Add Guest
      </Button>
    </div>
  );
};
