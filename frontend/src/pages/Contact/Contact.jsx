import Navbar from "../../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Have questions about courses or registration? Send us a message and
            our academic support team will get back to you.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> support@knowledgegarden.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> CDAC Academic Project, India</p>
          </div>
        </section>

        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea rows="5" placeholder="Write your message"></textarea>

          <button type="button" onClick={() => window.alert("Message submitted")}>
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Contact;
