import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";

// Pages
import { Login, Admin } from "pages";

// Middlewares
import { CheckAuth } from "middlewares";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="auth" element={<Login />} />

                <Route path="admin" element={<CheckAuth />}>
                    <Route path="" element={<Admin />} />
                </Route>

                <Route path="*" element={<Navigate to="auth" replace />} />
            </Switch>
        </BrowserRouter>
    );
};
