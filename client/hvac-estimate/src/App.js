// import Navbar from "./components/Navbar";
// import Home from './components/Home';
// import About from "./components/About";
// import Login from "./components/Login";

// const App = () => {
//   return (
//     <div className="center w85">
//       <Header />
//       <div className="ph3 pv1 background-gray">
//         <Routes>
//           <Route path="/" element={<LinkList/>} />
//           <Route
//             path="/create"
//             element={<CreateLink/>}
//           />
//           <Route path="/login" element={<Login/>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div >
//       <Navbar />
//       <Home />
//       <About />
//       <Login />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return <LinkList />;
  }
}
const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
