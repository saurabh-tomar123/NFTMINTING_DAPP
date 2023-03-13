
import { useState } from "react"
import axios from "axios"
import data from '../.env' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const FileUpload = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [hash,setHash]=useState('')
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("file", selectedFile);
  const response = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    formData,
    {
      headers: {
        pinata_api_key: "",
        pinata_secret_api_key: "",
      },
    }
  );
  console.log(response.data);
  setHash(response.data.IpfsHash)
};

  return (
    <>
      <h1 style={{color:"red"}}> Upload Image on pinata</h1>
    <label>Choose File</label>
    <input type="file"  onChange={changeHandler}/>
    <button  style={{color:"white",backgroundColor:"green",border:"2px solid red",borderRadius:"20px",width:"200px"}} onClick={handleSubmit}>Submit</button><br></br><br></br>
    <span style={{color:"greenyellow"}}> <a href={`https://gateway.pinata.cloud/ipfs/${hash}`}><span style={{color:"red"}}> image URL :</span><br></br>{`https://gateway.pinata.cloud/ipfs/${hash}`}</a></span>
    </>
  )
}

export default FileUpload


