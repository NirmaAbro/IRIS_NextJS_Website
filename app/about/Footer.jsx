import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../app/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-black py-5 pb-0 pt-5 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              className="mix-blend-multiply"
            />
            <h2 className="text-lg font-bold mt-4">Connect With Us</h2>
            <div className="flex mt-2 space-x-4">
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-green-500 text-2xl"
                />
              </a>
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-green-500 text-2xl"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-green-500 text-2xl"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-green-500 text-2xl"
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Services</h2>
            <ul className="mt-4 space-y-2">
              <li>IT Services</li>
              <li>Educational Services</li>
              <li>Research Services</li>
              <li>Technical Services</li>
              <li>Training Services</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Pages</h2>
            <ul className="mt-4 space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Gallery</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Useful Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-blue-500 text-xl"
                />
                info@iris.org.pk
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-blue-500 text-xl"
                />
                +923113327315
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-blue-500 text-xl"
                />
                H#10, Gulshan-e-Kainat, Liaquat Colony, Mirpurkhas, Sindh,
                Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-white text-sm bg-blue-500 w-full py-5">
        Copyright © 2022 Iris Education & Training Services All rights reserved.
        Powered by Minosofts Cooperation
      </div>
    </footer>
  );
};

export default Footer;
