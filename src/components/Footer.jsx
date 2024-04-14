import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          AnalyticsHub
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            size={30}
            className="hover:text-[#1877F2] fill-current cursor-pointer"
          />
          <FaInstagram
            size={30}
            className="hover:text-[#fccc63] fill-current cursor-pointer"
          />
          <FaTwitterSquare
            size={30}
            className="hover:text-[#1DA1F2] fill-current cursor-pointer"
          />
          <FaGithubSquare
            size={30}
            className="hover:text-[#00df9a] fill-current cursor-pointer"
          />
          <FaDribbbleSquare
            size={30}
            className="hover:text-[#f468f2e0] fill-current cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h5 className="font-medium text-gray-400">Solutions</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Marketing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Support</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Pricing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Guides
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Company</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Blog
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Jobs
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Press
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Legal</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a]">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
