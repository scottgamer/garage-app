import { ICar, Meta } from "../../types";
import Const from "./constant";
import { RootStateOrAny } from "react-redux";
import { CarState } from "./type";

const selectCars = (state: RootStateOrAny): ICar[] => {
  /// useSelector will automatically memoize this
  /// unlike calling it as anoymouse function that does not memoize
  return state[Const.namespace].ids.map(
    (id: string) => state[Const.namespace].values[id]
  );
};
const selectCarsMeta = (state: RootStateOrAny): Meta => {
  const carState: CarState = state[Const.namespace];
  return {
    loading: carState.loading,
    error: carState.error,
    cache: carState.cache,
  };
};
const selectCar = (state: RootStateOrAny, id: string): ICar => {
  const carState: CarState = state[Const.namespace];
  return carState.values[id];
};

const selectForm = (state: RootStateOrAny): ICar => {
  /// useSelector will automatically memoize this
  /// unlike calling it as anoymouse function that does not memoize
  return state[Const.namespace].form;
};

export default {
  selectCars,
  selectCar,
  selectCarsMeta,
  selectForm,
};
