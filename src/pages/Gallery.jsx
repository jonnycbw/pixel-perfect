import Gallery from "react-grid-gallery";

const GalleryPage = () => {
  const images = [
    {
      src: "https://www.theboltonnews.co.uk/resources/images/13280089?type=responsive-gallery-fullscreen",
      thumbnail:
        "https://www.theboltonnews.co.uk/resources/images/13280089?type=responsive-gallery-fullscreen",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: false,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9c94ZMmEpGBGImQfRHEMqO6WR469-DCJ6dMBV-7iLn6p9YslUwlpZHYdR3rJbVCpGrY&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9c94ZMmEpGBGImQfRHEMqO6WR469-DCJ6dMBV-7iLn6p9YslUwlpZHYdR3rJbVCpGrY&usqp=CAU",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sBM9QKH57uhXhNAb8HG4J7uViE-JypKm70NRk1OtuL580msKB9UNw45wiaqnI93feCM&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sBM9QKH57uhXhNAb8HG4J7uViE-JypKm70NRk1OtuL580msKB9UNw45wiaqnI93feCM&usqp=CAU",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gxZ5byrrPtI396isJTAzVfoUUxG8fmmQOQ&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gxZ5byrrPtI396isJTAzVfoUUxG8fmmQOQ&usqp=CAU",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4kFNYzxKzoNnIZ5xzQ5yYSr1Ehvx6_qEQ&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4kFNYzxKzoNnIZ5xzQ5yYSr1Ehvx6_qEQ&usqp=CAU",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJro0pgroOjQ5tR3MP4gph9rUvpRHg-OxdQ&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJro0pgroOjQ5tR3MP4gph9rUvpRHg-OxdQ&usqp=CAU",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ];

  return (
    <div style={{minHeight:"75vh", marginTop:"50px", padding:"50px 100px"}}>
      <h4>Gallery</h4>
      <Gallery style={{ maxHeight:"50px"}} images={images} />
    </div>
  );
};

export default GalleryPage;
