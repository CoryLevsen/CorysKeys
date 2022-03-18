import { render } from "react-dom";
// import ReactDOM from 'react-dom';

// https://reactrouter.com/docs/en/v6/getting-started/installation
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import LoginComponent from "./components/LoginComponent";
import DashboardComponent from "./components/DashboardComponent";
import Error404Component from "./components/Error404Component";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProductsPanel from "./components/AllProducts";
import AddProductsPanel from "./components/AddProducts";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginComponent />} />
      <Route path="dashboard" element={<DashboardComponent />} >
        <Route index element={<AllProductsPanel title="All Products"/>} />
        <Route path="add" element={<AddProductsPanel title="Add Products"/>} />
      </Route>
      <Route path="*" element={<Error404Component />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);