/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ReuseableForm = ({ formTitle, handleSubmit, submitBtnText = "submit", children }) => {
    const handleLocalSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="text" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    )
}

export default ReuseableForm
