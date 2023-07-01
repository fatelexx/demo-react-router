export default function WhyUs() {
    return (
        <section id="why-us" className="why-us section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                        <div className="why-box">
                            <h3>Why Choose Yummy?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                                aute irure dolor in reprehenderit Asperiores dolores sed et.
                                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                                optio ad corporis.
                            </p>
                            <div className="text-center">
                                <a href="#" className="more-btn">
                                    Learn More <i className="bx bx-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Why Box */}
                    <div className="col-lg-8 d-flex align-items-center">
                        <div className="row gy-4">
                            <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-clipboard-data" />
                                    <h4>Corporis voluptates officia eiusmod</h4>
                                    <p>
                                        Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                                        laboris nisi ut aliquip
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-gem" />
                                    <h4>Ullamco laboris ladore pan</h4>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-inboxes" />
                                    <h4>Labore consequatur incidid dolore</h4>
                                    <p>
                                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                                        maiores omnis facere
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}