import React from "react";
import { useSelector } from "react-redux";
import '../../styles/loader.scss'
const Perloader = () => {
    const { loading } = useSelector((state) => state.loading);

    if (!loading) return null;

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex justify-content-center align-items-center"
            style={{ zIndex: 9999 }}
        >
            <span className="loader"></span>
        </div>
    );
};

export default Perloader;
