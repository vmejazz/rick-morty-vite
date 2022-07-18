import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { selectApp } from "../../store";
import { getCharacter, getPaginationPage } from "../../api";
import { setAppLoading, setInfoPage } from "../../store/slices/appReducer";
import { setCharactersItems } from "../../store/slices/charactersReducer";
import { setLocations } from "../../store/slices/locationsReducer";
import { setEpisodes } from "../../store/slices/episodesReducer";
import { Typography } from "@mui/material";

export const PaginationField = () => {
  const [page, setPage] = React.useState(1);
  const { infoPage, showType } = useSelector(selectApp);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const latestRequest =
      infoPage.next?.split("page=") || infoPage.prev?.split("page=") || "";
    console.log(
      "🚀 ~ file: PaginationField.tsx ~ line 24 ~ handleChange ~ latestRequest",
      latestRequest
    );
    const newStringRequest = latestRequest.join("&") + `&page=${value}`;

    const req = async () => {
      dispatch(setAppLoading(true));
      const res = await getPaginationPage(newStringRequest);
      console.log("🚀 ~ file: PaginationField.tsx ~ line 31 ~ req ~ res", res);
      if (res) {
        if (showType === "characters") {
          dispatch(setCharactersItems(res.results));
        }
        if (showType === "locations") {
          dispatch(setLocations(res.results));
        }
        if (showType === "episodes") {
          dispatch(setEpisodes(res.results));
        }
        dispatch(setInfoPage(res.info));
        dispatch(setAppLoading(false));
      }
    };
    req();
  };

  if (infoPage && infoPage.pages && infoPage.pages > 1) {
    return (
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={infoPage.pages}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
        <Typography variant="subtitle1" color="red">
          Всего: {infoPage.count}
        </Typography>
      </Stack>
    );
  }

  return null;
};
