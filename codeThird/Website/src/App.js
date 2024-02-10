import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { datsAction, store } from "./store/index.js";
import { DUMMY_TEXT } from "./store/Dummy.js";
import Notification from "./notificatioona/Notification.js";

const App = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.dataSlice.notification);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(
        datsAction.display({
          status: "pending",
          title: "Sending",
          message: "Sending ur data",
        })
      );
      const response = await fetch(
        "https://gpanas-6b84b-default-rtdb.firebaseio.com/drone.json",
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Sending data failed!");
      }

      const data =await response.json();

      console.log(data);
      DUMMY_TEXT.length = 0;
      data.forEach((item)=>{
        DUMMY_TEXT.push(data[0])  
      })
      

      dispatch(
        datsAction.display({
          status: "success",
          title: "Success!",
          message: "Data Sent Successfuly!",
        })
      );
    };

    fetchData().catch((error) => {
      dispatch(
        datsAction.display({
          status: "error",
          title: "Error!",
          message: "Sending Data failed!",
        })
      );
    });

    const interva =setInterval(fetchData, 10000);

    return () => clearInterval(interva);
  }, [DUMMY_TEXT, dispatch]);
  return (
    <BrowserRouter>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Sidebar>
        <Routes class="">
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/*<Route path="/comment" element={<Comment />} />*/}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
