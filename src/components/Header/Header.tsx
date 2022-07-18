import { Button } from "@mui/material";
import { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ItemsType } from "../../models";
import { getData } from "../../utils";
import { Filter } from "../Filter";
import { PaginationField } from "../PaginationField";
import { ButtonsStyled, FilterStyled, HeaderStyled } from "./HeaderStyled";

export const Header: FC = memo(() => {
  const dispatch = useDispatch();

  const handleClickCharacters = useCallback(() => {
    getData(dispatch, "/character", ItemsType.CHARACTERS);
  }, []);

  const handleClickLocations = useCallback(() => {
    getData(dispatch, "/location", ItemsType.LOCATIONS);
  }, []);

  const handleClickEpisodes = useCallback(() => {
    getData(dispatch, "/episode", ItemsType.EPISODES);
  }, []);

  return (
    <>
      <HeaderStyled>
        Rick and Morty DataBase
        <FilterStyled>
          <Filter />
        </FilterStyled>
      </HeaderStyled>

      <ButtonsStyled>
        <Button
          variant="contained"
          size="large"
          onClick={handleClickCharacters}
        >
          Characters
        </Button>
        <Button variant="contained" size="large" onClick={handleClickLocations}>
          Locations
        </Button>
        <Button variant="contained" size="large" onClick={handleClickEpisodes}>
          Episodes
        </Button>
      </ButtonsStyled>

      <PaginationField />
    </>
  );
});
