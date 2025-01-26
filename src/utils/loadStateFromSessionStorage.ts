import { RootState } from "../app/store";

export function loadStateFromSessionStorage(): Partial<RootState> | undefined {
  try {
    const preloadedState: Partial<RootState> = {};

    const authFromStorage = sessionStorage.getItem("auth");
    // console.log(authFromStorage);
    // If a given slice's state is in sessionStorage, parse and assign it
    if (authFromStorage) {
      preloadedState.auth = JSON.parse(authFromStorage);
    }

    return preloadedState;
  } catch (e) {
    // If any error, return undefined so slices use default initial states
    console.error("Failed to parse state from sessionStorage:", e);
    return undefined;
  }
}
