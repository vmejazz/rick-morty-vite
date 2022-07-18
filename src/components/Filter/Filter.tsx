import React, { memo, useCallback } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectApp } from "../../store";
import { getApiUrl, getData } from "../../utils";
import { getRequestData } from "../../api/utils";
import { FilterWrapper } from "./components";
import { clearFilter, setFilterApplied } from "../../store/slices/appReducer";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Filter = memo(() => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { filter, showType, isApplied } = useSelector(selectApp);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnApply = useCallback(() => {
    dispatch(setFilterApplied(true));
    getData(
      dispatch,
      `${getApiUrl(showType)}/?${getRequestData(filter)}`,
      showType
    );
    handleClose();
  }, [filter]);

  const handleOnClear = useCallback(() => {
    dispatch(clearFilter());
    getData(dispatch, `${getApiUrl(showType)}`, showType);
  }, [showType]);

  return (
    <div>
      {isApplied && (
        <>
          <Button
            variant="contained"
            onClick={handleOnClear}
            sx={{ marginRight: "10px" }}
          >
            Clear filter
          </Button>
        </>
      )}
      <Button variant="contained" onClick={handleClickOpen}>
        Open filter
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <Typography
          textAlign="center"
          p={"10px"}
          variant="subtitle1"
          fontWeight={600}
        >
          Filter
        </Typography>
        <DialogContent dividers sx={{ minWidth: "500px" }}>
          <FilterWrapper type={showType} />
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
