import React from 'react'

function Events() {
    return (
        <section id="events" className="events">
            <div className="container-fluid" data-aos="fade-up">
                <div className="section-header">
                    <h2>Events</h2>
                    <p>
                        Share <span>Your Moments</span> In Our Restaurant
                    </p>
                </div>
                <div
                    className="slides-3 swiper"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <div className="swiper-wrapper">
                        <div
                            className="swiper-slide event-item d-flex flex-column justify-content-end"
                            style={{ backgroundImage: "url(assets/img/events-1.jpg)" }}
                        >
                            <h3>Custom Parties</h3>
                            <div className="price align-self-start">$99</div>
                            <p className="description">
                                Quo corporis voluptas ea ad. Consectetur inventore sapiente
                                ipsum voluptas eos omnis facere. Enim facilis veritatis id est
                                rem repudiandae nulla expedita quas.
                            </p>
                        </div>
                        {/* End Event item */}
                        <div
                            className="swiper-slide event-item d-flex flex-column justify-content-end"
                            style={{ backgroundImage: "url(assets/img/events-2.jpg)" }}
                        >
                            <h3>Private Parties</h3>
                            <div className="price align-self-start">$289</div>
                            <p className="description">
                                In delectus sint qui et enim. Et ab repudiandae inventore
                                quaerat doloribus. Facere nemo vero est ut dolores ea assumenda
                                et. Delectus saepe accusamus aspernatur.
                            </p>
                        </div>
                        {/* End Event item */}
                        <div
                            className="swiper-slide event-item d-flex flex-column justify-content-end"
                            style={{ backgroundImage: "url(assets/img/events-3.jpg)" }}
                        >
                            <h3>Birthday Parties</h3>
                            <div className="price align-self-start">$499</div>
                            <p className="description">
                                Laborum aperiam atque omnis minus omnis est qui assumenda quos.
                                Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut
                                quibusdam maxime. Non enim perspiciatis.
                            </p>
                        </div>
                        {/* End Event item */}
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </div>
        </section>
    )
}

export default Events