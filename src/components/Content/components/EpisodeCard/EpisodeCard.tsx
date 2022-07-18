import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC, memo } from "react";
import { IEpisode } from "../../../../models";
import { getSeasonImage } from "./utils";

interface IProps {
  item: IEpisode;
}

export const EpisodeCard: FC<IProps> = memo(({ item }) => {
  const { created, name, air_date, episode } = item;

  return (
    <Card sx={{ width: 280, margin: "10px" }}>
      <CardMedia
        component="img"
        height="200"
        image={getSeasonImage(episode)}
        sx={{ backgroundPosition: "top" }}
      />
      <CardContent>
        <Typography variant="body2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Episode:</span>
            <span>{episode}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Name:</span>
            <span style={{ overflow: "hidden", flexShrink: "0" }}>{name}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Created:</span>
            <span>{new Date(created).toLocaleDateString()}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Air date:</span>
            <span>{air_date}</span>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
});
