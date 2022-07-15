import { Button } from "@mui/material";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  getCharacter,
  getCharacters,
  getEpisodes,
  getLocations,
} from "../../api";
import {
  ICharacterResponse,
  iEpisodesResponse,
  ILocationsResponse,
} from "../../models";
import { setAppLoading, setAppShowType } from "../../store/slices/appReducer";
import {
  setCharactersInfo,
  setCharactersItems,
} from "../../store/slices/charactersReducer";
import { setEpisodes } from "../../store/slices/episodesReducer";
import { setLocations } from "../../store/slices/locationsReducer";
import { Filter } from "../Filter";
import { ButtonsStyled, FilterStyled, HeaderStyled } from "./HeaderStyled";

// type ISetStoreCharacters = (res: ICharacterResponse) => void;
// type ISetStoreLocations = (res: ILocationsResponse) => void;
// type ISetStoreEpisodes = (res: iEpisodesResponse) => void;
// type ISetResponseStore = ISetStoreCharacters | ISetStoreLocations | ISetStoreEpisodes

export const Header: FC = () => {
  const dispatch = useDispatch();

  const handlerClickCharacters = useCallback((response: ICharacterResponse) => {
    dispatch(setCharactersItems(response.results));
    dispatch(setCharactersInfo(response.info));
    dispatch(setAppShowType("characters"));
  }, []);
  const handlerClickLocations = useCallback((response: ILocationsResponse) => {
    dispatch(setLocations(response.results));
    dispatch(setAppShowType("locations"));
  }, []);
  const handlerClickEpisodes = useCallback((response: iEpisodesResponse) => {
    dispatch(setEpisodes(response.results));
    dispatch(setAppShowType("episodes"));
  }, []);

  const requestCharacters = async () => {
    dispatch(setAppLoading(true));
    const res: ICharacterResponse = await getCharacters();
    // const restAnswer2 = await getCharacter({name: 'Rick', gender: 'male'})
    // const restAnswer2 = await getCharacter({ name: "Rick" });
    if (res) {
      handlerClickCharacters(res);
      dispatch(setAppLoading(false));
    }
  };
  const requestLocations = async () => {
    dispatch(setAppLoading(true));
    const res = await getLocations();

    if (res) {
      handlerClickLocations(res);
      dispatch(setAppLoading(false));
    }
  };
  const requestEpisodes = async () => {
    dispatch(setAppLoading(true));
    const res = await getEpisodes();

    if (res) {
      handlerClickEpisodes(res);
      dispatch(setAppLoading(false));
    }
  };

  return (
    <>
      <HeaderStyled>
        Rick and Morty DataBase
        <FilterStyled>
          <Filter />
        </FilterStyled>
      </HeaderStyled>

      <ButtonsStyled>
        <Button variant="contained" size="large" onClick={requestCharacters}>
          Get characters
        </Button>
        <Button variant="contained" size="large" onClick={requestLocations}>
          Get locations
        </Button>
        <Button variant="contained" size="large" onClick={requestEpisodes}>
          Get episodes
        </Button>
      </ButtonsStyled>
    </>
  );
};
