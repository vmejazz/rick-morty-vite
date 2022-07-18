import { Button, Divider, Stack } from "@mui/material";
import { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ItemsType } from "../../models";
import { clearFilter, setFilter } from "../../store/slices/appReducer";
import { getApiUrl, getData } from "../../utils";
import { Filter } from "../Filter";
import { FilterStatus } from "../FilterStatus";
import { PaginationField } from "../PaginationField";
import { ButtonsStyled, FilterStyled, HeaderStyled } from "./HeaderStyled";

export const Header: FC = memo(() => {
  const dispatch = useDispatch();

  const handleClickCharacters = useCallback(() => {
    getData(
      dispatch,
      `${getApiUrl(ItemsType.CHARACTERS)}`,
      ItemsType.CHARACTERS
    );
    dispatch(clearFilter());
  }, []);

  const handleClickLocations = useCallback(() => {
    getData(dispatch, `${getApiUrl(ItemsType.LOCATIONS)}`, ItemsType.LOCATIONS);
    dispatch(clearFilter());
  }, []);

  const handleClickEpisodes = useCallback(() => {
    getData(dispatch, `${getApiUrl(ItemsType.EPISODES)}`, ItemsType.EPISODES);
    dispatch(clearFilter());
  }, []);

  return (
    <>
      <HeaderStyled>Rick and Morty DataBase</HeaderStyled>

      <ButtonsStyled>
        <Stack
          spacing={2}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleClickCharacters}
          >
            Characters
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={handleClickLocations}
          >
            Locations
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={handleClickEpisodes}
          >
            Episodes
          </Button>
        </Stack>

        <Filter />
      </ButtonsStyled>

      <PaginationField />
      <FilterStatus />
      <Divider sx={{ margin: "20px 0" }} />
    </>
  );
});
