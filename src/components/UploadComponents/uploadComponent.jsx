import React, { useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

export default function UploadComponent() {
  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    fileArray.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages((prev) => [
            ...prev,
            {
              id: Date.now() + Math.random(),
              url: e.target.result,
              name: file.name,
            },
          ]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-emerald-50 p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto relative">
        <div className="petal-bg">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>

        <div className="text-center mb-12 relative">
          <h1
            className="text-6xl font-bold mb-3 text-green-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Bloom Gallery
          </h1>
          <p
            className="text-xl text-green-700"
            style={{ fontFamily: "Lora, serif" }}
          >
            Preserve the beauty of your harvest
          </p>
        </div>

        {/* <div
          className={`upload-zone mb-12 border-4 border-dashed border-green-300 rounded-3xl p-12 text-center cursor-pointer ${dragActive ? "active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
          style={{
            background: dragActive
              ? "linear-gradient(135deg, rgba(187, 247, 208, 0.4), rgba(253, 230, 138, 0.4))"
              : "linear-gradient(135deg, rgba(187, 247, 208, 0.2), rgba(253, 230, 138, 0.2))",
          }}
        >
          {/* <input
            id="fileInput"
            type="file"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          /> 
          <Upload
            className="mx-auto mb-4 text-green-600"
            size={56}
            strokeWidth={1.5}
          />
        </div> */}

        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="flower-card relative group rounded-2xl overflow-hidden bg-white shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-green-100 to-amber-100">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-red-600 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 hover:text-white transform hover:scale-110"
                  aria-label="Remove image"
                >
                  <X size={18} />
                </button>

                <div className="p-4 bg-white">
                  <p
                    className="text-sm text-green-700 truncate"
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    {image.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <ImageIcon
              className="mx-auto mb-4 text-green-300"
              size={72}
              strokeWidth={1}
            />
            <p
              className="text-2xl text-green-600"
              style={{ fontFamily: "Lora, serif" }}
            >
              Your garden awaits its first bloom
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
