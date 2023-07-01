import React from 'react'

function Contact() {
    return (

        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Contact</h2>
                    <p>
                        Need Help? <span>Contact Us</span>
                    </p>
                </div>
                <div className="mb-3">
                    <iframe
                        style={{ border: 0, width: "100%", height: 350 }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                        frameBorder={0}
                        allowFullScreen=""
                    />
                </div>
                {/* End Google Maps */}
                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className="info-item  d-flex align-items-center">
                            <i className="icon bi bi-map flex-shrink-0" />
                            <div>
                                <h3>Our Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center">
                            <i className="icon bi bi-envelope flex-shrink-0" />
                            <div>
                                <h3>Email Us</h3>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                        <div className="info-item  d-flex align-items-center">
                            <i className="icon bi bi-telephone flex-shrink-0" />
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                        <div className="info-item  d-flex align-items-center">
                            <i className="icon bi bi-share flex-shrink-0" />
                            <div>
                                <h3>Opening Hours</h3>
                                <div>
                                    <strong>Mon-Sat:</strong> 11AM - 23PM;
                                    <strong>Sunday:</strong> Closed
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Info Item */}
                </div>
                <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form p-3 p-md-4"
                >
                    <div className="row">
                        <div className="col-xl-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                            />
                        </div>
                        <div className="col-xl-6 form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required=""
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="message"
                            rows={5}
                            placeholder="Message"
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                            Your message has been sent. Thank you!
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
                {/*End Contact Form */}
            </div>
        </section>
    )
}

export default Contact