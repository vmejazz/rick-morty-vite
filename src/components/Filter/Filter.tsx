import React, { memo, useCallback } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { FilterCharacters } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectApp } from "../../store";
import { getApiUrl, getData } from "../../utils";
import { getRequestData } from "../../api/utils";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Filter = memo(() => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { filter, showType } = useSelector(selectApp);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnApply = useCallback(() => {
    getData(
      dispatch,
      `${getApiUrl(showType)}/?${getRequestData(filter)}`,
      showType
    );
    handleClose();
  }, [filter]);

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
});
