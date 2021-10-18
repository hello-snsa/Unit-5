import { Switch, Route } from "react-router-dom";


import React from 'react'
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import EventCreate from "../components/events/EventCreate";

export default function Routes() {


    return (

        <Switch>

            <Route exact path="/">
                <LandingPage />
            </Route>


            <Route exact path="/home">
                <HomePage />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

            <Route exact path="/signup">
                <SignupPage />
            </Route>
            <Route exact path="/createMeet">
                <EventCreate />
            </Route>
        </Switch>



    )
}
