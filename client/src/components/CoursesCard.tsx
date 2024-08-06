import { Course } from "../types";

type Props = {
  courses: Course[];
};

export const CoursesCard = ({ courses }: Props) => {
  const dateDifference = (date1: Date, date2: Date) => {
    const timeDifference = date2.getTime() - date1.getTime();
    const secondsInDay = 86400;

    const daysDifference = Math.floor(timeDifference / secondsInDay);

    const years = Math.floor(daysDifference / 365);
    const months = Math.floor((daysDifference % 365) / 30);
    const days = Math.floor((daysDifference % 365) % 30);

    const hours = Math.floor(
      (timeDifference - daysDifference * secondsInDay) / 3600
    );
    const minutes = Math.floor(
      (timeDifference - daysDifference * secondsInDay - hours * 3600) / 60
    );

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  const timeBefore = dateDifference(
    new Date(courses[0].publishedAt),
    new Date()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[minmax(200px,auto)] max-w-7xl mx-auto gap-y-2 gap-x-2">
      {courses.map(
        ({ id, title, details, autherName, price, duration }: Course) => (
          <div
            className="bg-white shadow-md rounded-lg p-3  w-full min-w-[180px] max-w-[550px] mx-auto grow flex flex-col gap-2"
            key={id}
          >
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
            <p className="text-gray-600  px-1 -mt-2 text-sm font-semibold">
              {details}
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
          </div>
        )
      )}
    </div>
  );
};
