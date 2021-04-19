
function Contacts() {
    return (
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Faiza Fiaz</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Manawala Faisalabad , Pakistan</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">fiazfaiza981@gmail.com</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fab fa-linkedin"></i>                            <div className="info">
                                <div className="head">LinkedIN</div>
                                <div className="sub-title">Faiza Fiaz   </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form className="contact-form" action="#" method="POST">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" placeholder="Name" />
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" placeholder="Email" />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" placeholder="Subject" />
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div className="button-area">
                        <a href="mailto:fiazfaiza981@gmail.com?subject=HI Faiza I am" target="_blank">Send Message</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
 );
  }
  
  export default Contacts;
  