import { Actions } from "easy-peasy";
import { IStore } from "./models";
import { typedHooks } from "./store";

export const useStoreActions = typedHooks.useStoreActions;

// TODO
export const useSetActiveSong = (actions: Actions<IStore>) => {
  useStoreActions(() => actions.activeSong.setActiveSong);
};
