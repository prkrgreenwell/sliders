import book1 from "./assets/img/images.jpg";
import book2 from "./assets/img/images (1).jpg";
import book3 from "./assets/img/images (2).jpg";
import book4 from "./assets/img/images (3).jpg";
import book5 from "./assets/img/images(5).jpg";
import book6 from "./assets/img/images(6).jpg";

import { ImageSlider } from "./ImageSlider";

const IMAGES = [book1, book2, book3, book4, book5, book6];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
