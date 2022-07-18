import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectApp } from "../../store";
import { Loading } from "./components/Loading";
import { ContentWrapper } from "./ContentStyled";
import {
  CharactersList,
  EpisodesList,
  LocationsList,
  Error,
} from "./components";
import { ItemsType } from "../../models";

export const Content: FC = () => {
  const { hasError, isLoading, showType } = useSelector(selectApp);

  let content;
  switch (showType) {
    case ItemsType.CHARACTERS:
      content = <CharactersList />;
      break;
    case ItemsType.LOCATIONS:
      content = <LocationsList />;
      break;
    case ItemsType.EPISODES:
      content = <EpisodesList />;
      break;
    default:
      content = null;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error />;
  }

  return <ContentWrapper>{content}</ContentWrapper>;
};
