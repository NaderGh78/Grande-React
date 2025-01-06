const MySlider = () => {
    return (
        <div className="my-slider">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption one">
                            <div className="carousel-caption-content">
                                <p className="text-capitalize">Global Grand Event on Digital Design</p>
                                <h2>design thinking conference</h2>
                                <div className="btn-flex">
                                    <a href="#" className="myRedBtn">get ticket</a>
                                    <a href="#">explore more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* first carousel caption */}

                    <div className="carousel-item">
                        <div className="carousel-caption two">
                            <div className="carousel-caption-content">
                                <p className="text-capitalize">Global Grand Event on Digital Design</p>
                                <h2>22 amazing speakers</h2>
                                <div className="btn-flex">
                                    <a href="#" className="d-none">get ticket</a>
                                    <a href="#">learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second carousel caption */}

                    <div className="carousel-item">
                        <div className="carousel-caption three">
                            <div className="carousel-caption-content">
                                <p className="text-capitalize">Global Grand Event on Digital Design</p>
                                <h2>book your seat now!</h2>
                                <div className="btn-flex">
                                    <a href="#" className="myRedBtn">explore</a>
                                    <a href="#" className="d-none">explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third carousel caption */}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default MySlider;