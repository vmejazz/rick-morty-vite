import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { selectApp } from "../../../../store";
import { Typography } from "@mui/material";
import { getData } from "../../../../utils";

const re = /page=[0-9]+/g;

export const PaginationField = () => {
  const [page, setPage] = React.useState(1);
  const { infoPage, showType, isLoading, hasError } = useSelector(selectApp);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    let latestRequestParams = "";
    if (infoPage.next) {
      latestRequestParams = infoPage.next.replace(re, "");
    } else if (infoPage.prev) {
      latestRequestParams = infoPage.prev.replace(re, "");
    }
    const newStringRequest = latestRequestParams + `&page=${value}`;
    getData(dispatch, newStringRequest, showType);
  };

  if (isLoading || hasError) {
    return null;
  }

  if (infoPage && infoPage.pages && infoPage.pages > 1) {
    return (
      <Stack spacing={2} alignItems="center" mb={"10px"}>
        <Pagination
          count={infoPage.pages}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
        <Typography variant="subtitle1" color="black">
          Всего: {infoPage.count}
        </Typography>
      </Stack>
    );
  }

  return null;
};
