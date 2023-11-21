
import { useState } from "react";

function Login1(){

let [name, setName] = useState("");
let [phone, setPhone] = useState("");
let [result, setResult] = useState("");

function sendToBackend()
{

    var data = {
        "name":name,
        "phone": phone
    };
    
    try{
    fetch(
        "http://localhost:3000/users",
        {
            method:"POST",
            headers: { 'Content-Type': 'application/json'},
            body: data
        }
        
    ).then((res) =>{
             setResult(res.json())
    })}
    catch(error){
console.log(error)
    }
}
    return(
        <div>
           
                <label>
                    Name
                </label>
                <input onChange={(val)=>{
                    setName(val.target.value)
                }}>
                </input>
                <br></br>
                <label>Phone</label>

                <input onChange={(val)=>{
                    setPhone(val.target.value)
                }}></input>

                <br></br>
                <button type="submit"  onClick={sendToBackend}>Submit</button>

                <br>
                </br>
                <h1>
                    {name} 
                </h1>
                <h1>
                    {phone}
                </h1>

             <h1>
                {result}
             </h1>
          
        </div>
    );
}

export default Login1;