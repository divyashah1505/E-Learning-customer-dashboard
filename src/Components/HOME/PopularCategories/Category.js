// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import "./PopularCategories.css"; // Import your CSS file for the Category component

// const Category = () => {
//   const [isTransparent, setTransparent] = useState(true);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setTransparent(scrollPosition === 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="categoryContainer" id='categories'>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Categories for your Cooking Journey</h2>
//           </div>
//         </div>
//         <div className="row custom-row">
//           {categories.map((category, index) => (
//             <div className="col-lg-4 col-md-4 margin-adjust" key={index}>
//               <div className="single-blog-inner">
//                 <div className="post-image">
//                   <img src={category.Category_Thumbnail} alt={category.Category_Name} className="image-container" />
//                   {/* <div className="rating-box">
//                     <p>Category</p>
//                   </div> */}
//                 </div>
//                 <div className="post-content">
//                   <div className="post-details">
//                     <div className="post-title">
//                       <h3>{category.Category_Name}</h3>
//                     </div>
//                     <Link
//                       to={`/subcategory/${category.Category_ID}`}
//                       className="btn view-btn">
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import "./PopularCategories.css"; // Import your CSS file for the Category component

// const Category = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="categoryContainer" id='categories'>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Categories for your Cooking Journey</h2>
//           </div>
//         </div>
//         <div className="row custom-row">
//           {categories.map((category, index) => (
//             <div className="col-lg-4 col-md-4 margin-adjust" key={index}>
//               <div className="single-blog-inner">
//                 <div className="post-image">
//                   <img src={category.Category_Thumbnail} alt={category.Category_Name} className="image-container" />
//                   {/* <div className="rating-box">
//                     <p>Category</p>
//                   </div> */}
//                 </div>
//                 <div className="post-content">
//                   <div className="post-details">
//                     <div className="post-title">
//                       <h3>{category.Category_Name}</h3>
//                     </div>
//                     <Link
//                       to={`/subcategory/${category.Category_ID}`}
//                       className="btn view-btn">
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;







// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import "./Category.css"; 

// const Category = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="categoryContainer" id="categories">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Categories for your Cooking Journey</h2>
//           </div>
//         </div>
//         <div className="row custom-row">
//           {categories.map((category, index) => (
//             <div className="col-lg-4 col-md-4 margin-adjust" key={index}>
//               <div className="single-blog-inner">
//                 <div className="post-image">
//                   <img src={category.Category_Thumbnail} alt={category.Category_Name} className="image-container" />
//                 </div>
//                 <div className="post-content">
//                   <div className="post-details">
//                     <div className="post-title">
//                       <h3>{category.Category_Name}</h3>
//                     </div>
//                       <Link
//                         to={`/subcategory/${category.Category_id}`} 
//                         className="btn cat-view-more-button"
//                       >
//                         View 
//                       </Link>
//                   </div>

//                   <p>{category.Category_Description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;














// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper/modules';
// import { BASE_URL } from "../../../config/config";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "./Category.css";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Assuming slidesPerView = 3 as initial state based on your breakpoint settings
//     // Adjust this value based on your initial render settings or screen width for accuracy
//     const initialSlidesPerView = 3;
//     if (categories.length) {
//       const initialProgress = (initialSlidesPerView / categories.length) * 100;
//       setProgress(Math.min(100, initialProgress));
//     }
//   }, [categories]);

//   const updateProgress = (swiper) => {
//     // Adjust the calculation for progress based on the total slides and slides per view
//     const currentIndex = swiper.activeIndex + swiper.params.slidesPerView;
//     const maxIndex = swiper.slides.length;
//     const progressPercentage = (currentIndex / maxIndex) * 100;
//     setProgress(progressPercentage);
//   };

//   return (
//     <>
//     <section className="categoryContainer" id="categories">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Categories for your Cooking Journey</h2>
//           </div>
//         </div>
//         <Swiper
//           className="mySwiper"
//           modules={[Navigation, Pagination, A11y]}
//           spaceBetween={55}
//           slidesPerView={3}
//           navigation
//           onSlideChange={updateProgress}
//           breakpoints={{
//             280: {
//               slidesPerView: 1,
//               spaceBetween: 55,
//             },

//             640: {
//               slidesPerView: 1,
//               spaceBetween: 55,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 55,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 55,
//             },
//           }}
//         >
//           {categories.map((category, index) => (
//             <SwiperSlide key={index}>
//               <div className="single-blog-inner">
//                 <div className="post-image">
//                   <img src={category.Category_Thumbnail} alt={category.Category_Name} className="image-container" />
//                 </div>
//                 <div className="post-content">
//                   <div className="post-details">
//                     <div className="post-title">
//                       <h3>{category.Category_Name}</h3>
//                     </div>
//                     <Link
//                       to={`/subcategory/${category.Category_id}`} className="btn cat-view-more-button"
//                     >
//                       View 
//                     </Link>
//                   </div>
//                   <p>{category.Category_Description}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="progress-bar-container">
//           <div className="progress" style={{ width: `${progress}%` }}></div>
//         </div>

//     </section>
//     </>
//   );
// };
// export default Category;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BASE_URL } from "../../../config/config";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

// Custom next arrow for the slider
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} custom-arrow next-arrow`} onClick={onClick} />;
}

// Custom previous arrow for the slider
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} custom-arrow prev-arrow`} onClick={onClick} />;
}

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/viewcategories`, {
          headers: {
            "ngrok-skip-browser-warning": "true" // If using Ngrok
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Expected an array but got:", data);
          setError("Unexpected data format.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(`Failed to fetch categories: ${error.message}`);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="categoryContainer" id="categories">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title text-center">
            <h2>Categories for your Cooking Journey</h2>
          </div>
        </div>

        {error ? (
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category.Category_id}>
                <div className="single-blog-inner">
                  <div className="post-image">
                    <img 
                      src={category.Category_Thumbnail} 
                      alt={category.Category_Name} 
                      className="image-container" 
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-details">
                      <div className="post-title">
                        <h3>{category.Category_Name}</h3>
                        <Link 
                          to={`/subcategory/${category.Category_id}`} 
                          className="btn cat-view-more-button"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                    <p>{category.Category_Description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Category;
