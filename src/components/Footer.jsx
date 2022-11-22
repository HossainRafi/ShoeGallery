import React, { useEffect, useState } from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <>
      <footer>
        <div>
          <div>
            {titles.map((val, i) => (
              <div key={i}>
                <h1>
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div >
            <p >
              Copyright<sup >&copy;</sup> All
              Reserved Rights{" "}
              <span>JSSTACK DEVELOPERS {Year}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
