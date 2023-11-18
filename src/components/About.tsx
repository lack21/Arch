import jakeAvatar from "../assets/about/desktop/avatar-jake.jpg";
import thompsonAvatar from "../assets/about/desktop/avatar-thompson.jpg";
import jacksonAvatar from "../assets/about/desktop/avatar-jackson.jpg";
import mariaAvatar from "../assets/about/desktop/avatar-maria.jpg";
import useIntersectionObserver from "./Observer";

function About() {
  const {} = useIntersectionObserver();
  const leadersData = [
    [jakeAvatar, "Jake Richards", "Chief Architect"],
    [thompsonAvatar, "Thompson Smith", "Head of Finance"],
    [jacksonAvatar, "Jackson Rourke", "Lead Designer"],
    [mariaAvatar, "Maria Simpson", "Senior Architect"],
  ];

  return (
    <>
      <div className="left-title">ABOUT</div>
      <section className="head-section hidden">
        <div className="out-img"></div>
        <h2 className="title">About</h2>
        <div className="content">
          <h3 className="name">Your team of professionals</h3>
          <p className="text">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </section>

      <section className="heritage hidden">
        <div className="content">
          <h3 className="name">
            Our
            <br />
            Heritage
          </h3>
          <p className="text">
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p className="text">
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p className="text">
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
        <div className="heritage-img"></div>
      </section>

      <section className="leaders">
        <h2 className="title hidden">
          The <br />
          Leaders
        </h2>
        <div className="row">
          {leadersData.map((item, index) => (
            <div className="item hidden" key={index}>
              <img src={item[0]} alt="leader-avatar" />
              <h3 className="name">{item[1]}</h3>
              <p className="text">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
