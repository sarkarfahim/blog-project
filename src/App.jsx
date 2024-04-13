import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ByCategoryPage from "./Pages/ByCategoryPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/bycategory/:categoryID" element={<ByCategoryPage/>}/>
                    <Route path="/details/:postID" element={<DetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;