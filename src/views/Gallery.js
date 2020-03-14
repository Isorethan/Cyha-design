import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway   } from "react-images";


let photos
function GalleryPhoto(props) {
 

  


  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

 
  

 




  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="galerie">
      <Gallery photos={props.photos} onClick={openLightbox} />
      <ModalGateway className="galerie-inner" >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.photos.map(photo => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title
              }))}
             

            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryPhoto ;