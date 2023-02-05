import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from "@mui/system";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
            <Stack direction={"row"} spacing="1rem">
            <Button variant="contained" type="button" onClick={(event) => handleEditClick(event, contact)}>
            Edit
        </Button>
        <Button variant="contained" startIcon={<DeleteIcon />} type="button" onClick={() => handleDeleteClick(contact.id)}>
  Delete
</Button>
            </Stack>
       
      </td>
    </tr>
  );
};

export default ReadOnlyRow;