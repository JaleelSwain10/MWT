import { useState } from "react";
import "./App.css";
 
 
function App() {
  const [message, setMessage] = useState("");
  const [singleFile, setSingleFile] = useState(null);
  const [displaySingleFile, setDisplaySingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [displayMultipleFiles, setDisplayMultipleFiles] = useState([]);
 const [displayDogImage, setDisplayDogImage] = useState("");
 
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDisplaySingleFile(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
 
 
  const handleSingleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", singleFile);
 
 
    try {
      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });
 
 
      const data = await response.json();
      setMessage(data.message || "Upload successful");
    } catch (error) {
      console.log(error);
      setMessage("Upload failed");
    }
  };
 
 
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const listData = await response.json();
 
 
      const filePromises = listData.map(async (filename) => {
        const fileResponse =
          await fetch(`http://localhost:8000/fetch/file/${filename}`);
        // ❌ ERROR: You are assigning a string to `fileResponse`, not performing a fetch.
        // ✅ FIX: You need to actually call fetch here like this:
        // const fileResponse = await fetch(`http://localhost:8000/fetch/file/${filename}`);
 
 
        const blob = await fileResponse.blob();
        // ❌ ERROR: `fileResponse` is just a string here, not a Response object — .blob() will fail.
        // ✅ FIX: After using fetch properly above, this line will work as expected.
 
 
        const imageURL = URL.createObjectURL(blob);
        return imageURL;
      });
 
 
      const filePromiseResults = await Promise.all(filePromises);
      setDisplayMultipleFiles(filePromiseResults);
    } catch (error) {
      console.error(error);
    }
  };
 
 
  const uploadMultipleFiles = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      multipleFiles.forEach((file) => {
        formData.append("files", file);
      });
 
 
      const response = await fetch(`http://localhost:8000/save/multiple`, {
        method: "POST",
        body: formData,
      });
 
 
      if (!response.ok) {
        setMessage("There was a problem saving the files");
        return;
      }
 
 
      const data = await response.json();
      // ❌ ERROR: You forgot to `await` response.json(), so `data` is a Promise.
      // ✅ FIX: Use `const data = await response.json();`
 
 
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };
 
 const fetchDogImage = async() =>{
    try {
        const response = await fetch (`https://dog.ceo/api/breeds/image/random`);

        const data = await response.json();
        setDisplayDogImage(data.message)
    } catch (error) {
        console.error(error);
    }
 };

const handleDogUpload = async(e) => {
    e.preventDefault()
    try {
        const fileResponse = await fetch(displayDogImage);
        const blob = await fileResponse.blob();
        
        const formData = new FormData();
        formData.append("file", blob, "dog-image.jpg");

        const response = await fetch(`http://localhost:8000/save/single`,{
            method: "POST",
            body: formData
        });

        const data = await response.json();
      setMessage(data.message || "Upload successful");
        

    } catch (error){
        console.error(error)
    }
}


  return (
  <div className="container">
    {message && <p className="message">{message}</p>}

    <div className="section">
      <h2>Single File Uploader</h2>
      <form onSubmit={handleSingleUpload} className="form">
        <input
          type="file"
          onChange={(e) => setSingleFile(e.target.files[0])}
          required
          className="input"
        />
        <button type="submit" className="btn">Upload</button>
      </form>
      <button type="button" onClick={fetchSingleFile} className="btn secondary">
        Fetch Random Image
      </button>
      {displaySingleFile && (
        <div className="image-preview">
          <h4>Fetched Image:</h4>
          <img src={displaySingleFile} alt="Fetched from server" />
        </div>
      )}
    </div>

    <div className="section">
      <h2>Multiple File Uploader</h2>
      <form onSubmit={uploadMultipleFiles} className="form">
        <input
          type="file"
          onChange={(e) => setMultipleFiles(Array.from(e.target.files))}
          required
          multiple
          className="input"
        />
        <button type="submit" className="btn">Upload</button>
      </form>
      <button type="button" onClick={fetchMultipleFiles} className="btn secondary">
        Fetch Multiple Random Images
      </button>
      {displayMultipleFiles.length > 0 && (
        <div className="image-grid">
          {displayMultipleFiles.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt={`Image ${index}`} />
          ))}
        </div>
      )}
    </div>

    <div className="section">
      <h4>Fetch the Dog</h4>
      <button onClick={fetchDogImage} className="btn secondary">Doggy</button>
      {displayDogImage && (
        <div className="image-preview">
          <img src={displayDogImage} alt="Dog" />
        </div>
      )}
      <button onClick={handleDogUpload} className="btn">Save it!</button>
    </div>
  </div>
);

}
 
 
export default App;