// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import AddressForm from './components/AddressMapForm';
// import Maps from './components/Maps';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AddressForm />} />
//         <Route path="/map" element={<Maps />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// src/App.js


// import React from 'react';
// import AuthenticatedContent from './AuthenticatedContent';
// import Login from './Login';

// const App = () => {
//   return (
//     <div>
//       <Login />
//       <AuthenticatedContent />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Confirmation from './components/Payment/Confirmation'; // Create a Confirmation component
// import Payment from './components/Payment/Payment';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Payment />} />
//         <Route path="/confirmation" element={<Confirmation />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import PaymentButton from './PaymentButton';

const App = () => {
  return (
    <div>
      <h1>Make a Payment</h1>
      <PaymentButton amount={1} /> {/* Amount is in INR */}
    </div>
  );
};

export default App;

