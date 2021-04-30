import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../../redux/actions/signInAction'
import { signOutAction } from '../../redux/actions/signOutAction'
import './GoogleAuth.css'

function GoogleAuth() {

    const dispatch = useDispatch()
    const isSignedIn = useSelector(state => state.auth)
    console.log(isSignedIn.isSignedIn);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '630859611893-v05fsi56pgj6il81lpcm8pgfjsva3k4n.apps.googleusercontent.com',
                scope: 'email'
            })
                .then(() => {
                    const auth = window.gapi.auth2.getAuthInstance()
                    onAuthChange(auth.isSignedIn.get())
                    auth.isSignedIn.listen(() => onAuthChange(isSignedIn.isSignedIn))
                })
        })
    }, [])

    const onAuthChange = isSignedIn => {
        if (isSignedIn) {
            dispatch(signInAction())
        }
        else {
            dispatch(signOutAction())
        }
    }

    const onSignInClick = () => {
        const auth = window.gapi.auth2.getAuthInstance()
        auth.signIn()
    }

    const onSignOutClick = () => {
        const auth = window.gapi.auth2.getAuthInstance()
        auth.signOut()
    }

    const RenderAuthButton = ({ isSignedIn }) => {
        if (isSignedIn === null)
            return null
        else if (isSignedIn)
            return <button onClick={() => onSignOutClick()} className="googleSingBtn">Sign Out</button>
        else return <button onClick={() => onSignInClick()} className="googleSingBtn">Sign In with Google</button>
    }

    return (
        <div className="header-nav-item">
            <RenderAuthButton isSignedIn={isSignedIn.isSignedIn} />
        </div>
    )
}

export default GoogleAuth
