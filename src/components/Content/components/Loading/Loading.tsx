import CircularProgress from "@mui/material/CircularProgress";
import { LoadingStyled } from "./LoadingStyled";

export const Loading = () => (
  <LoadingStyled>
    <CircularProgress size={200} />
  </LoadingStyled>
);
