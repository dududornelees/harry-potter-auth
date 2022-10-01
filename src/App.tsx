import { Provider } from "react-redux";
import { store } from "store/rootStore";
import { Routes } from "routes";

export const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};
