import React, { useState } from 'react';
import { Tabs } from 'flowbite-react';

import product1 from "../assets/01-12.jpg";
import product2 from "../assets/01-14.jpg";
import product3 from "../assets/01-13.jpg";
import product4 from "../assets/01-15.jpg";
import product5 from "../assets/001.jpg";
import product6 from "../assets/02-2.jpg";
import product7 from "../assets/01-1.jpg";
import product8 from "../assets/01.jpg";
import product9 from "../assets/01-9.jpg";
import product10 from "../assets/01-8.jpg";
import product11 from "../assets/01-10.jpg";
import product12 from "../assets/01-11.jpg";

const LastDeals = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div class=" bg-gray-100 flex flex-col justify-center">
        <h1 className="text-center mt-10 text-4xl font-semibold text-gray-800">
          Last Minute <span className="text-red-600 font-bold">Deals</span>
        </h1>
        <div className="flex justify-center gap-2 my-4">
          <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
          <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
          <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
          <hr className="w-28 border-[2.5px] rounded-3xl border-red-600" />
        </div>
        <Tabs aria-label="Tabs with underline" style="underline" className="mx-auto focus:outline-none border-0">
          <Tabs.Item active title="LAPTOP" className="mx- text-red-900">
            <div class="relative m-3 flex flex-wrap mx-auto justify-center">
              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product1}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product2}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product3}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product4}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="MOBILE PHONES">
            <div class="relative m-3 flex flex-wrap mx-auto justify-center">
              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product5}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product6}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product7}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product8}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="SMART WATCHES">
            <div class="relative m-3 flex flex-wrap mx-auto justify-center">
              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product9}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product10}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product11}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="relative max-w-sm min-w-[290px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-48 rounded-2xl w-full object-contain"
                    src={product12}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default LastDeals;