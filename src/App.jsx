import "./App.css"
import Grandpa from "./components/Grandpa/Grandpa"
// import ReuseableForm from "./components/ReuseableForm/ReuseableForm"
// import HookForm from "./components/HookForm/HookForm"
// import RefFrom from "./components/RefForm/RefFrom"
// import SimpleForm from "./components/SimpleForm/SimpleForm"
// import StatefulForm from "./components/StatefulForm/StatefulForm"

function App() {
    // const handleSignUpSubmit = (data) => {
    //     console.log("sign up data", data)
    // }

    // const handleUpdateProfile = (data) => {
    //     console.log("update profile", data)
    // }

    return (
        <>
            <h1>Form Master</h1>

            <Grandpa></Grandpa>

            {/* <SimpleForm></SimpleForm> */}
            {/* <StatefulForm></StatefulForm> */}
            {/* <RefFrom></RefFrom> */}
            {/* <HookForm></HookForm> */}
            {/* <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
                <div>
                    <h2>Sign Up</h2>
                    <p>please sign up right now</p>
                </div>
            </ReuseableForm>
            <ReuseableForm formTitle={"Profile Update"} handleSubmit={handleUpdateProfile} submitBtnText="Update">
                <div>
                    <h2>Update Profile</h2>
                    <p>always keep your profile update</p>
                </div>
            </ReuseableForm> */}
        </>
    )
}

export default App
