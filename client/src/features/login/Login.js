import { useGetUserQuery } from "../api/apiSlice"


export const Login = () => {

    const { data: user } = useGetUserQuery()
    console.log(user)


    return <p>Login</p>
}