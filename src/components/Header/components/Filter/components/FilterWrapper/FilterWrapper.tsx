import { FC, memo } from "react";
import { IShowType, ItemsType } from "../../../../../../models";
import { FilterCharacters } from "../FilterCharacters";
import { FilterEpisodes } from "../FilterEpisodes";
import { FilterLocations } from "../FilterLocations";

interface IProps {
  type: IShowType;
}

export const FilterWrapper: FC<IProps> = memo(({ type }) => {
  if (type === ItemsType.CHARACTERS) {
    return <FilterCharacters />;
  }

  if (type === ItemsType.LOCATIONS) {
    return <FilterLocations />;
  }

  if (type === ItemsType.EPISODES) {
    return <FilterEpisodes />;
  }

  return null;
});
