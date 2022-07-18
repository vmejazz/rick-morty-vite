import { Dispatch } from "@reduxjs/toolkit";
import { getDataRequest } from "../api";
import { ItemsType } from "../models";
import {
  setAppLoading,
  setInfoPage,
  setAppShowType,
  setAppError,
} from "../store/slices/appReducer";
import { getItemsAction } from "./getItemsAction";

export const getData = async (
  dispatch: Dispatch,
  request: string,
  type: ItemsType
) => {
  dispatch(setAppLoading(true));
  const res = await getDataRequest(request);

  if (res === "ERROR") {
    dispatch(setAppLoading(false));
    dispatch(setAppError(true));
    return;
  }

  if (res) {
    const setItemsAction = getItemsAction(type);
    dispatch(setItemsAction(res.results));
    dispatch(setInfoPage(res.info));
    dispatch(setAppShowType(type));
    dispatch(setAppError(false));
    dispatch(setAppLoading(false));
  }
};
