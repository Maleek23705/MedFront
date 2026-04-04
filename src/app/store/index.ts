import { ActionReducerMap } from "@ngrx/store";
import { LayoutState, layoutReducer } from "./layouts/layout-reducers";
import { ApikeyReducer, ApikeyState } from "./APIKey/apikey_reducer";
// import { authenticationReducer, AuthenticationState } from "./Authentication/authentication.reducer";

export interface RootReducerState {
    layout: LayoutState;
    APIKey: ApikeyState;
    // authentication: AuthenticationState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    APIKey: ApikeyReducer,
    // authentication: authenticationReducer,

}