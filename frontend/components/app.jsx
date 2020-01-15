import React from "react";
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import NavCat from "./nav_cat/nav_cat";
import HomePageContainer from './homepage/homepage_container';
import ShopIndexContainer from './shop/shop_index_container';
import ShopFormContainer from './shop_form/shop_form_container';
import Footer from './footer/footer';

const App = () => (
    <div id="app">
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>Itsy</h1>
            </Link>
            <GreetingContainer />
        </header>

        <NavCat />
        
        <Switch>
            <Route exact path='/' component={HomePageContainer} />

            <ProtectedRoute exact path="/shops" component={ShopIndexContainer} />
            <ProtectedRoute exact path="/shops/new" component={ShopFormContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;