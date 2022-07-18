import season1 from "../../../../assets/season1.png";
import season2 from "../../../../assets/season2.png";
import season3 from "../../../../assets/season3.png";
import season4 from "../../../../assets/season4.jpeg";
import season5 from "../../../../assets/season5.jpeg";

export const getSeasonImage = (name: string) => {
  if (name.includes("S01")) {
    return season1;
  }

  if (name.includes("S02")) {
    return season2;
  }

  if (name.includes("S03")) {
    return season3;
  }

  if (name.includes("S04")) {
    return season4;
  }

  if (name.includes("S05")) {
    return season5;
  }

  return season1;
};
