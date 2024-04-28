import { Provider } from "react-redux";
import { store } from '../store';
import React from "react";

export const WithStore = (component: () => React.ReactNode): React.JSX.Element => {
    return (
        <Provider store={store}>{component()}</Provider>
    )
}

