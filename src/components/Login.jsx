import { useLocation } from 'react-router-dom'
import { useState } from 'react'

//Hay que haver un POST con una DB y el prevstate es []
const prevState = {
    email: "",
    password:""
}
 const Login = ({ LoginUser, logError}) => {
    const location = useLocation()
    const { state } = location
 
const [form, setForm] = useState(prevState)
 
    const dataUser = (ev) => {
        const { value, name } = ev.target;

        setForm({...form, [name]: value })
    }
    
    const submitForm = (ev) => {
        ev.preventDefault();
        LoginUser(form, state ? state.prevRoute: Error)
        setForm(prevState);
    }
    
    return (<form onSubmit={submitForm}>
      <label htmlFor="name">
            Name
            <input type="name" name="name" onChange={dataUser} value={form.name} />
        </label>
        <label htmlFor="surname">
            Surname
            <input type="surname" name="surname" onChange={dataUser} value={form.surname} />
        </label>

        <label htmlFor="email">
            Email
            <input type="email" name="email" onChange={dataUser} value={form.email} />
        </label>
        <label htmlFor="pass">
            Contraseña
            <input type="password" name="password" id="pass" onChange={dataUser}
                value={form.password} />
        </label>
        <div> 
        <button className='Button'>Register Me!</button>
        </div>

        {logError ? <div style={{ color: 'pink' }}>{logError} </div> : null}
    </form>)
    
    }
export default Login