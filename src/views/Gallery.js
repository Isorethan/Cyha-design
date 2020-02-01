import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway   } from "react-images";

const CustomHeader = ({ innerProps, isModal }) => isModal ? (
  <div {...innerProps}>
    Testing stuff
  </div>
) : null;
let photos
function GalleryPhoto(props) {
 
  if (props.location) {
    photos =props.location.state.photos ;
  }
  console.log(photos);
  


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
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway className="galerie-inner" >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title
              }))}
              components={{ Header: CustomHeader }}

            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryPhoto ;