import { Card } from "@mui/material";
import { FC } from "react";
import { ILocation } from "../../../../models";

interface IProps {
  item: ILocation;
}

export const LocationCard: FC<IProps> = ({ item }) => {
  const { created, dimension, id, name, residents, type, url } = item;

  return (
    <Card style={{margin: '10px'}}>
      <div>{`Name:${name}`}</div>
      <div>{`Dimension:${dimension}`}</div>
      <div>{`Created:${new Date(created).toLocaleDateString()}`}</div>
      <div>{`Type:${type}`}</div>
    </Card>
  );
};
