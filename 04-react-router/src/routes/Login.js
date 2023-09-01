import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    function goAbout() {
        // navigate("/about?id=1001&name=felix", { replace: true })
        navigate("/about/1001", { replace: true })
    }
    return (
        <>
            <div>login</div>
            <button onClick={goAbout}>skip about</button>
        </>

    )
}

export default Login