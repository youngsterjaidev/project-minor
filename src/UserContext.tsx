import { createContext } from "react"

interface Video {
    videoId: string,
    filePath: string
}

interface Token {
    auth_token: string;
    info: {
        id: string,
        email: string,
        password: string,
        profilePic: string | null,
        time: number,
        username: string,
        videos: Video[]
    }
}

const UserContext = createContext<[Token | null, () => void]>([null, () => { }])

export default UserContext
