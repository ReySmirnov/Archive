import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Job from "./pages/Job";
import Company from "./pages/Company";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/:page'} element={<Main/>}/>
                <Route path={'/job/:id'} element={<Job/>}/>
                <Route path={'/company/:id'} element={<Company/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

//    /job/safetywing-data-analyst

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
