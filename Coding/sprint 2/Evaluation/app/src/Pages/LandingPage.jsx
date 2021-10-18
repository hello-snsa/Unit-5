import React from 'react'
import { Link } from 'react-router-dom'

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

        </div>
    )
}
