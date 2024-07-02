import React from 'react';
import { Route, Routes } from 'react-router';

const Pokedex = React.lazy(() => import('../views/Pokedex'));

const AppRoutes = () => (
    <Routes>
        <Route path="/"
        element= {
            <React.Suspense fallback={<div>Cargando...</div>}>
                <Pokedex/>
            </React.Suspense>
        }>

        </Route>
    </Routes>
);

export default AppRoutes;