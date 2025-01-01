import React from "react";
import "./Restaurants.css";

export default function Restaurants() {
    return (
        <>
            <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1>Restaurant Name</h1>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide carousel-rounded"
                    style={{ width: "33%" }}
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://placehold.co/600x400"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://placehold.co/600x400"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://placehold.co/600x400"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Row for the star rating and price */}
                <div className="row mt-4" style={{ width: "33%" }}>
                    <div className="col-6 text-center d-flex justify-content-center align-items-center">
                        {/* Star Rating */}
                        <img
                            src="/yellowstar.webp"
                            alt="Star"
                            className="d-block w-25 m-0 p-0"
                        />
                        <h4 className="mb-0 ml-2">4/5</h4>
                    </div>
                    <div className="col-6 text-center d-flex justify-content-center align-items-center">
                        {/* Price */}
                        <h4 className="mb-0">
                            $$$$
                        </h4>
                    </div>
                </div>

                {/* Italian Text */}
                <div className="row mt-4 mb-4" style={{ width: "33%" }}>
                    <h3 className="text-center text-info">Italian</h3>
                </div>

                {/* Buttons */}
                <div className="row mt-4" style={{ width: "33%" }}>
                    <div className="col-6 text-center d-flex justify-content-center align-items-center">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                width: "100%",
                            }}
                        >
                            NO
                        </button>
                    </div>
                    <div className="col-6 text-center d-flex justify-content-center align-items-center">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                width: "100%",
                            }}
                        >
                            YES
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
