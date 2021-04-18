
function Contacts() {
    return (
        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Faiza Fiaz</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Manawala Faisalabad , Pakistan</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">fiazfaiza981@gmail.com</div>
                            </div>
                        </div>

                        <div class="row">
                            <i class="fab fa-linkedin"></i>                            <div class="info">
                                <div class="head">LinkedIN</div>
                                <div class="sub-title">Faiza Fiaz   </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form class="contact-form" action="#" method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" class="fullname" placeholder="Name" />
                            </div>
                            <div class="field email">
                                <input type="text" class="email-input" placeholder="Email" />
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" class="subject" placeholder="Subject" />
                        </div>
                        <div class="field textarea">
                            <textarea class="message" cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div class="button-area">
                        <a href="mailto:fiazfaiza981@gmail.com" target="_blank">Send Message</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
 );
  }
  
  export default Contacts;
  