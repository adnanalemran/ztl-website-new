"use client";
import React, { useEffect } from "react";
import "./CustomSlider.css";
import image1 from "@/utils/images/sliderImage/img11.jpg";
import image2 from "@/utils/images/sliderImage/img2.jpg";
import image3 from "@/utils/images/sliderImage/img3.jpg";
import image4 from "@/utils/images/sliderImage/img4.jpg";
import ButtonPrimary from "@/components/common/ButtonPrimary";

import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CustomSlider = () => {
  const len = useLanguage(homePageLanguage);

  useEffect(() => {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const slider = document.querySelector(".slider");
    const sliderList = slider.querySelector(".list");
    const thumbnail = slider.querySelector(".thumbnail");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    thumbnail.appendChild(thumbnailItems[0]);

    const moveSlider = (direction) => {
      const sliderItems = sliderList.querySelectorAll(".item");
      const thumbnailItems = thumbnail.querySelectorAll(".item");

      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
      }

      slider.addEventListener(
        "animationend",
        function () {
          if (direction === "next") {
            slider.classList.remove("next");
          } else {
            slider.classList.remove("prev");
          }
        },
        { once: true }
      );
    };

    const interval = setInterval(() => moveSlider("next"), 999999);

    nextBtn.onclick = () => moveSlider("next");
    prevBtn.onclick = () => moveSlider("prev");

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider container mx-auto  lg:h-[80vh] overflow-x-hidden  rounded-2xl">
      <div className="list">
        <div className="item">
          <img src={image1.src} alt="" />
          <div className="content w-full    ">
            <div className="title text-6xl flex w-full justify-between   ">
              <span>{len?.productSec?.Product1?.name}</span>
              <div className="w-44 ">
                {/* <img src={hrLogo.src} alt="hr logo" className=" w-full" /> */}
              </div>
            </div>

            <div className="description max-w-100 py-10">
              {len?.productSec?.Product1?.description}
            </div>
            <div className="button">
              <ButtonPrimary
                text={len?.seeMore}
                sideLink={len?.productSec?.Product1?.url}
              />
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image2.src} alt="" />
          <div className="content w-full    ">
            <div className="title text-6xl flex w-full justify-between   ">
              <span>{len?.productSec?.Product2?.name}</span>
            </div>

            <div className="description max-w-100 py-10">
              {len?.productSec?.Product2?.description}
            </div>
            <div className="button">
              <ButtonPrimary
                text={len?.seeMore}
                sideLink={len?.productSec?.Product2?.url}
              />
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image3.src} alt="" />
          <div className="content w-full    ">
            <div className="title text-6xl flex w-full justify-between   ">
              <span>{len?.productSec?.Product3?.name}</span>
              <div className="     ">
                {/* <img src={swLogo.src} alt=" logo" className="   " /> */}
              </div>
            </div>

            <div className="description max-w-100 py-10">
              {len?.productSec?.Product3?.description}
            </div>
            <div className="button">
              <ButtonPrimary
                text={len?.seeMore}
                sideLink={len?.productSec?.Product3?.url}
              />
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image4.src} alt="" />
          <div className="content w-full    ">
            <div className="title text-6xl flex w-full justify-between   ">
              <span className="text-black">
                {len?.productSec?.Product4?.name}
              </span>
            </div>

            <div className="description max-w-100 py-10 text-black">
              {len?.productSec?.Product4?.description}
            </div>
            <div className="button">
              <ButtonPrimary
                text={len?.seeMore}
                sideLink={len?.productSec?.Product4?.url}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item">
          <img src={image4.src} alt="" />
          <div className="-mt-8 text-white px-3">
            {len?.productSec?.Product4?.name}
          </div>
        </div>
        <div className="item">
          <img src={image1.src} alt="" />
          <div className="-mt-8 text-white px-3">
            {len?.productSec?.Product1?.name}
          </div>
        </div>
        <div className="item">
          <img src={image2.src} alt="" />
          <div className="-mt-8 text-white px-3">
            {len?.productSec?.Product2?.name}
          </div>
        </div>
        <div className="item">
          <img src={image3.src} alt="" />
          <div className="-mt-8 text-white px-3">
            {len?.productSec?.Product3?.name}
          </div>
        </div>
      </div>
      <div className="nextPrevArrows">
        <button className="prev bg-primary flex justify-center items-center  ">
 
          <FaAngleLeft /> 
          <FaAngleRight /> 
        </button>
        <button className="next bg-primary ">{">"}</button>
      </div>
    </div>
  );
};

export default CustomSlider;
