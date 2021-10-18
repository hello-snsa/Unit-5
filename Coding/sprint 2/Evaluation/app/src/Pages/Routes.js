import { Switch, Route } from "react-router-dom";


import React from 'react'
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/home">
                    <HomePage />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/signup">
                    <SignupPage />
                </Route>
            </Switch>


        </div>
    )
}
