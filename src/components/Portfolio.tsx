import useIntersectionObserver from "./Observer";

function Portfolio() {
  const {} = useIntersectionObserver();
  const portfolioData = [
    ["Seraph Station", "September 2019"],
    ["Eebox Building", "August 2017"],
    ["Federal II Tower", "March 2017"],
    ["Project Del Sol", "January 2016"],
    ["Le Prototype", "October 2015"],
    ["228B Tower", "September 2019"],
    ["Grand Edelweiss Hotel", "December 2013"],
    ["Netcry Tower", "August 2012"],
    ["Hypers", "January 2012"],
    ["SXIV Tower", "March 2011"],
    ["Trinity Bank Tower", "September 2010"],
    ["Project Paramour", "February 2008"],
  ];

  return (
    <>
      <div className="left-title">PORTFOLIO</div>
      <section className="portfolio">
        {portfolioData.map((item, index) => (
          <div className="item hidden" key={index}>
            <h3 className="name">{item[0]}</h3>
            <p className="text">{item[1]}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Portfolio;
