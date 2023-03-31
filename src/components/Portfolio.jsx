import React from "react";
import contactbook from "../assets/portfolio/contactbook.png";
import installNode from "../assets/portfolio/installNode.jpg";
import productapp from "../assets/portfolio/productapp.png";
import note_app from "../assets/portfolio/note_app.png";
import petcare from "../assets/portfolio/petcare.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/QPL4XUoH93Y",
      thumbnail : contactbook,
      code : 'https://github.com/ejazali01/Contact_book',
      demo : 'https://youtu.be/QPL4XUoH93Y'
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/y3dNyLMBnjE",
      thumbnail : note_app,
      code : 'https://github.com/ejazali01/note_app',
      demo : 'https://youtu.be/y3dNyLMBnjE',
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/eeWUzePd-go",
      thumbnail : productapp,
      code : 'https://github.com/ejazali01/storeapp',
      demo : 'https://youtu.be/eeWUzePd-go',
    },
    {
      id: 4,
      src: petcare,
      thumbnail : petcare,
      code : 'https://github.com/ejazali01/petcare',
      demo : petcare,
    },
    {
      id: 5,
      src: installNode,
      thumbnail : note_app,
      code : "",
      demo : ""
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,thumbnail,code,demo }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 h-1/2  rounded-lg"
            >
              <iframe
                width="100%"
                height="auto"
                src={src}
                title="Contact book"
                frameborder="1"
                poster = {thumbnail}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              

              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>demo</a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  <a href={code} >code </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;