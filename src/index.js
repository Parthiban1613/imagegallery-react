import React from "react";
import ReactDOM from "react-dom/client";

import one from "../src/assets/images/img1.jpg";
import two from "../src/assets/images/img2.jpg";
import three from "../src/assets/images/img3.jpg";
import four from "../src/assets/images/img4.jpg";
import five from "../src/assets/images/img5.jpg";
import six from "../src/assets/images/img6.jpg";
import seven from "../src/assets/images/img7.jpg";
import eight from "../src/assets/images/img8.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

let gallery = [
  { images: one, para: "Fluffy and Playful" },
  { images: two, para: "The Adventure Seeker" },
  { images: three, para: "The Food Lover" },
  { images: four, para: "The Loyal Guardian" },
  { images: five, para: "The Sleepy One" },
  { images: six, para: "The Overexcited Greeter" },
  { images: seven, para: "The Fetch Champion" },
  { images: eight, para: "The Drama King" },
];


function Image({ images, para }) {
  return (
    <div className="flex flex-col items-center justify-center p-2 border-solid border-black border-2">
      <img src={images} alt="Gallery Image" class="w-full h-80 rounded-lg shadow-lg" />
      <p className="mt-2 text-center font-semibold">{para}</p>
    </div>
  );
}

root.render(
  <div>
    <h1 className="text-center text-2xl font-bold mb-4">Image Gallery</h1>
    <div className="grid grid-cols-4 gap-4 items-center justify-center min-h-screen bg-gray-100 p-4">
      {gallery.map((item, index) => (
        <Image key={index} images={item.images} para={item.para} />
      ))}
    </div>
  </div>
);
