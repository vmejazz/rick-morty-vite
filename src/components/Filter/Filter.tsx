import React, { useCallback } from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { FilterCharacters } from "./components";
import { setAppLoading, setAppShowType } from "../../store/slices/appReducer";
import { setCharactersInfo, setCharactersItems } from "../../store/slices/charactersReducer";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter, getCharacters } from '../../api';
import { ICharacterResponse } from '../../models';
import { selectApp } from '../../store';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Filter = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const { filter } =  useSelector(selectApp)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnApply = useCallback(async() => {
    dispatch(setAppLoading(true));
    const res: ICharacterResponse = await getCharacter(filter);
    // const restAnswer2 = await getCharacter({name: 'Rick', gender: 'male'})
    // const restAnswer2 = await getCharacter({ name: "Rick" });
    if (res) {
      dispatch(setCharactersItems(res.results));
      dispatch(setCharactersInfo(res.info));
      dispatch(setAppShowType("characters"));
  
      dispatch(setAppLoading(false));
      handleClose()
    }
  },[filter])

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open filter
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Typography>Modal title</Typography>
        <DialogContent dividers sx={{ minWidth: "500px" }}>
          <FilterCharacters />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleOnApply}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
