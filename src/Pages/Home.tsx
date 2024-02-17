import React from "react";

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to my hobby CV!</h1>
      <p>
        This is a small project I made to learn the basics of React and
        Typescript.
      </p>
      <p>
        The project is a small website that contains a few pages. The pages
        include a home page, a page with my CV and some information about me and
        a page with my grades
      </p>
      <p>
        The website is made using React and Typescript. The website is styled
        using CSS and the React Bootstrap library. The website is hosted on
        GitHub Pages.
      </p>

      {/* This is for evolving me frontend skills as you see i am missing some sence for design */}
      <h2>Future plans</h2>
      <p>
        I plan to improve the design and functionality of the website. I also
        plan on evolving me skills in frontend development. I plan to do this by
        adding some functional components and some more advanced elements.
      </p>
    </div>
  );
}

export default HomePage;
