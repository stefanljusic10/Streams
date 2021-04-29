import React, { useEffect } from 'react'

function GoogleAuth() {

    useEffect(() => {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '630859611893-v05fsi56pgj6il81lpcm8pgfjsva3k4n.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }, [])

    return (
        <div className="header-nav-item">
            Google Auth
        </div>
    )
}

export default GoogleAuth
