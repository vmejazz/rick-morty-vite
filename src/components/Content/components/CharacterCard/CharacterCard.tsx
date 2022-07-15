import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ICharacter } from "../../../../models";

interface IProps {
  item: ICharacter;
}

export const CharacterCard: FC<IProps> = ({ item }) => {
  const {
    image,
    id,
    created,
    episode,
    gender,
    location,
    name,
    origin,
    species,
    status,
    type,
    url,
  } = item;
  const itemKeys = Object.keys(item) as Array<keyof ICharacter>;

  return (
    <Card sx={{ maxWidth: 280, margin: "10px" }}>
      <CardMedia component="img" height="200" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Created:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(created).toLocaleDateString()}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Status:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {status}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Gender:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gender}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Species:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {species}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Episode:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {episode}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Origin:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {origin.name}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Location:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
