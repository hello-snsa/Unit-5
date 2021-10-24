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


            <Route path="/home">
                <HomePage />
            </Route>

            <Route path="/login">
                <LoginPage />
            </Route>

            <Route path="/signup">
                <SignupPage />
            </Route>
            <Route path="/createMeet">
                <EventCreate />
            </Route>
            <Route  >
                <HomePage />
            </Route>

        </Switch>



    )
}
