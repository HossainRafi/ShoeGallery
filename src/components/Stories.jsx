import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon, HashtagIcon } from '@heroicons/react/24/outline';

const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div>
          <Splide>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div>
                  <div>
                    <img src={val.img} className="" />
                  </div>
                  <div>
                    <div>
                      <HeartIcon className="icon-style" />
                      <span>{val.like}</span>
                    </div>
                    <div>
                      <ClockIcon className="icon-style" />
                      <span>{val.time}</span>
                    </div>
                    <div>
                      <HashtagIcon className="icon-style" />
                      <span>{val.by}</span>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
