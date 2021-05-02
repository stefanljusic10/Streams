import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../../redux/actions/signInAction'
import { signOutAction } from '../../redux/actions/signOutAction'
import './GoogleAuth.css'

function GoogleAuth() {

    const [auth, setAuth] = useState(null)
    const dispatch = useDispatch()
    const isSignedIn = useSelector(state => state.auth)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '630859611893-v05fsi56pgj6il81lpcm8pgfjsva3k4n.apps.googleusercontent.com',
                scope: 'email'
            })
                .then(() => {
                    setAuth(window.gapi.auth2.getAuthInstance());
                    onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                    window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
                })
        })
    }, [])

    const onAuthChange = isSignedIn => {
        if (isSignedIn) {
            dispatch(signInAction(window.gapi.auth2.getAuthInstance().currentUser.get().getId()))
        }
        else {
            dispatch(signOutAction())
        }
    }

    const onSignInClick = () => {
        auth.signIn()
    }

    const onSignOutClick = () => {
        auth.signOut()
    }

    const RenderAuthButton = ({ isSignedIn }) => {
        if (isSignedIn === null)
            return null
        else if (isSignedIn)
            return <button onClick={() => onSignOutClick()} className="googleSingBtn">Sign Out</button>
        else
            return <button onClick={() => onSignInClick()} className="googleSingBtn">Sign In with Google</button>
    }

    return (
        <div className="header-nav-item">
            <RenderAuthButton isSignedIn={isSignedIn.isSignedIn} />
        </div>
    )
}

export default GoogleAuth
