// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LogIn from './Components/LOGIN/LogIn';
// import SignUp from './Components/SIGNUP/SignUp';
// import Home from './Components/HOME/Home';
// import Home2 from './Components/HOME2/Home2';
// import Category from './Components/HOME/PopularCategories/Category';
// import Subcategory from './Components/HOME/PopularCategories/Subcategory';
// import Favorites from './Components/HOME/NavbarButtons/FAVORITES/Favorites';
// // import Recipes from './Components/HOME/PopularCategories/Recipe';

// // Import the GIF image
// import loadingGif from './Components/IMAGES/giphy4.gif';
// import Blog from './Components/HOME/Blogs/Blog';
// import Features from './Components/HOME/NavbarButtons/FEATURED/Featured';
// import Recipes from './Components/HOME/PopularCategories/ViewRecipes';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating an API call or any other async operation
//     const timer = setTimeout(() => {
//       setIsLoading(false); // Set loading state to false after some time (simulating data loading)
//     }, 2000); // Adjust the time as per your requirement

//     return () => clearTimeout(timer); // Cleanup function
//   }, []);

//   return (
//     <Router>
//       {isLoading ? (
//         <div style={{ minHeight: '100vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
//           {/* Display the loading GIF */}
//           <img src={loadingGif} alt="Loading..." style={{ width: '100px', height: '100px' }} />
//           <span>Please wait while we set things up for you!</span>
//         </div>
//       ) : (
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<LogIn />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/blog" element={<Blog/>} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/featured-videos" element={<Features/>} />
//             <Route path="/home2" element={<Home2 />} />
//             <Route path="/category/categoryId" element={<Category />} />
//             <Route path="/subcategory/:categoryId" element={<Subcategory />} />
//             <Route path="/subcategory/:subCategoryId/recipes" element={<Recipes />} />

//           </Routes>
//         </div>
//       )}
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LogIn from './Components/LOGIN/LogIn';
// import SignUp from './Components/SIGNUP/SignUp';
// import Home from './Components/HOME/Home';
// import Category from './Components/HOME/PopularCategories/Category';
// import SubCategory from './Components/HOME/PopularCategories/Subcategory'; 
// import Recipes from './Components/HOME/REPICES/RecipeDetails' 
// import Favorites from './Components/HOME/NavbarButtons/FAVORITES/Favorites';
// import PlanDetails from './Components/HOME/PRICE/plansdetail';
// // Import the GIF image
// import loadingGif from './Components/IMAGES/giphy4.gif';
// import PriceSection from './Components/HOME/PRICE/PriceSection';
// import Blog from './Components/HOME/Blogs/Blog';
// import Features from './Components/HOME/NavbarButtons/FEATURED/Featured';
// import ViewRecipes from './Components/HOME/PopularCategories/ViewRecipes';
// import RecipeDetails from './Components/HOME/REPICES/RecipeDetails';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false); 
//     }, 2000); 

//     return () => clearTimeout(timer); 
//   }, []);

//   return (
//     <Router>
//       {isLoading ? (
//         <div style={{ minHeight: '100vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
//           <img src={loadingGif} alt="Loading..." style={{ width: '100px', height: '100px' }} />
//           <span>Please wait while we set things up for you!</span>
//         </div>
//       ) : (
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<LogIn />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/blog" element={<Blog/>} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/featured-videos" element={<Features/>} />
//             <Route path="/Recipes" element={<Recipes />} />
//             <Route path="/category/categoryId" element={<Category />} />
//             <Route path="/subcategory/:categoryId" element={<SubCategory />} />

//             <Route path="/recipes/subcategory/:subcategoryId" element={<ViewRecipes/>} />
//             <Route path="/recipes/subcategory/:subcategoryId/:recipeId" element={<RecipeDetails/>} />
//           </Routes>
//         </div>
//       )}
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LOGIN/LogIn';
import SignUp from './Components/SIGNUP/SignUp';
import Home from './Components/HOME/Home';
import Category from './Components/HOME/PopularCategories/Category';
import SubCategory from './Components/HOME/PopularCategories/Subcategory'; 
import Recipes from './Components/HOME/REPICES/RecipeDetails'; 
import Favorites from './Components/HOME/NavbarButtons/FAVORITES/Favorites';
import PlanDetails from './Components/HOME/PRICE/plansdetail';
import loadingGif from './Components/IMAGES/giphy4.gif';
import PriceSection from './Components/HOME/PRICE/PriceSection';
import Blog from './Components/HOME/Blogs/Blog';
import Features from './Components/HOME/NavbarButtons/FEATURED/Featured';
import ViewRecipes from './Components/HOME/PopularCategories/ViewRecipes';
import RecipeDetails from './Components/HOME/REPICES/RecipeDetails';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/featured`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',  // Ensure CORS is handled properly
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Data:', data);  // For debugging
          setFeaturedRecipes(data);  // Store the fetched data
          setIsLoading(false);
        } else {
          setError('Failed to fetch data');
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img src={loadingGif} alt="Loading..." style={{ width: '100px', height: '100px' }} />
          <span>Please wait while we set things up for you!</span>
        </div>
      ) : error ? (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span>{error}</span>
        </div>
      ) : (
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/featured-videos" element={<Features />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/category/categoryId" element={<Category />} />
            <Route path="/subcategory/:categoryId" element={<SubCategory />} />
            <Route path="/recipes/subcategory/:subcategoryId" element={<ViewRecipes />} />
            <Route path="/recipes/subcategory/:subcategoryId/:recipeId" element={<RecipeDetails />} />
            <Route path="/price-section" element={<PriceSection />} />
            <Route path="/plan-details" element={<PlanDetails />} />
          </Routes>

          {/* Optional: Display featured recipes on the homepage */}
          <div>
            <h2>Featured Recipes</h2>
            {featuredRecipes.length === 0 ? (
              <p>No featured recipes found</p>
            ) : (
              <ul>
                {featuredRecipes.map((recipe) => (
                  <li key={recipe.Recipe_id}>
                    <h3>{recipe.Recipe_Title}</h3>
                    <p>{recipe.Recipe_Description}</p>
                    <img src={recipe.Recipe_Thumbnail} alt={recipe.Recipe_Title} style={{ width: '100px' }} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
