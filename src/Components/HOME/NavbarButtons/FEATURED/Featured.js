// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../../../../config/config";
// import "../../PopularCategories/Category.css";
// import NavBar from "../../NAVBAR/NavBar";

// const Featured = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/recipes/featured`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch Featured Recipes");
//         }
//         const data = await response.json();
//         setRecipes(data);
//       } catch (error) {
//         console.error("Error fetching Featured Recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <>
//       <NavBar/>
//       <section className="categoryContainer" id="Featured">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="section-title text-center">
//               <h2>Featured(Trending) Recipe</h2>
//             </div>
//           </div>
//           <div className="row custom-row">
//             {recipes.map((recipe, index) => (
//               <div className="col-lg-4 col-md-4 margin-adjust" key={index}>
//                 <div className="single-blog-inner">
//                   <div className="post-image">
//                     <img src={recipe.Recipe_Thumbnail} alt={recipe.Recipe_Title} className="image-container" />
//                   </div>
//                   <div className="post-content">
//                     <div className="post-details">
//                       <div className="post-title">
//                         <h3>{recipe.Recipe_Title}</h3>
//                         <Link
//                           to={`/recipes/subcategory/${recipe.Sub_Category_id}/${recipe.Recipe_id}`} 
//                           className="btn cat-view-more-button"
//                           >
//                           View 
//                         </Link>
//                       </div>
//                     </div>

//                     <p>{recipe.Recipe_Description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Featured;
import { BASE_URL } from "../../../../config/config";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]); // Store fetched recipes
  const [error, setError] = useState(null); // Store error messages
  const [loading, setLoading] = useState(true); // Track loading state
  const [heartFilled, setHeartFilled] = useState({}); // Track heart status

  // Fetch featured recipes
  const fetchRecipes = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state
    try {
      const response = await fetch(`${BASE_URL}/recipes/featured`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch Featured Recipes. Status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Unexpected API response format:", data);
        setRecipes([]); // Default to empty array
      }
    } catch (error) {
      console.error("Error fetching Featured Recipes:", error);
      setError("Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Toggle heart button
  const toggleHeart = (recipeId) => {
    setHeartFilled((prevState) => ({
      ...prevState,
      [recipeId]: !prevState[recipeId],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="featuredRecipesContainer" id="featured-recipes">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title text-center">
            <h2>Featured Recipes</h2>
          </div>
        </div>

        {loading ? (
          <div className="text-center">
            <p>Loading Featured Recipes...</p>
          </div>
        ) : error ? (
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="error-message">{error}</p>
            </div>
          </div>
        ) : recipes.length === 0 ? (
          <div className="text-center">
            <p>No Featured Recipes Found.</p>
          </div>
        ) : (
          <Slider {...settings}>
            {recipes.map((recipe) => (
              <div key={recipe.Recipe_id}>
                <div className="single-recipe-inner">
                  <div className="post-image">
                    <img
                      src={recipe.Recipe_Thumbnail || "/default-image.jpg"}
                      alt={recipe.Recipe_Name || "Recipe Image"}
                      className="image-container"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-details">
                      <div className="post-title">
                        <h3>{recipe.Recipe_Name || "Untitled Recipe"}</h3>
                        <Link
                          to={`/recipe/${recipe.Recipe_id}`}
                          className="btn recipe-view-more-button"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => toggleHeart(recipe.Recipe_id)}
                          className={`heart-button ${heartFilled[recipe.Recipe_id] ? "filled" : ""}`}
                        >
                          ♥
                        </button>
                      </div>
                    </div>
                    <p>{recipe.Recipe_Description || "No description available."}</p>
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

export default FeaturedRecipes;
