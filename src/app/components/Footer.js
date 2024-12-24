"use client";
import { BiChevronDown } from "react-icons/bi";

import {
  FaSpotify,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "About Us",
      links: [
        { href: "#our-company", label: "Our Company" },
        { href: "#heritage", label: "Our Coffee" },
        { href: "#stories", label: "About BrewVista" },
        { href: "#investors", label: "BrewVista Archive" },
        { href: "#customer-service", label: "Investor Relations" },
        { href: "#customer-service", label: "Customer Service" },
        { href: "#customer-service", label: "Contact Us" },
      ],
    },
    {
      title: "Careers",
      links: [
        { href: "#working-at-starbucks", label: "Culture and Values" },
        { href: "#internships", label: "Inclusion, Diversity & Belonging" },
        { href: "#opportunities", label: "College Achievement Plan" },
        { href: "#culture", label: "Alumni Community" },
        { href: "#culture", label: "U.S Careers" },
        { href: "#culture", label: "International Careers" },
      ],
    },
    {
      title: "Social Impact",
      links: [
        { href: "#people", label: "Communities" },
        { href: "#planet", label: "BrewVista Foundation" },
        { href: "#community", label: "Sustainability" },
        {
          href: "#ethics",
          label: "Environmental and Social Impact Reporting",
        },
      ],
    },
    {
      title: "For Business Partners",
      links: [
        { href: "#suppliers", label: "Landlord Support Center" },
        { href: "#license", label: "Suppliers" },
        { href: "#franchise", label: "Corporate Gift Cards" },
        { href: "#partnership", label: "Office and Foodservice Coffee" },
      ],
    },
    {
      title: "Order and Pickup",
      links: [
        { href: "#order-online", label: "Order on the App" },
        { href: "#pickup-options", label: "Order on the Web" },
        { href: "#delivery", label: "Delivery" },
        { href: "#rewards", label: "Order and Pick Up Options" },
        {
          href: "#rewards",
          label: "Explore and Find Coffee for Home",
        },
      ],
    },
  ];

  return (
    <footer className="text-gray-800 py-10">
      <div className="container mx-auto px-4 tracking-wider">
        <div className="hidden md:grid md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-6">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-black text-gray-400 font-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:hidden px-4">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full font-bold text-left"
              >
                <span>{section.title}</span>
                <span
                  className={`transition-transform duration-300 ${
                    openSection === section.title ? "rotate-180" : ""
                  }`}
                >
                  <BiChevronDown size={24} />
                </span>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-500 ${
                  openSection === section.title
                    ? "max-h-screen mt-2"
                    : "max-h-0"
                }`}
              >
                {section.links.map((link, idx) => (
                  <li key={idx} className="mt-2">
                    <a
                      href={link.href}
                      className="hover:text-black text-gray-400 font-normal block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-300 mb-8" />

        <div className="flex space-x-8 mb-6 px-4">
          <a href="#spotify" className="text-black hover:text-green-600">
            <FaSpotify size={30} />
          </a>
          <a href="#facebook" className="text-black hover:text-green-600">
            <FaFacebookF size={30} />
          </a>
          <a href="#pinterest" className="text-black hover:text-green-600">
            <FaPinterestP size={30} />
          </a>
          <a href="#instagram" className="text-black hover:text-green-600">
            <FaInstagram size={30} />
          </a>
          <a href="#youtube" className="text-black hover:text-green-600">
            <FaYoutube size={30} />
          </a>
          <a href="#x" className="text-black hover:text-green-600">
            <FaTwitter size={30} />
          </a>
        </div>

        <div className="flex flex-col space-y-4 mb-4 text-sm font-normal px-4">
          <a href="#link1" className="hover:underline">
            Privacy Notice
          </a>
          <a href="#link2" className="hover:underline">
            Customer Health Privacy Notice
          </a>
          <a href="#link3" className="hover:underline">
            Term of Use
          </a>
          <a href="#link4" className="hover:underline">
            Do Not Share My Personal Information
          </a>
          <a href="#link5" className="hover:underline">
            CA Supply Chain Act
          </a>
          <a href="#link6" className="hover:underline">
            Accessibility
          </a>
          <a href="#link7" className="hover:underline">
            Cookie Preferences
          </a>
        </div>

        <div className="text-sm text-gray-600 px-4 mt-6">
          <p>
            &copy; {new Date().getFullYear()} BrewVista Coffee Company. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
