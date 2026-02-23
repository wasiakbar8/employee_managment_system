import React, { useState } from 'react'
import { Authcontext } from './Authcontext'
import { getLocalstorage, setLocalstorage } from '../Utils/LocalStorage'

const Authprovider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        if (!localStorage.getItem('employees')) {
            setLocalstorage()
        }
        return getLocalstorage()
    })

    return (
        <Authcontext.Provider value={[userData, setUserData]}>
            {children}
        </Authcontext.Provider>
    )
}

export default Authprovider