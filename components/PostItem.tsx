"use client";

import { useState } from "react";
import { BsThreeDotsVertical, BsTrash3Fill } from "react-icons/bs";

interface PostItemProps {
  title: string;
  date: string;
  isLast?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, isLast }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDelete() {
    console.log("delete");
  }

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
      <div
        className="border dark:border-third-light p-2 rounded-md cursor-pointer relative"
        onClick={() => setConfirmDelete((prev) => !prev)}
      >
        <BsTrash3Fill />
        {confirmDelete && (
          <div
            className="border dark:border-third-light text-center w-[140px] p-2 rounded-md cursor-pointer absolute right-0 translate-y-3 bg-white dark:bg-background-dark text-red-600"
            onClick={handleDelete}
          >
            Confirm Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
