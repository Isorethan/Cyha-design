import React, { useState, useCallback, Fragment } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway   } from "react-images";


let photos ;
function GalleryPhoto(props) {
 photos = props.photos ;

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
    <Fragment>
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
             

            />
          </Modal>
        ) : null}
      </ModalGateway>
      </Fragment>
  );
}

export default GalleryPhoto ;