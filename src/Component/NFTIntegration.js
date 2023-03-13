import Contract from './Contract'
import React,{useState,useEffect} from 'react'

import {Table} from 'react-bootstrap';
import Pinjson from '../Component/pinJSONToIPFS';
import video from '../vde.mp4'
import FileUpload from '../Component/FileUpload';


const { ethereum } = window;
const NFTContract=Contract.NFTContract
function NFTIntegration()
{
    const [hash,setTransactionHash]=useState('')
    const [walletKey,Setwalletkey]=useState('')
    const [data,setData]=useState('')
    const [url,setURL]=useState('')
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
      async function NFT()
      {
        let owner=await NFTContract.methods.owner().call()//safeMint
        let Name=await NFTContract.methods.name().call()
        let SYMBOL=await NFTContract.methods.symbol().call()
        console.log(owner)
        console.log(Name)
        console.log(SYMBOL)
        
        let safeMint=await NFTContract.methods.safeMint(address,url).send({from:walletKey})
          console.log(safeMint)
          setTransactionHash(safeMint.transactionHash)
          console.log(safeMint.transactionHash)
      }
//  function handleCopyClick(e) { // this function will be use to copy clipboard. 
//         e.preventDefault();
//         // const content = e.target.innerText;
//          const content ="saurabh tomar"
//         navigator.clipboard.writeText(content);
{/* <p onClick={handleCopyClick} style={{color:"blue"}}>COPY</p> */}
//       }

        return(
        <div><video  style={{height:"100%",width:"100%"}} src={video}  loop autoPlay /> 
                <h1 style={{color:"green",position:"absolute",top:"0px",left:"455px"}}>NFT MINTING DAPP</h1>
                <div style={{position:"absolute",left: "250px",top:"50px", alignContent:"center",width:"800px",height:"1000px",border:"2px solid red",borderRadius:"20px"}}>
                <FileUpload />
                 <Pinjson />
                <h1 style={{color:"red"}}>MINT YOUR NFT HERE..</h1>
                <input type="text" style={{width:"500px",border:"2px solid green",borderRadius:"10px"}} placeholder="Enter address  here..." value={address} onChange={(e)=>setaddress(e.target.value)}/><br></br><br></br>
                <input type="text" style={{width:"500px",border:"2px solid green",borderRadius:"10px"}} placeholder="Enter nft metadata ipfs complete Url here..." value={url} onChange={(e)=>setURL(e.target.value)}/><br></br><br></br>
                <button style={{color:"white",backgroundColor:"green",border:"2px solid red",borderRadius:"20px",width:"200px"}} onClick={NFT}>MINT NFT</button><br></br><br></br>
                <span style={{color:"greenyellow"}}> <a href={`https://goerli.etherscan.io/tx/${hash}`}><span style={{color:"red"}}>Check on Goerli etherscan :</span><br></br>{`https://goerli.etherscan.io/tx/${hash}`}</a></span> 
                

                {/* <button onClick={()=>envData()}>Submit</button> */}
                </div></div>
                
        )
    } export default NFTIntegration

    // ---------------ERC721  VALID JSON FORMAT----------- 
    // {
    //     "title": "Asset Metadata",
    //     "type": "object",
    //     "properties": {
    //         "name": {
    //             "type": "string",
    //             "description": "Identifies the asset to which this NFT represents"
    //         },
    //         "description": {
    //             "type": "string",
    //             "description": "Describes the asset to which this NFT represents"
    //         },
    //         "image": {
    //             "type": "string",
    //             "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
    //         }
    //     }
    // }