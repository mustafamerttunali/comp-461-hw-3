import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import UserOrders from "./components/UserOrders";
import GiveOrder from "./components/GiveOrder";
import ConfirmOrder from "./components/ConfirmOrder";
import AddNewProduct from "./components/AddNewProduct";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-orders" element={<UserOrders />} />
        <Route path="/give-order" element={<GiveOrder />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/admin/add-new-product" element={<AddNewProduct />} />

        {/* <Route path="/" element={<Dashboard />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route
              path="/datasets/create-dataset"
              element={
                <DatasetsContext.Provider value={datasetContext}>
                  <CreateDataset />
                </DatasetsContext.Provider>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/models" element={<NeuralNetworks />} />
            <Route path="/faq" element={<Faq />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
