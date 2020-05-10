import React, { useState, useCallback,useEffect, Fragment ,} from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway   } from "react-images";



function GalleryPhoto(props) {

  const [state , setPhotos] = useState(props)
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);


useEffect(() => {
  setPhotos(props)
 
}, [props])

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
      <Gallery photos={state.photos} onClick={openLightbox} />
      <ModalGateway className="galerie-inner" >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={state.photosFull.map(photo => ({
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