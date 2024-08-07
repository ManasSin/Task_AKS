import React from "react";
import { Link } from "react-router-dom";
import { dateDifference } from "../utils";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  description: string;
  autherName: string;
  price: number;
  duration: number;
  id: number;
  publishedAt: string;
  className?: string;
};

const Card = ({
  title,
  description,
  autherName,
  price,
  duration,
  id,
  publishedAt,
  className,
}: Props) => {
  const timeBefore = dateDifference(new Date(publishedAt), new Date());
  return (
    <div
      className={twMerge(
        `bg-white shadow-md rounded-lg p-3  w-full min-w-[180px] max-w-[550px] mx-auto grow flex flex-col gap-2 cursor-pointer hover:shadow-2xl ${className}`
      )}
      key={id}
    >
      <Link to={`/courses/${id}`}>
        <div className="flex  mb-4 flex-col h-fit w-full">
          <img
            src="https://picsum.photos/200"
            alt="random image"
            className="mb-4 rounded-md"
          />
          <h1 className="text-2xl font-bold inline leading-snug text-gray-800">
            {title}
          </h1>
        </div>
        <p
          className="text-gray-600  px-1 -mt-2 mb-3 text-sm font-semibold line-clamp-3"
          style={
            {
              display: "-webkit-box",
              "-webkit-line-clamp": "3",
              "-webkit-box-orient": "vertical",
            } as React.CSSProperties
          }
        >
          {description}
        </p>
        <p className="px-1 text-gray-600 ">
          Auther:{" "}
          <span className="font-bold">
            <span className="text-gray-600 font-light">Instructor -</span>{" "}
            {autherName}
          </span>
        </p>
        <p className="px-1 text-gray-600 ">
          Price: <span className="font-bold">{price}</span>
        </p>
        <p className="px-1 text-gray-600 ">
          Duration: <span className="font-bold">{duration}</span>
        </p>
        <p className="px-1 text-gray-600 ">Launched Before: {timeBefore}</p>
      </Link>
    </div>
  );
};

export default Card;
