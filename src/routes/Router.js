import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../layout/Layout';

import LandingPage from '../pages/LandingPage/LandingPage';
import Error404Page from '../pages/Error404Page/Error404Page';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route component={Error404Page} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Router;