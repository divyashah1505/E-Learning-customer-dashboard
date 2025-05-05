// // React component
// import React, { useState } from 'react';
// import './PriceSection.css';
// import { Link } from 'react-router-dom';
// import combo1 from "../../IMAGES/E-learning-images/combo1.webp"
// import combo2 from "../../IMAGES/E-learning-images/combo2.webp"
// import combo3 from "../../IMAGES/E-learning-images/combo3.webp"


// const PriceSection = () => {
//   const [activeTab, setActiveTab] = useState('plans');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <section className="pt-40 pb-80" id="pricing">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Plans & Combos</h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="price-nav-wrap">
//               <div className="price--nav-inner">
//                 <nav>
//                   <div className="nav info-tabs">
//                     <Link
//                       className={`price--nav-item ${
//                         activeTab === 'plans' ? 'active' : ''
//                       }`}
//                       id="nav-contact-tab"
//                       onClick={() => handleTabChange('plans')}
//                     >
//                       Plans
//                     </Link>
//                     <Link
//                       className={`price--nav-item ${
//                         activeTab === 'combo' ? 'active' : ''
//                       }`}
//                       onClick={() => handleTabChange('combo')}
//                     >
//                       Combos
//                     </Link>
//                   </div>
//                 </nav>
//               </div>
//             </div>


//             <div className="tab-content price-content">
//               <div
//                 className={`tab-pane fade ${
//                   activeTab === 'plans' ? 'active show' : ''
//                 }`}
//                 id="plans"
//                 role="tabpanel"
//               >
//                 <div className="price-row">
//                   <PricingPlan
//                     name="Silver"
//                     price="Rs 99/-"
//                     features={['1 Month Validity', '10 Free Recipees', '']}
//                   />
//                   <PricingPlan
//                     name="Gold"
//                     price="Rs 499/-"
//                     features={[
//                       '6 Month Validity',
//                       '100 Free Recipees',
//                       '',
//                     ]}
//                     active={true}
//                   />
//                   <PricingPlan
//                     name="Diamond"
//                     price="Rs 799/-"
//                     features={[
//                       '1 Year Validity',
//                       'Unlimited Free Recipees',
//                       '',
//                     ]}
//                   />
//                 </div>
//               </div>
//               {/* Combo Images */}
//               <div
//                 className={`tab-pane fade ${
//                   activeTab === 'combo' ? 'active show' : ''
//                 }`}
//                 id="combo"
//                 role="tabpanel"
//               >
//                 <div className="combo-row">
//                   <ComboImage src={combo1} alt="Combo Image 1" />
//                   <ComboImage src={combo2} alt="Combo Image 2" />
//                   <ComboImage src={combo3} alt="Combo Image 3" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const PricingPlan = ({ name, price, features, active }) => {
//   return (
//     <div className={`col-md-4 ${active ? 'active' : ''}`}>
//       <div className="single-price-plan text-center">
//         <div className="single-price-top">
//           <h4>{name}</h4>
//           <span>{price}</span>
//         </div>
//         <div className="single-price-body">
//           <div className="price-list">
//             <ul>
//               {features.map((feature, index) => (
//                 <li key={index}>
//                   <span>
//                     {index < 4 ? (
//                       <i className="fa fa-check" aria-hidden="true"></i>
//                     ) : (
//                       <i className="fa fa-times" aria-hidden="true"></i>
//                     )}
//                   </span>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <button className="btn">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ComboImage = ({ src, alt }) => {
//   return (
//     <div className="col-lg-4 d-flex justify-content-center">
//       <div className="combo-image">
//         <img src={src} alt={alt} />
//       </div>
//     </div>
//   );
// };

// export default PriceSection;





// import axios from 'axios'; // Ensure axios is installed or use the native fetch API
// import './PriceSection.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { BASE_URL } from "../../../config/config";

// const PriceSection = () => {
//   const [activeTab, setActiveTab] = useState('plans');
//   const [combos, setCombos] = useState([]);

//   useEffect(() => {
//     const fetchCombos = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/activecombos`);
//         if (Array.isArray(response.data)) {
//           setCombos(response.data);
//         } else {
//           console.error("Expected an array for combos but got:", typeof response.data);
//           setCombos([]); // Set to an empty array to avoid errors
//         }
//       } catch (error) {
//         console.error("Failed to fetch combos", error);
//         setCombos([]); // Set to an empty array in case of an error
//       }
//     };

//     fetchCombos();
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <section className="pt-40 pb-80" id="pricing">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="section-title text-center">
//             <h2>Plans & Combos</h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="price-nav-wrap">
//               <div className="price--nav-inner">
//                 <nav>
//                   <div className="nav info-tabs">
//                     <Link
//                       className={`price--nav-item ${activeTab === 'plans' ? 'active' : ''}`}
//                       onClick={() => handleTabChange('plans')}
//                     >
//                       Plans
//                     </Link>
//                     <Link
//                       className={`price--nav-item ${activeTab === 'combo' ? 'active' : ''}`}
//                       onClick={() => handleTabChange('combo')}
//                     >
//                       Combos
//                     </Link>
//                   </div>
//                 </nav>
//               </div>
//             </div>

//             <div className="tab-content price-content">
//               <div
//                 className={`tab-pane fade ${activeTab === 'plans' ? 'show active' : ''}`}
//                 id="plans"
//                 role="tabpanel"
//               >
//                 <div className="price-row">
//                   <PricingPlan
//                     name="Silver"
//                     price="499"
//                     features={['1 Month Validity', '10 Free Recipes']}
//                   />
//                   <PricingPlan
//                     name="Gold"
//                     price="599"
//                     features={['6 Month Validity', '100 Free Recipes']}
//                     active={true}
//                   />
//                   <PricingPlan
//                     name="Diamond"
//                     price="699"
//                     features={['1 Year Validity', 'Unlimited Free Recipes']}
//                   />
//                 </div>
//               </div>

//               <div
//                 className={`tab-pane fade ${activeTab === 'combo' ? 'show active' : ''}`}
//                 id="combo"
//                 role="tabpanel"
//               >
//                 <div className="price-row">
//                   {combos.length > 0 ? (
//                     combos.map((combo, index) => (
//                       <PricingPlan
//                         key={combo.id || index} // Assuming your combo objects have an 'id' field
//                         name={combo.comboname}
//                         price={combo.comboprice}
//                         features={[combo.combodescription]} // Adjust according to your data structure
//                       />
//                     ))
//                   ) : (
//                     <p>No combos available at the moment.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const PricingPlan = ({ name, price, features, thumbnail, active, type }) => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate(`/plansdetail/${type}/${name}`, { state: { price, features, thumbnail } });
//   };

//   return (
//     <div className={`col-md-4 ${active ? 'active' : ''}`}>
//       <div className="single-price-plan text-center">
//         {thumbnail && (
//           <div className="combo-section-top">
//             <img src={thumbnail} alt={name} />
//             <h4>{name}</h4>
//           </div>
//         )}
//         {!thumbnail && (
//           <div className="single-price-top">
//             <h4>{name}</h4>
//           </div>
//         )}

//         <div className="combo-section-bottom">
//           <span>Rs {price}/-</span>
//           <ul className="price-list">
//             {features.map((feature, index) => (
//               <li key={index}>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//           {thumbnail && <span>{price}</span>}
//         </div>

//         <div className="get-started-button">
//           <button className="btn" onClick={handleGetStarted}>Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default PriceSection;import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { QRCodeCanvas } from 'qrcode.react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../config/config';
import './PriceSection.css';

const PriceSection = () => {
  const [activeTab, setActiveTab] = useState('plans');
  const [plans, setPlans] = useState([]);
  const [combos, setCombos] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/activecombos`, {
          headers: { "ngrok-skip-browser-warning": "true" }
        });
        setCombos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Failed to fetch combos', error);
        setCombos([]);
      }
    };

    const fetchPlans = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/active-plans`, {
          headers: { "ngrok-skip-browser-warning": "true" }
        });
        setPlans(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Failed to fetch plans', error);
        setPlans([]);
      }
    };

    fetchCombos();
    fetchPlans();
  }, []);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setShowQRCode(true);
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setShowQRCode(false);
  };

  return (
    <section className="pt-40 pb-80" id="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title text-center">
            <h2>Plans & Combos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="price-nav-wrap">
              <div className="price--nav-inner">
                <nav>
                  <div className="nav info-tabs">
                    <Link className={`price--nav-item ${activeTab === 'plans' ? 'active' : ''}`} onClick={() => handleTabChange('plans')}>
                      Plans
                    </Link>
                    <Link className={`price--nav-item ${activeTab === 'combo' ? 'active' : ''}`} onClick={() => handleTabChange('combo')}>
                      Combos
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            <div className="tab-content price-content">
            <div className={`tab-pane fade ${activeTab === 'plans' ? 'show active' : ''}`} id="plans" role="tabpanel">
  <div className="price-row row">
    {plans.length > 0 ? (
      plans.map((plan, index) => (
        <PricingPlan
          key={plan.planid || index}
          name={plan.planname}
          price={plan.planprice}
          features={plan.description ? plan.description.split(',') : []}
          onGetStarted={() =>
            handleGetStarted({
              name: plan.planname,
              price: plan.planprice,
              description: plan.description
            })
          }
        />
      ))
    ) : (
      <p>No plans available at the moment.</p>
    )}
  </div>
</div>



              <div className={`tab-pane fade ${activeTab === 'combo' ? 'show active' : ''}`} id="combo" role="tabpanel">
                <div className="price-row row">
                  {combos.length > 0 ? (
                    combos.map((combo, index) => (
                      <PricingPlan
                        key={combo.id || index}
                        name={combo.comboname}
                        price={combo.comboprice}
                        features={combo.combodescription ? combo.combodescription.split(',') : []}
                        onGetStarted={() =>
                          handleGetStarted({
                            name: combo.comboname,
                            price: combo.comboprice,
                            description: combo.combodescription
                          })
                        }
                      />
                    ))
                  ) : (
                    <p>No combos available at the moment.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={handleCloseModal} dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedPlan?.name}</h5>
          <p>Price: Rs {selectedPlan?.price}</p>
          {selectedPlan?.description && (
            <ul>
              {selectedPlan.description.split(',').map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>
          )}

          <div className="payment-method">
            <form>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-control" placeholder="MM/YY" />
              </div>
              <div className="mb-3">
                <label className="form-label">CVV</label>
                <input type="password" className="form-control" placeholder="CVV" />
              </div>
              <div className="mb-3">
                <Button variant="primary" onClick={handleCloseModal}>
                  Pay Now
                </Button>
              </div>
            </form>
          </div>

          {showQRCode && (
            <div className="qr-code-section text-center mt-4">
              <h5>Or Pay via UPI</h5>
              <QRCodeCanvas
                value={`upi://pay?pa=8000192167@axl&pn=Tapesh&am=${selectedPlan?.price}&cu=INR&tn=Payment for ${selectedPlan?.name}`}
                size={200}
                level="H"
                includeMargin={true}
              />
              <p className="mt-2">Scan the QR code to complete your payment</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

const PricingPlan = ({ name, price, features, onGetStarted }) => {
  return (
    <div className="col-md-4">
      <div className="single-price-plan text-center">
        <div className="single-price-top">
          <h4>{name}</h4>
        </div>
        <div className="combo-section-bottom">
          <span>Rs {price}/-</span>
          <ul className="price-list">
            {features.map((feature, index) => (
              <li key={index}>{feature.trim()}</li>
            ))}
          </ul>
        </div>
        <div className="get-started-button">
          <button className="btn" onClick={onGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
