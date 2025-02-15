import { useState } from "react"

const StatefulForm = () => {
    const [name, setName] = useState("okey")
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError("password must be 6 character or longer")
        } else {
            setError("")
        }
        console.log(email, name, password)
    }

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" name="name" id="" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                <br />
                <input onChange={handleNameChange} type="submit" value="Submit" />
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default StatefulForm
