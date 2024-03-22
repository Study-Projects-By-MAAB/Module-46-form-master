import useInputState from "../../hooks/useInputState"

const HookForm = () => {
    // const [name, handleNameChange] = useInputState("omuk hooked")
    const emailState = useInputState("omukhooked@afdadfs")

    const handleSubmit = (e) => {
        console.log("from data", emailState.value)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input onChange={handleNameChange} value={name} type="text" name="name" id="" /> */}
                <br />
                <input {...emailState} type="text" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HookForm
