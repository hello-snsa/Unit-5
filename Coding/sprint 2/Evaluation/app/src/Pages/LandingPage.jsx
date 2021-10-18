import React from 'react'
import { Link } from 'react-router-dom'
import AllMeetups from '../components/AllMeetups'

export default function LandingPage() {
    return (
        <div>
            <button>
                <Link to="/login">
                    Login
                </Link>
            </button>
            <button>
                <Link to="/signup">
                    Signup
                </Link>
            </button>



            <div className="createOwn">

                <h1>Create your Own Meetup</h1>

                <Link to="/createMeet">
                    Create Now
                </Link>

            </div>

            <div className="chooseOthers">

                <h1>Choose from others</h1>
            </div>
            <div className="chooseFromAll">

                <AllMeetups />

            </div>


        </div>
    )
}
