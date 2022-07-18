import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC, memo } from "react";
import { ILocation } from "../../../../models";
import image from "../../../../assets/location3.png";

interface IProps {
  item: ILocation;
}

export const LocationCard: FC<IProps> = memo(({ item }) => {
  const { created, dimension, name, type } = item;

  return (
    <Card sx={{ width: 280, margin: "10px" }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        sx={{ backgroundPosition: "top" }}
      />
      <CardContent>
        <Typography variant="body2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Name:</span>
            <span>{name}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Dimension:</span>
            <span style={{ overflow: "hidden", flexShrink: "0" }}>
              {dimension}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Created:</span>
            <span>{new Date(created).toLocaleDateString()}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Type:</span>
            <span>{type}</span>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
});
