// CUSTOM HOOK

import { useState } from "react"

export default function App() {
    const getToken = () => {
        let tokenStr = localStorage.getItem("userInfo")
        if (!tokenStr) return null
        let userToken = JSON.parse(tokenStr)
        return userToken
    }

    const [token, setToken] = useState(getToken())

    // create a hook to store the token
    const saveToken = (userInfo) => {
        if (userInfo) {
            const { auth_token, info } = userInfo

            localStorage.setItem("userInfo", JSON.stringify({ auth_token, info }))
            setToken({ auth_token, info })
        } else {
            localStorage.clear()
            setToken(null)
        }
    }

    return [
        token,
        saveToken
    ]
}
