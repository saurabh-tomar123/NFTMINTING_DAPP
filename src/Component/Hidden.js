import Contract from './Contract'
import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap';
import converter from 'web3'
const { ethereum } = window;
function Hidden(){
    const hiddenContract=Contract.hiddenContract
    const [walletKey,Setwalletkey]=useState('')
    const [msg1,setMsg1]=useState('')
    const [msg2,setMsg2]=useState('')
    const[verify1,setVerify]=useState({})
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
        async function hideIdentity(){
           
            let data1= converter.utils.toHex("hello")
            // let data2=converter.utils.hexToBytes(data1)
             console.log("====>",data1)
        //     const checkIdentity1=await hiddenContract.methods.checkIdentity1(data1).send({from:walletKey})
        //   console.log(checkIdentity1)
          let data3= converter.utils.toHex(msg2)
        //   let data4= converter.utils.hexToBytes(data3)
        //   console.log("====>",data4)
          const checkIdentity2=await hiddenContract.methods.checkIdentity2(data3).send({from:walletKey})
          console.log(checkIdentity2)
        }
        async function verify(){
            const checkDetails=await hiddenContract.methods.verifyDetails().call()
            console.log(checkDetails)  
            // setVerify(checkDetails)
        }

    return(
        <div>
            <h1>hide idenity from another</h1>
            Secrate1 :<input type="text" value={msg1} onChange={(e)=>setMsg1(e.target.value)}/>
            secrate2 :<input type="text" value={msg2} onChange={(e)=>setMsg2(e.target.value)}/>
            <button onClick={hideIdentity}>clickme</button>
            <button onClick={verify}>verify</button>
            
        </div>
    )
} export default Hidden;