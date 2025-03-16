import { useState } from "react";
import "./App.css";

const App = () => {
  // what do we need to track
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayDogImages, setDisplayDogImages] = useState("");
  const [message, setMessage] = useState("");

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);

      const blob = await response.blob(); // we made a blob - Binary Large Object
      // but thats not an image, so we need to make an image element

      // using createObjectURL
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
      setDisplayImage(URL.createObjectURL(singleFile)); // Show uploaded image
    } catch (error) {
      console.log("Error:", error);
      setMessage("Failed to upload file.");
    }
  };

  // fetch functions -> fetch multiple [TODO]
  const fetchMultipleFiles = async () => {
    try {
      const res = await fetch(`http://localhost:8000/fetch/multiple`);
      const data = await res.json();

      console.log(data);

      const file = data.map(async (fname) => {
        const fres = await fetch(`http://localhost:8000/fetch/file/${fname}`);
        const fblob = await fres.blob();
        const furl = URL.createObjectURL(fblob);
        return furl;
      });

      const imgurls = await Promise.all(file);
      setDisplayImages(imgurls);
    } catch (e) {
      console.log(e);
    }
  };
  // fetch functions -> fetch dog image [TODO]

  const fetchDogImage = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await res.json();

      setDisplayDogImages(data.message);
    } catch (e) {
      console.log(e);
    }
  };

  const saveDogImage = async () => {
    try{

      const fileres = await fetch(displayDogImages);
      const fileblob = await fileres.blob();
      const formData = new FormData();
      formData.append("file", fileblob, "dog.jpg");

      const res = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      console.log(data)
    }catch(e){
      console.log(e)
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Fetch Single Random Image</h2>
        <button onClick={fetchSingleFile}>Fetch Single File</button>
        {displayImage && (
          <div className="card">
            <h3>Single File</h3>
            <img src={displayImage} alt="Display Image" />
          </div>
        )}

        <form onSubmit={handleSubmitSingleFile}>
          <h2>Upload Single File</h2>
          <input type="file" onChange={handleSingleFileChange} />
          <button type="submit">Upload Single File</button>
        </form>
        {message && <p className="upload-message">{message}</p>}
      </div>

      <div className="right-panel">
        <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
        <div className="image-wrapper">
          {displayImages.length > 0 ? (
            displayImages.map((img, idx) => (
              <img key={idx} src={img} alt={`Multiple ${idx}`} className="card" />
            ))
          ) : (
            <p className="nothing">There are no images</p>
          )}
        </div>
      </div>

      <div className="bottom-panel">
        <div className="card">
          <button onClick={fetchDogImage}>Fetch Dog Image</button>
          {displayDogImages && (
            <>
              <h3>Dog Image</h3>
              <img src={displayDogImages} alt="Dog" />
              <button onClick={saveDogImage}>Save Dog Image</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
