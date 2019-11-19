import React from 'react';
import {Route} from "react-router-dom";

import {LoginForm, RegisterForm} from "../../modules";

import './Auth.scss'


const Auth = () => (
    <section className="Auth">
        <div className="Auth__content">
            <Route exact path={["/", "/login"]}><LoginForm/> </Route>
            <Route path="/register"><RegisterForm/></Route>
        </div>
    </section>
);

export default Auth;