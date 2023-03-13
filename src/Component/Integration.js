import Contract from './Contract'
import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap';


const { ethereum } = window;
function Claim()
{
    const [walletKey,Setwalletkey]=useState('')
    const [data,setData]=useState('')
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [input, setInput]=useState('')
    const[user,setUser]=useState({})
    const[udept,setUdept]=useState('')
    const[address,setaddress]=useState('')


    const connected=async()=>
    {
            try {
                if (!ethereum) return alert("Please install MetaMask.");
    
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
    
                Setwalletkey(accounts[0]);
    
                //   toast.success("wallet connected");
                // setconnected(true);
            } catch (error) {
                //   toast.warning(error);
    
                throw new Error("No ethereum object");
            }
        };
        useEffect(()=>{connected()},[])
        const callFunction=async(e)=>
        {
            e.preventDefault()
        // let Owner=await Contract.methods.Owner().call({from:walletKey})
      let setDetails=await Contract.contract.methods.setDetails(name,dept).send({from:walletKey})
      console.log(setDetails)
      
            // setData(Owner)
        }
       async function eventHandler()
        {
            let getDetails=await Contract.contract.methods.stuDetails(walletKey).call()
            setUser(getDetails)
            console.log(getDetails)

        }
        return(
            <div>
                <h1>unique integration</h1>
                {/* <h2>Contract Owner: {data}</h2> */}
                <form  onSubmit={callFunction}>
                Name<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
                Dept<input type="text" value={dept} onChange={(e)=>setDept(e.target.value)}/><br></br><br></br>
                <button onClick={()=>callFunction()}>Submit</button>
                </form>

                Dept<input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/><br></br><br></br>
                <button onClick={()=>eventHandler()}>click me</button>
               <center>
                <Table striped variant='dark'>
                    <tbody><tr>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Address</th>
                    </tr> 
                         <tr >
                       <td>{user.name}</td>
                       <td>{user.dept}</td>
                        <td>{user.addr}</td>
                        </tr>
                        
                        
                    
                    </tbody>
                   
                </Table></center>
            </div>
        )
    } export default Claim;
