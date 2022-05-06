import './App.css';
import './style.css';

import img from './imag/photopublic.jpg';
import video from "./vedio/video.mp4";
function App() {
  return (
    <div style ={{border:"solid 1px black", width:'100vw'}}>
    <img src={"/src/imag/photosrc.jpg"} className = "my-profile"  alt="my profile"/>
      <br/>
        <h1 className="title red">Nawres Ghressi</h1>
      <br/>
      <div className="image">
        <img src={img} className= "photo" alt= "cover"/>     
      </div>
      
      <video className="Video"width={320} height={240} controls autostart autoplay>
        <source  type={"video/mp4"} src={video}/> 
      </video>
</div>
  );
}

export default App;
