import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function ProductImageCarousel({ productImages }) {
  const productPhotosToRender = [
    {
      original: productImages[0],
    },
    {
      original: productImages[1],
    },
    {
      original: productImages[2],
    },
    {
      original: productImages[3],
    },
  ];

  return (
    <ReactImageGallery
      items={productPhotosToRender}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
    />
  );
}
