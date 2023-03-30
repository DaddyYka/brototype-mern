import React from 'react';
import "../Styles/galleryimg.css";


const GalleryPic = () => {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="posters ">
            <div className="poster">
              <img className="img " src="/images/1.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img " src="/images/2.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img " src="/images/3.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/4.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/5.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/6.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/7.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/8.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/9.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/10.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/11.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/12.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/13.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/14.jpg" alt="" />
            </div>
            <div className="poster">
              <img className="img" src="/images/17.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// {images.map((image, i) => (
//     <img
//       key={i}
//       src={image}
//       style={{ width: "100%", display: "block" }}
//       alt=""
//     />
//   ))}
export default GalleryPic