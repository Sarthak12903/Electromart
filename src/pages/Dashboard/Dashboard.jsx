import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Service from "../../components/Service/Service";
import ProductDash from "../../components/ProductDash/ProductDash";
import Footer from "../../components/Footer/Footer";

const images = [
  {
    number: 1,
    path: "/Carousel /Apple.png",
    name: "iPhone 16 Pro",
    redirect: "iphone",
  },
  {
    number: 2,
    path: "/Carousel /Airpods 3 Pro.png",
    name: "Apple AirPods 3 Pro",
    redirect: "airpods",
  },
  {
    number: 3,
    path: "/Carousel /Apple Watch.png",
    name: "Apple Watch Ultra 3",
    redirect: "watch",
  },
  {
    number: 4,
    path: "/Carousel /Galaxy S24U.png",
    name: "Samsung Galaxy S24 Ultra",
    redirect: "s24",
  },
  {
    number: 5,
    path: "/Carousel /Samsung buds.png",
    name: "Samsung Buds 3",
    redirect: "buds3",
  },
];

function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <>
      {" "}
      <section className="relative h-[50vh]  overflow-hidden shadow-md sm:w-[100%]">
        <div
          className="flex h-full w-full transition-transform   duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((slide) => (
            <Link
              key={slide.number}
              to={`/product?type=${slide.redirect}`}
              className="w-full flex-shrink-0"
            >
              <img
                src={slide.path}
                alt={slide.name}
                className="h-full sm:w-screen "
              />
            </Link>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white transition-all hover:bg-black/40"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white transition-all hover:bg-black/40"
          aria-label="Next slide"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentIndex === slideIndex
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            ></button>
          ))}
        </div>
      </section>
      <Service />
      <ProductDash />
    </>
  );
}

export default Dashboard;
