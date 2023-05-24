"use client";

import { BsThreeDotsVertical } from "react-icons/bs";

interface PostItemProps {
  title: string;
  date: string;
  isLast?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, isLast }) => {
  return (
    <div
      className={`p-5 ${
        !isLast && "border-b"
      } dark:border-third-light flex justify-between items-center`}
    >
      <div className="">
        <div className="mb-2 font-bold dark:text-primary-light">{title}</div>
        <div className="text-secondary-light">{date}</div>
      </div>
      <div className="border dark:border-third-light p-2 rounded-md cursor-pointer">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default PostItem;
