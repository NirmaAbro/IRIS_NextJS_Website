// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

// const Approach = () => {
//   const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} slick-prev`}
//         style={{ ...style, display: "block", left: "-50px" }}
//         onClick={onClick}
//       >
//         <FontAwesomeIcon
//           icon={faChevronLeft}
//           className="text-2xl text-white bg-green-600 rounded-3xl py-3 px-4 "
//         />
//       </div>
//     );
//   };

//   const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} slick-next`}
//         style={{ ...style, display: "block", right: "-25px" }}
//         onClick={onClick}
//       >
//         <FontAwesomeIcon
//           icon={faChevronRight}
//           className="text-2xl text-white bg-green-600 rounded-3xl py-3 px-4 "
//         />
//       </div>
//     );
//   };
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const cards = [
//     {
//       title: "Tailored Solutions",
//       description:
//         "We understand that each individual or organization has unique requirements. That’s why we offer tailored solutions to meet specific learning objectives and goals. Whether it’s a customized training program or specialized research and analysis, we work closely with our clients to ensure our services align with their needs.",
//     },
//     {
//       title: "Industry-Relevant Curriculum",
//       description:
//         "Our educational and training programs are developed in collaboration with industry experts and practitioners. We prioritize industry relevance, ensuring that the skills and knowledge imparted align with the current demands of various sectors. This equips learners with practical and up-to-date expertise that can be directly applied in their careers.",
//     },
//     {
//       title: "Experienced and Qualified Instructors",
//       description:
//         "We are proud to have a team of experienced and qualified instructors who bring a wealth of industry knowledge and expertise to the training process. They are dedicated to delivering engaging, interactive, and effective learning experiences. Our instructors foster a positive and collaborative atmosphere that encourages learners to excel.",
//     },
//     // Add more cards as needed
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-5xl font-bold mb-4 text-start">
//         Our <span className="text-blue-500">Approach</span>
//       </h2>
//       <p className="text-start mb-8 text-xl font-semibold">
//         Our approach is centered around delivering comprehensive and effective
//         learning experiences that meet the evolving needs of individuals and
//         organizations. We believe in the power of education, research, and
//         training to transform lives and drive positive change. Here’s an
//         overview of our approach:
//       </p>
//       <p className="text-start mb-8 text-xl font-normal">
//         Learner-Centric Approach: We place learners at the heart of everything
//         we do. Our programs are designed to cater to diverse learning styles,
//         abilities, and backgrounds. We focus on creating an inclusive and
//         supportive learning environment that promotes active participation,
//         engagement, and personal growth.
//       </p>
//       <Slider {...settings}>
//         {cards.map((card, index) => (
//           <div key={index} className="px-1 max-w-80 ">
//             <div className="bg-blue-500 text-white p-6 rounded-md shadow-md  min-h-[380px]  flex flex-col">
//               {/* <div className="absolute top-0 left-0 w-1 h-2 bg-white"></div> */}
//               <h3 className="text-xl font-medium mb-2">{card.title}</h3>
//               <p className="text-base font-light">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Approach;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Approach = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-prev`}
        style={{ ...style, display: "block", left: "-50px" }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-2xl text-white bg-green-600 rounded-3xl py-3 px-4"
        />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-next`}
        style={{ ...style, display: "block", right: "-25px" }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-2xl text-white bg-green-600 rounded-3xl py-3 px-4"
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const cards = [
    {
      title: "Tailored Solutions",
      description:
        "We understand that each individual or organization has unique requirements. That’s why we offer tailored solutions to meet specific learning objectives and goals. Whether it’s a customized training program or specialized research and analysis, we work closely with our clients to ensure our services align with their needs.",
    },
    {
      title: "Industry-Relevant Curriculum",
      description:
        "Our educational and training programs are developed in collaboration with industry experts and practitioners. We prioritize industry relevance, ensuring that the skills and knowledge imparted align with the current demands of various sectors. This equips learners with practical and up-to-date expertise that can be directly applied in their careers.",
    },
    {
      title: "Experienced and Qualified Instructors",
      description:
        "We are proud to have a team of experienced and qualified instructors who bring a wealth of industry knowledge and expertise to the training process. They are dedicated to delivering engaging, interactive, and effective learning experiences. Our instructors foster a positive and collaborative atmosphere that encourages learners to excel.",
    },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold mb-4 text-start">
        Our <span className="text-blue-500">Approach</span>
      </h2>
      <p className="text-start mb-8 text-xl font-semibold">
        Our approach is centered around delivering comprehensive and effective
        learning experiences that meet the evolving needs of individuals and
        organizations. We believe in the power of education, research, and
        training to transform lives and drive positive change. Here’s an
        overview of our approach:
      </p>
      <p className="text-start mb-8 text-xl font-normal">
        Learner-Centric Approach: We place learners at the heart of everything
        we do. Our programs are designed to cater to diverse learning styles,
        abilities, and backgrounds. We focus on creating an inclusive and
        supportive learning environment that promotes active participation,
        engagement, and personal growth.
      </p>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-1 max-w-80">
            <div className="bg-blue-500 text-white p-6 rounded-md shadow-md min-h-[380px] flex flex-col">
              {/* <div className="absolute top-0 left-0 w-1 h-2 bg-white"></div> */}
              <h3 className="text-xl font-medium mb-2">{card.title}</h3>
              <p className="text-base font-light">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Approach;
