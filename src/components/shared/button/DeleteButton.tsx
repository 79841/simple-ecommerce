"use client";

import { useFormStatus } from "react-dom";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="text-red-500 disabled:text-gray-400"
      type="submit"
      disabled={pending}
    >
      X
    </button>
  );
};

export default DeleteButton;
