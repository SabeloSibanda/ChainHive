import React from "react";
import LayoutFront from "../components/layout/LayoutFront";

const Explore = () => {

    const data = [
        {
            id: 1,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "1.jpg",
            avatar: "1.jpg",
        },
        {
            id: 2,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "2.jpg",
            avatar: "2.jpg",
        },
        {
            id: 3,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "3.jpg",
            avatar: "3.jpg",
        },
        {
            id: 4,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "4.jpg",
            avatar: "4.jpg",
        },
        {
            id: 5,
            title: "Jon Doe",
            price: 0.55,
            currentBid: 0.55,
            img: "5.jpg",
            avatar: "5.jpg",
        },
        {
            id: 6,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "6.jpg",
            avatar: "6.jpg",
        },
        {
            id: 7,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "7.jpg",
            avatar: "7.jpg",
        },
        {
            id: 8,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "8.jpg",
            avatar: "8.jpg",
        },
        {
            id: 9,
            title: "Jon Doe",
            price: 0.15,
            currentBid: 0.15,
            img: "9.jpg",
            avatar: "9.jpg",
        },
    ];

    return (
        <>
             <LayoutFront
                headTitle="Explore"
                pageTitle="Explore"
                pageTitleSub={"ChainHive Explore page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Payments"}
            >
                <div className="explore section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
                            <div className="filter-sidebar">
                                <div className="filter-sidebar-content">
                                    <h5>Status</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault1"
                                        >
                                            Buy Now
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault2"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault2"
                                        >
                                            On developer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault3"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault3"
                                        >
                                            New
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault4"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault4"
                                        >
                                            Has Offers
                                        </label>
                                    </div>
                                </div>
                                <div className="filter-sidebar-content">
                                    <h5>Explore</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault1"
                                        >
                                            Gambling Apes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault2"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault2"
                                        >
                                            Jon Doe
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault3"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault3"
                                        >
                                            Jon Doe
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault4"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault4"
                                        >
                                            CryptoPunks
                                        </label>
                                    </div>
                                </div>
                                <div className="filter-sidebar-content">
                                    <h5>Chains</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault1"
                                        >
                                            IC
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault2"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault2"
                                        >
                                            Ethereum
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault3"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault3"
                                        >
                                            BNB
                                        </label>
                                    </div>
                                </div>
                                <div className="filter-sidebar-content">
                                    <h5>Categories</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault1"
                                        >
                                            Art
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault2"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault2"
                                        >
                                            Music
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault3"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault3"
                                        >
                                            Domain Names
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault4"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault4"
                                        >
                                            Virtual Worlds
                                        </label>
                                    </div>
                                </div>
                                <div className="filter-sidebar-content">
                                    <h5>On Promotion In</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault1"
                                        >
                                            ICP
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault2"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault2"
                                        >
                                            ETH
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault3"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault3"
                                        >
                                            BTC
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault4"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexCheckDefault4"
                                        >
                                            ALXO
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
                            <div className="row">
                                {data.map((item, i) => (
                                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                        <div className="card items">
                                            <div className="card-body">
                                                <div className="items-img position-relative">
                                                    <img
                                                        src={`/images/items/${item.img}`}
                                                        className="img-fluid rounded mb-3"
                                                        alt=""
                                                    />
                                                    <img
                                                        src={`/images/avatar/${item.img}`}
                                                        className="creator"
                                                        width="50"
                                                        alt=""
                                                    />
                                                </div>
                                                <h4 className="card-title">
                                                    Jon Doe
                                                </h4>
                                                <p></p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-start">
                                                        <p className="mb-2">
                                                            developer
                                                        </p>
                                                        <h5 className="text-muted">
                                                            3h 1m 50s
                                                        </h5>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-2">
                                                            Bid :{" "}
                                                            <strong className="text-primary">
                                                                0.55 ETH
                                                            </strong>
                                                        </p>
                                                        <h5 className="text-muted">
                                                            0.55 ETH
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <a
                                                        href=""
                                                        className="btn btn-primary"
                                                    >
                                                        Make Offer
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Explore;
