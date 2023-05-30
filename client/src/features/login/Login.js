import { useState } from "react"
import { useLoginUserMutation } from "../api/apiSlice"
import { useDispatch } from "react-redux"
import { setUser } from "../../app/uiSlice"
import { useNavigate } from "react-router"


export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loginUser] = useLoginUserMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLoginClicked = () => {
        const newUser = { username, password }
        loginUser(newUser).unwrap().then(response => {
            console.log('Successful login!')
            dispatch(setUser(response))
            navigate('/')
        })
    }

    return <div>
        <h2>Login</h2>
        <div>
            <input value={username} onChange={ev => setUsername(ev.target.value)} placeholder="Username" />
            <input value={password} onChange={ev => setPassword(ev.target.value)} type='password' placeholder="Password" />
        </div>
        <button className="btn btn-success" onClick={onLoginClicked}>Login</button>
    </div>
}