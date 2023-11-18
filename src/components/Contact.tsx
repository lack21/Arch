import useIntersectionObserver from "./Observer";
import darkArrowIcon from "../assets/icons/icon-arrow -black.svg";
import whiteArrowIcon from "../assets/icons/icon-arrow.svg";

function Contact() {
  const {} = useIntersectionObserver();

  return (
    <>
      <div className="left-title">CONTACT</div>
      <section className="head-section hidden">
        <div className="out-img second"></div>
        <h2 className="title">Contact</h2>
        <div className="content">
          <h3 className="name">Tell us about your project</h3>
          <p className="text">
            We'd love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </section>

      <section className="details hidden">
        <h2 className="title">
          Contact <br />
          Details
        </h2>
        <div className="row hidden">
          <h3 className="name">Main Office</h3>
          <p className="text">Mail: archone@mail.com</p>
          <p className="text">Address : 1892 Chenoweth Drive TN</p>
          <p className="text">Phone : 123-456-3451</p>
          <div className="map-text">
            View on Map <img src={darkArrowIcon} alt="arrow-icon" />
          </div>
        </div>
        <div className="row hidden">
          <h3 className="name">Office II</h3>
          <p className="text">Mail: archtwo@mail.com</p>
          <p className="text">Address: 3399 Wines Lane TX</p>
          <p className="text">Phone: 832-123-4321</p>
          <div className="map-text">
            View on Map <img src={darkArrowIcon} alt="arrow-icon" />
          </div>
        </div>
      </section>

      <aside className="map hidden"></aside>

      <section className="connect hidden">
        <h2 className="title">
          Connect
          <br />
          with us
        </h2>
        <form className="form">
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            required
          />
          <button className="btn">
            <img src={whiteArrowIcon} alt="icon-arrow" />
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
