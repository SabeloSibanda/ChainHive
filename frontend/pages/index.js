import React, { useState } from "react";
import BrowseCategory from "../components/elements/BrowseCategory";
import TopCollection from "../components/elements/TopCollection";
import LayoutFront from "../components/layout/LayoutFront";
import "react-modal-video/css/modal-video.css";
import dynamic from "next/dynamic";

import Link from "next/link";
import IntroSlider from "../components/slider/IntroSlider";
import NotableDrops from "../components/slider/NotableDrops";
import TrendingSlider from "../components/slider/Trending";

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

const Index = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <LayoutFront pageClass={"front"}>
                <div className="intro1 section-padding">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-6 col-12">
                                <div className="intro-content  my-5">
                                    <h1 className="mb-3">
                                        Discover, connect, and work with
                                        <span> extraordinary Freelancers</span>
                                    </h1>
                                    <p>
                                        on the world's first & largest crosschain freelancers
                                        marketplace
                                    </p>

                                    <div className="intro-btn mt-5">
                                        <Link href="/explore">
                                            <a className="btn btn-primary">
                                                Explore
                                                <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </Link>
                                        <Link href="/signup">
                                            <a className="btn btn-outline-primary">
                                                Sign Up
                                            </a>
                                        </Link>
                                    </div>

                                    <a
                                        onClick={() => setOpen(true)}
                                        className="more c-pointer d-inline-flex"
                                    >
                                        <span>
                                            <i className="bi bi-play-fill"></i>
                                        </span>
                                        Learn more about ChainHIve
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-12">
                                <div className="intro-slider">
                                    <IntroSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notable-drops section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Notable Freelancers</h2>
                                    {/* <div className="arrows">
                                        <span>
                                            <i className="bi bi-arrow-left"></i>
                                        </span>
                                        <span>
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="notable-drops-slider">
                                    <NotableDrops />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-collection section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Top freelancers over last 7 days</h2>
                                    <p>
                                        Here are a few reasons why you should
                                        choose ChainHive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <TopCollection />
                        </div>
                    </div>
                </div>

                <div className="trending-category section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Trending Freelancers</h2>
                                    {/* <div className="arrows">
                                        <span>
                                            <i className="bi bi-arrow-left"></i>
                                        </span>
                                        <span>
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="trending-slider">
                                <TrendingSlider/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="intro-video section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Meet with ChainHive</h2>
                                    <p>
                                        The Freelancer marketplace for
                                        the best web3 devs
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="intro-video-play">
                                    <div className="play-btn">
                                        <a onClick={() => setOpen(true)}>
                                            <i className="bi bi-play-fill"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="intro-video-content text-center mt-5">
                                    <a
                                        href="#"
                                        className="btn btn-primary px-4"
                                    >
                                        Explore the marketplace
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="5_7Xyxrq8Jc?si=89iqjdxn3IeUZrKn"
                    onClose={() => setOpen(false)}
                />
            </LayoutFront>
        </>
    );
};

export default Index;
