import React, { FC, memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ICharacter } from "../../../../models";

interface IProps {
  item: ICharacter;
}

export const CharacterCard: FC<IProps> = memo(({ item }) => {
  const { image, created, gender, location, name, species, status } = item;

  return (
    <Card sx={{ width: 280, margin: "10px" }}>
      <CardMedia component="img" height="200" image={image} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {name}
        </Typography>

        <Typography variant="body2" noWrap>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Status:</span>
            <span>{status}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Gender:</span>
            <span>{gender}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Species:</span>
            <span>{species}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Location:</span>
            <span
              style={{
                overflow: "hidden",
                flexShrink: "0",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {location.name}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Created:</span>
            <span>{new Date(created).toLocaleDateString()}</span>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
});
