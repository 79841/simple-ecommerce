"use client";

import { memo } from "react";

const AddButton = memo(function AddButton() {
  return (
    <button
      type="submit"
      className="h-8 w-16 rounded-md border-2 border-solid border-black"
    >
      Add
    </button>
  );
});

export default AddButton;
