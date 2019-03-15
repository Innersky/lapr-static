import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootReduxState } from "../redux-reducers";

export type LaprThunkAction<R> = ThunkAction<R, IRootReduxState, null, AnyAction>;
export type LaprThunkDispatch = ThunkDispatch<IRootReduxState, {}, AnyAction>;
