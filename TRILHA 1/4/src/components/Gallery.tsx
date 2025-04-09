function Gallery() {
    const images = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
    ];
  
    return (
      <div className="gallery">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} className="galleryImage" />
        ))}
      </div>
    );
  }
  
  export default Gallery;
  