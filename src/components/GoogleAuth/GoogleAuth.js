import React, { useEffect, useState } from 'react'
import './GoogleAuth.css'

function GoogleAuth() {

    const [isSignedIn, setIsSignedIn] = useState(null)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '630859611893-v05fsi56pgj6il81lpcm8pgfjsva3k4n.apps.googleusercontent.com',
                scope: 'email'
            })
                .then(() => {
                    const auth = window.gapi.auth2.getAuthInstance()
                    setIsSignedIn(auth.isSignedIn.get())
                    auth.isSignedIn.listen(() => {
                        setIsSignedIn(auth.isSignedIn.get())
                    })
                })
        })
    }, [])

    const onSignIn = () => {
        window.gapi.auth2.getAuthInstance().signIn()
    }

    const onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut()
    }

    const renderAuthButton =
        isSignedIn === null ?
            null : isSignedIn ?
                <button onClick={() => onSignOut()} className="googleSingBtn">Sign Out</button> :
                <button onClick={() => onSignIn()} className="googleSingBtn">Sign In with Google</button>

    return (
        <div className="header-nav-item">
            {renderAuthButton}
        </div>
    )
}

export default GoogleAuth
