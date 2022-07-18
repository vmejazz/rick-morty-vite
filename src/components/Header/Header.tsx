import { Button, Divider, Stack } from "@mui/material";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsType } from "../../models";
import { selectShowType } from "../../store";
import { clearFilter } from "../../store/slices/appReducer";
import { getApiUrl, getData } from "../../utils";
import { Filter, FilterStatus, PaginationField } from "./components";
import { ButtonsStyled, HeaderStyled } from "./HeaderStyled";
import { v4 as uuid } from "uuid";

export const Header: FC = memo(() => {
  const dispatch = useDispatch();
  const showType = useSelector(selectShowType);
  const [lasType, setLastType] = useState<string>(uuid());

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

  useEffect(() => {
    setLastType(uuid());
  }, [showType]);

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

      <PaginationField key={lasType} />
      <FilterStatus />
      <Divider sx={{ margin: "20px 0" }} />
    </>
  );
});
