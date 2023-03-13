import  axios  from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function PinJSONToIPFS() {
    const [hash,setHash]=useState('')
    const [data1,setData]=useState({name:"",image:"",description:""})
    async function data()
    {
        const key =" your pinata key"
        const secret =" your pinata secretKey"
        // let name = data1.name
        // let image = data1.image //"https://gateway.pinata.cloud/ipfs/bafkreieg342adbbwvgpb5gh7ke2glepbrhgxnscrr5ziroy6vazwhfrftm"
        // let description = data1.description     //"this NFT iS for minting purpose ONLY"
    // //make pinata call

    const JSONBody={
        "title": "Asset Metadata",
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": `${data1.name}`
            },
            "description": {
                "type": "string",
                "description": `${data1.description}`
            },
            "image": {
                "type": "string",
                "description": `${data1.image}`
            }
        }
    };
    console.log("=======>",JSONBody)
        const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
        //making axios POST request to Pinata ⬇️
         axios.post(url, JSONBody, {
                headers: {
                    pinata_api_key: key,
                    pinata_secret_api_key: secret,
                }
            }).then((res)=>{
                console.log("====>81",res)
                setHash(res.data.IpfsHash)
            })
    }
    function getInput(e){
        e.preventDefault()
        setData({...data1,[e.target.name]:e.target.value})
        console.log("---32>",data1)
    }
    return(
        <div>
            <h1 style={{color:'red'}}>pin json file</h1>
            <input type="text" style={{width:"500px",border:"2px solid green",borderRadius:"10px"}} placeholder="Please Enter Nft Name"  name="name" value={data1.name}onChange={(e)=>getInput(e)}/><br></br><br></br>
            <input type="text" style={{width:"500px",border:"2px solid green",borderRadius:"10px"}} placeholder="Image Url(must be Uploaded on ipfs)" value={data1.image} name="image" onChange={(e)=>getInput(e)}/><br></br><br></br>
            <input type="text" style={{width:"500px",height:"200px",border:"2px solid green",borderRadius:"10px",textAlign:"left"}}placeholder="Please Enter Nft description" name="description" value={data1.description} onChange={(e)=>getInput(e)}/><br></br><br></br>
            <button style={{color:"white",backgroundColor:"green",border:"2px solid red",borderRadius:"20px",width:"200px"}}  onClick={()=>data()}>Upload Your Metadata</button><br></br><br></br>

            <span style={{color:"greenyellow"}}> <a href={`https://gateway.pinata.cloud/ipfs/${hash}`}><span style={{color:"red"}}>IpfsHash :</span><br></br>{`https://gateway.pinata.cloud/ipfs/${hash}`}</a></span>
            {/* <h5 style={{color:"greenyellow"}}>IpfsHash :{hash}</h5> */}
        </div>
    )
};
export default PinJSONToIPFS;