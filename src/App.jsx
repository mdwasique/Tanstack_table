import BasicTable from "./components/BasicTable";

const App = () => {
  return (
    <div>
      <BasicTable />
    </div>
  );
};

export default App;

// Outlet Logic

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <Navbar />
//               <Sidebar />
//               <Outlet />
//             </div>
//           }
//         >
//           <Route path="/" element={<Home />} />
//           {/* Add more routes with sidebar and navbar */}
//         </Route>

//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         {/* Add more routes without sidebar and navbar */}

//       </Routes>
//     </Router>
//   );
// };

// export default App;
