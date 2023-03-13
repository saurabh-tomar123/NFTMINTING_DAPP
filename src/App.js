import logo from './logo.svg';
import './App.css';
import Claim from './Component/Integration';
import { BrowserRouter as Router, Route ,Link, Routes, BrowserRouter} from "react-router-dom";
import NFTIntegration from  './Component/NFTIntegration'
import Hidden from './Component/Hidden';
import Pinjson from './Component/pinJSONToIPFS';
import FileUpload from './Component/FileUpload';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
    <Route path="/home" element={<div><Claim /></div>}/>
    <Route path="/" element={<div> <NFTIntegration /></div>}/>
    <Route path="/hidden" element={<div><Hidden /></div>}/>
    {/* <Route path="/nft" element={<div><NFTIntegration /></div>}/> */}
    <Route path="/pinata" element={<div><Pinjson /></div>}/>
    <Route path="/file" element={<div><FileUpload /></div>}/>
  </Routes>
   </BrowserRouter>
      
     
    </div>
  );
}

export default App;
