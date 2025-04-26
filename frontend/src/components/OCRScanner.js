import React, { useState } from "react";

const OCRScanner = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleScan = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("/api/scan-label", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.text);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleScan}>Scan Label</button>
      <p>{result}</p>
    </div>
  );
};

export default OCRScanner;
