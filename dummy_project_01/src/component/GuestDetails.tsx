import { TextField, IconButton, Checkbox } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface IGuestDetailsProps {
  name: string;
  index: number;
  editable: boolean;
  deteletGuestDetail: (guest: string) => void;
}
export const GuestDetails = (props: IGuestDetailsProps) => {
  const [editFlag, setEditFlag] = useState<boolean>(props.editable || false);
  const [guestName, setGuestName] = useState<string>(props.name);
  const editTextHandler = () => {
    setEditFlag(!editFlag);
  };
  

  const deleteItem = () => {
    props.deteletGuestDetail(guestName);
  }

  return (
    <>
      <span>
        <Checkbox />
      </span>
      <TextField
        variant="standard"
        value={guestName}
        inputProps={{ readOnly: editFlag ? false : true }}
        onChange={(e) => setGuestName(e.target.value)}
        onBlur={(e)=> setEditFlag(false)}
      />
      <span>
        <IconButton sx={{ mx: 0.5 }} onClick={deleteItem}>
          <DeleteIcon />
        </IconButton>
        <IconButton sx={{ mx: 0.5 }}>
          <EditIcon onClick={editTextHandler}  color={editFlag ? 'primary': 'disabled'}/>
        </IconButton>
      </span>
    </>
  );
};
