// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import "./Category.css"; 

// const SubcategoryList = () => {
//   const { categoryId } = useParams();
//   const [subcategories, setSubcategories] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   // Removed unused state
//   // const [selectedRecipe, setSelectedRecipe] = useState(null);

//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/subcategories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch subcategories");
//         }
//         const data = await response.json();
//         setSubcategories(data);
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//       }
//     };

//     fetchSubcategories();
//   }, [categoryId]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/recipes/${categoryId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch recipes");
//         }
//         const data = await response.json();
//         setRecipes(data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, [categoryId]);

//   return (
//     <section className="categoryContainer" id="subcategories">
//       <div className="container">
//         <div className="row">
//           {subcategories.map((subcategory) => (
//             <div className="col-lg-4 col-md-4 margin-adjust" key={subcategory.Sub_Category_id}>
//               <div className="single-blog-inner">
//                 <div className="post-image">
//                   <img src={subcategory.Sub_Category_Thumbnail} alt={subcategory.Sub_Category_Name} className="image-container" />
//                 </div>
//                 <div className="post-content">
//                   <div className="post-details">
//                     <div className="post-title">
//                       <h3>{subcategory.Sub_Category_Name}</h3>
//                       <Link to={`/subcategory/${subcategory.Sub_Category_id}`} className="btn view-btn">
//                       View Recipes
//                     </Link>
//                     </div>
//                       <p>{subcategory.Sub_Category_Description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="row">
//           {recipes.map((recipe) => (
//             <div className="col-lg-4 col-md-4 margin-adjust" key={recipe.Recipe_id}>
//               <div className="single-blog-inner">
//                 <div className="post-image">
//                   <img src={recipe.Recipe_Thumbnail} alt={recipe.Recipe_Title} className="image-container" />
//                 </div>
//                 <div className="post-content">
//                   <div className="post-details">
//                     <div className="post-title">
//                       <h3>{recipe.Recipe_Title}</h3>
//                       <p>{recipe.Recipe_Description}</p>
//                     </div>
                    
//                     <Link to="/home2" className="btn view-btn">
//                       View Recipe Details
//                     </Link>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Removed selected recipe details section */}
//     </section>
//   );
// };

// export default SubcategoryList;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import "./Category.css"; // Assuming you want to use the same CSS for Subcategory as well

// const SubCategory = () => {
//   const { categoryId } = useParams();
//   const [subcategories, setSubcategories] = useState([]);
//   const [categoryName, setCategoryName] = useState("");

//   useEffect(() => {
//     const fetchCategoryName = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch categories`);
//         }
//         const categories = await response.json();

//         const category = categories.find(cat => cat.Category_id === parseInt(categoryId, 10));
//         if (category) {
//           setCategoryName(category.Category_Name);
//         } else {
//           console.log(`Category with ID: ${categoryId} not found`);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     if (categoryId) {
//       fetchCategoryName();
//     } else {
//       console.log("categoryId is undefined or null");
//     }
//   }, [categoryId]);

//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/subcategories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch subcategories");
//         }
//         const data = await response.json();
//         setSubcategories(data);
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//       }
//     };

//     fetchSubcategories();
//   }, [categoryId]);

//   return (
//     <section className="categoryContainer" id="subcategories">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Subcategories of {categoryName}</h2>
//           </div>
//         </div>
//         <div className="row custom-row">
//           {subcategories.length > 0 ? (
//             subcategories.map((subcategory) => (
//               <div className="col-lg-4 col-md-4 margin-adjust" key={subcategory.Sub_Category_id}>
//                 <div className="single-blog-inner">
//                   <div className="post-image">
//                     <img src={subcategory.Sub_Category_Thumbnail} alt={subcategory.Sub_Category_Name} className="image-container" />
//                   </div>
//                   <div className="post-content">
//                     <div className="post-details">
//                       <div className="post-title">
//                         <h3>{subcategory.Sub_Category_Name}</h3>
//                       </div>
//                       <Link to={`/subcategory/${subcategory.Sub_Category_id}/recipes`} className="btn cat-view-more-button">
//                         View Recipes
//                       </Link>
//                     </div>
//                     <p>{subcategory.Sub_Category_Description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center">
//               <p>No subcategories added.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubCategory;



// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import Modal from "../MODAL/Modal"; // Make sure the path is correct
// import "./Category.css"; // Assuming you want to use the same CSS for Subcategory as well

// const SubCategory = () => {
//   const { categoryId } = useParams();
//   const [subcategories, setSubcategories] = useState([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchCategoryName = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch categories`);
//         }
//         const categories = await response.json();

//         const category = categories.find(cat => cat.Category_id === parseInt(categoryId, 10));
//         if (category) {
//           setCategoryName(category.Category_Name);
//         } else {
//           console.log(`Category with ID: ${categoryId} not found`);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     if (categoryId) {
//       fetchCategoryName();
//     } else {
//       console.log("categoryId is undefined or null");
//     }
//   }, [categoryId]);

//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/subcategories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch subcategories");
//         }
//         const data = await response.json();
//         setSubcategories(data);
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//       }
//     };

//     fetchSubcategories();
//   }, [categoryId]);

//   const handleViewRecipesClick = (e, subCategoryId) => {
//     e.preventDefault();
//     if (!localStorage.getItem("token")) {
//       setIsModalOpen(true);
//     } else {
//       <Link to= {'/recipes/subcategory/${subCategoryId}'}> </Link>
//     }
//   };

//   return (
//     <section className="categoryContainer" id="subcategories">
//       <Modal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         message="Please Sign-In to view Recipes."
//       />
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Subcategories of {categoryName}</h2>
//           </div>
//         </div>
//         <div className="row custom-row">
//           {subcategories.length > 0 ? (
//             subcategories.map((subcategory) => (
//               <div className="col-lg-4 col-md-4 margin-adjust" key={subcategory.Sub_Category_id}>
//                 <div className="single-blog-inner">
//                   <div className="post-image">
//                     <img src={subcategory.Sub_Category_Thumbnail} alt={subcategory.Sub_Category_Name} className="image-container" />
//                   </div>
//                   <div className="post-content">
//                     <div className="post-details">
//                       <div className="post-title">
//                         <h3>{subcategory.Sub_Category_Name}</h3>
//                       </div>
//                       <button onClick={(e) => handleViewRecipesClick(e, subcategory.Sub_Category_id)} className="btn cat-view-more-button">
//                         View Recipes
//                       </button>
//                     </div>
//                     <p>{subcategory.Sub_Category_Description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center">
//               <p>No subcategories added.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubCategory;






// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { BASE_URL } from "../../../config/config";
// import Modal from "../MODAL/Modal";
// import "./Category.css";

// const SubCategory = () => {
//   const { categoryId } = useParams();
//   const [subcategories, setSubcategories] = useState([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchCategoryName = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/viewcategories`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch categories`);
//         }
//         const categories = await response.json();

//         const category = categories.find(cat => cat.Category_id === parseInt(categoryId, 10));
//         if (category) {
//           setCategoryName(category.Category_Name);
//         } else {
//           console.log(`Category with ID: ${categoryId} not found`);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     if (categoryId) {
//       fetchCategoryName();
//     } else {
//       console.log("categoryId is undefined or null");
//     }
//   }, [categoryId]);

//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/subcategories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch subcategories");
//         }
//         const data = await response.json();
//         setSubcategories(data);
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//       }
//     };

//     if (categoryId) {
//       fetchSubcategories();
//     } else {
//       console.log("categoryId is undefined or null");
//     }
//   }, [categoryId]);

//   const handleViewRecipesClick = (e, subCategoryId) => {
//     e.preventDefault();
//     if (!localStorage.getItem("token")) {
//       setIsModalOpen(true);
//     } else {
//       window.location.href = `/recipes/subcategory/${subCategoryId}`;
//     }
//   };

//   return (
//     <section className="categoryContainer" id="subcategories">
//       <Modal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         message="Please Sign-In to view Recipes."
//       />
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Subcategories of {categoryName}</h2>
//           </div>
//         </div>
//         <div className="row custom-row">
//           {subcategories.length > 0 ? (
//             subcategories.map((subcategory) => (
//               <div className="col-lg-4 col-md-4 margin-adjust" key={subcategory.Sub_Category_id}>
//                 <div className="single-blog-inner">
//                   <div className="post-image">
//                     <img src={subcategory.Sub_Category_Thumbnail} alt={subcategory.Sub_Category_Name} className="image-container" />
//                   </div>
//                   <div className="post-content">
//                     <div className="post-details">
//                       <div className="post-title">
//                         <h3>{subcategory.Sub_Category_Name}</h3>
//                       </div>
//                       <button onClick={(e) => handleViewRecipesClick(e, subcategory.Sub_Category_id)} className="btn cat-view-more-button">
//                         View Recipes
//                       </button>
//                     </div>
//                     <p>{subcategory.Sub_Category_Description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center">
//               <p>No subcategories added.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubCategory;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import Modal from "../MODAL/Modal";
import "./Category.css";
import NavBar from "../NAVBAR/NavBar";

const SubCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [subcategories, setSubcategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redirectRoute, setRedirectRoute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch category name by categoryId
  useEffect(() => {
    let isMounted = true;
    const fetchCategoryName = async () => {
      try {
        const response = await fetch(`${BASE_URL}/viewcategories`, {
          headers: {
            "ngrok-skip-browser-warning": "true", // Add this header to bypass Ngrok warning page
          },
        });
    
        console.log("Raw Response:", response); // Debugging: Log response
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const textResponse = await response.text(); // Log actual response
          console.error("Received non-JSON response:", textResponse);
          throw new Error("Invalid response format. Expected JSON but received non-JSON content.");
        }
    
        const categories = await response.json();
        console.log("Parsed Categories:", categories); // Debugging
    
        const category = categories.find((cat) => cat.Category_id === parseInt(categoryId, 10));
        if (category) {
          setCategoryName(category.Category_Name);
        } else {
          setError(`Category with ID: ${categoryId} not found`);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error.message || "Failed to fetch categories. Please try again.");
      }
    };
    
    
  
    if (categoryId) fetchCategoryName();
    return () => {
      isMounted = false;
    };
  }, [categoryId]);
  

  // Fetch subcategories by categoryId
  useEffect(() => {
    let isMounted = true;

    const fetchSubcategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/subcategories/${categoryId}`, {
          headers: { "ngrok-skip-browser-warning": "true" },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch subcategories`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format. Expected JSON but received non-JSON content.");
        }

        const data = await response.json();
        if (isMounted) setSubcategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        if (isMounted) setError("Failed to fetch subcategories. Please try again.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (categoryId) fetchSubcategories();
    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  // Handle navigation to recipes or show login modal
  const handleViewRecipesClick = (e, subCategoryId) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      setRedirectRoute(`/recipes/subcategory/${subCategoryId}`);
      setIsModalOpen(true); // Open modal for login prompt
    } else {
      navigate(`/recipes/subcategory/${subCategoryId}`);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <>
        <NavBar />
        <div className="loading-container">
          <p>Loading subcategories...</p>
        </div>
      </>
    );
  }

  // Show error message
  if (error) {
    return (
      <>
        <NavBar />
        <div className="error-container">
          <p>{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <section className="categoryContainer mt-lg-5" id="subcategories">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          redirectTo={redirectRoute} // Pass the redirect route to Modal
          message="Please Sign-In to view Recipes."
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="section-title text-center">
              <h2>Subcategories of {categoryName}</h2>
            </div>
          </div>
          <div className="row custom-row">
            {subcategories.length > 0 ? (
              subcategories.map((subcategory) => (
                <div
                  className="col-lg-4 col-md-4 margin-adjust"
                  key={subcategory.Sub_Category_id}
                >
                  <div className="single-blog-inner">
                    <div className="post-image">
                      <img
                        src={subcategory.Sub_Category_Thumbnail}
                        alt={subcategory.Sub_Category_Name}
                        className="image-container"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-details">
                        <div className="post-title">
                          <h3>{subcategory.Sub_Category_Name}</h3>
                          <button
                            onClick={(e) =>
                              handleViewRecipesClick(e, subcategory.Sub_Category_id)
                            }
                            className="btn cat-view-more-button"
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <p>{subcategory.Sub_Category_Description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No subcategories added.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubCategory;
