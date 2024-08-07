// import { useSelector } from "react-redux";
// import { Course } from "../types";

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

export const TableView = ({
  title,
  description,
  autherName,
  price,
  duration,
  id,
  publishedAt,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const courses: Course[] = useSelector((state: any) => state.course.values);
  return (
    <table className="table-auto w-full mx-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="p-2 border border-gray-300">title</th>
          <th className="p-2 border border-gray-300">autherName</th>
          <th className="p-2 border border-gray-300">description</th>
          <th className="p-2 border border-gray-300">price</th>
          <th className="p-2 border border-gray-300">duration</th>
          <th className="p-2 border border-gray-300">publishedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr key={id}>
          <td className="p-2 border border-gray-300">{title}</td>
          <td className="p-2 border border-gray-300">{autherName}</td>
          <td className="p-2 border border-gray-300">{description}</td>
          <td className="p-2 border border-gray-300">{price}</td>
          <td className="p-2 border border-gray-300">{duration}</td>
          <td className="p-2 border border-gray-300">{publishedAt}</td>
        </tr>
      </tbody>
    </table>
  );
};
