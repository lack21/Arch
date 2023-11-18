import { Link } from "react-router-dom";
import whiteArrowIcon from "../assets/icons/icon-arrow.svg";
import useIntersectionObserver from "./Observer";

function Home() {
  const {} = useIntersectionObserver();
  const headerData = [
    [
      "Project Paramour",
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    ],
    [
      "Seraph Station",
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    ],
    [
      "Federal II Tower",
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    ],
    [
      "Trinity Bank Tower",
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    ],
  ];

  return (
    <>
      <div className="left-title">HOME</div>
      <header className="header hidden">
        {headerData.map((item, index) => (
          <div className="item" key={index}>
            <div className="content">
              <h2 className="name">{item[0]}</h2>
              <p className="text">{item[1]}</p>
              <Link to="portfolio" className="btn">
                See Our Portfolio
                <img src={whiteArrowIcon} alt="arrow-icon" />
              </Link>
            </div>
          </div>
        ))}
      </header>

      <main className="welcome hidden">
        <h1 className="title">Welcome</h1>
        <div className="content">
          <h3 className="name">
            Welcome to
            <br />
            Arch Studio
          </h3>
          <p className="text">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className="welcome-img"></div>
      </main>

      <section className="banner hidden">
        <h2 className="name">
          Small team,
          <br />
          big ideas
        </h2>
        <Link to="about" className="btn">
          About Us <img src={whiteArrowIcon} alt="arrow-icon" />
        </Link>
      </section>

      <section className="featured">
        <div className="top-section hidden">
          <h2 className="title">Featured</h2>
          <Link to="portfolio" className="btn">
            See All
            <img src={whiteArrowIcon} alt="arrow-icon" />
          </Link>
        </div>
        <div className="bottom-section">
          <Link className="item hidden" to="portfolio">
            <h3 className="name">Project Del Sol</h3>
            <p className="text">View All Projects</p>
            <h4 className="number">1</h4>
          </Link>
          <Link className="item hidden" to="portfolio">
            <h3 className="name">228B Tower</h3>
            <p className="text">View All Projects</p>
            <h4 className="number">2</h4>
          </Link>
          <Link className="item hidden" to="portfolio">
            <h3 className="name">Le Prototype</h3>
            <p className="text">View All Projects</p>
            <h4 className="number">3</h4>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
