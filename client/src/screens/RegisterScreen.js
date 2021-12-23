import React,{useState,useEffect} from 'react'
import Loader from 'react-spinners/HashLoader';
import Error from '../components/Error';
import Success from '../components/Success';
import axios from'axios';
function RegisterScreen(){
    const[name,setname]= useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[cpassword,setcpassword]=useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const[success,setsucceess]=useState();
    async function register(){
        if (password==cpassword)
        {
            const user={
                name,
                email,
                password,
                cpassword
            }
            try{
                setloading(true);
                const result=await axios.post('/api/users/register',user).data 
                setloading(false)
                setsucceess(true)
                setname('')
                setemail('')
                setcpassword('')

            }catch(error){
                console.log(error)
                setloading(false)
                seterror(true)
            }
        }
        else{
            alert("password doesn't match")
        }
    } //*bs= boxshadow
    return(
    <div>
        {loading && (<Loader/>)}
        {error &&(<Error/>)}
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5" >
            {success &&(<Success message='registration success'/>)}

                <div className='bs'>
                    <h2>Register</h2>
                    <input type="text" className="form-control" placeholder="name"
                    value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="email"
                    value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="password"
                    value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="confrim-password"
                    value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>

                    <button className="btn btn-primary mt-3 " onClick={register}>register</button>

                </div>
            </div>
        </div>
    </div>
    )}

export default RegisterScreen 