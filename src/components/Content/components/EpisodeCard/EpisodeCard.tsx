import { Card } from "@mui/material";
import { FC, memo } from "react";
import { IEpisode, ILocation } from "../../../../models";

interface IProps {
  item: IEpisode;
}

export const EpisodeCard: FC<IProps> = memo(({ item }) => {
  const { created, name, air_date, characters, episode, id, url } = item;

  return (
    <Card style={{ margin: "10px" }}>
      <div>{`Episode:${episode}`}</div>
      <div>{`Name:${name}`}</div>
      <div>{`air_date:${air_date}`}</div>
      <div>{`Created:${new Date(created).toLocaleDateString()}`}</div>
      {/* <div>{`characters:${characters}`}</div> */}
      {/* <div>{`url:${url}`}</div> */}
    </Card>
  );
});
