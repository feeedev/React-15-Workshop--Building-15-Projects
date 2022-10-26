import './FormComponent.css'
import {useState} from "react"

const FormComponent = () => {
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const [errorUserName,setErrorUserName]=useState('')
    const [errorEmail,setErrorEmail]=useState('')
    const [errorPassword,setErrorPassword]=useState('')
    const [errorConfirmPassword,setErrorConfirmPassword]=useState('')

    const [userNameColor,setUserNameColor]=useState('')
    const [emailColor,setEmailColor]=useState('')
    const [passwordColor,setPasswordColor]=useState('')
    const [confirmPasswordColor,setConfirmPasswordColor]=useState('')

    const validateForm = (e) => {
        e.preventDefault()

        if(userName.length > 8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('username must have 8 char')
            setUserNameColor('red')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('email format not valid')
            setEmailColor('red')
        }

        if(password.length > 8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('password must have 8 char')
            setPasswordColor('red')
        }

        if(confirmPassword === password && confirmPassword !== ''){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        }else{
            setErrorConfirmPassword('password not match')
            setConfirmPasswordColor('red')
        }
    }
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Form Validation</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}}/>
                    <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default FormComponent