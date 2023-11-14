"use client";
import { createCategory } from "@/actions/category";
import { useFormState } from "react-dom";

// const initialState = {
//   name: null,
// };

// type TCategoryFormProps = {
//   handleSubmit: (formData: FormData) => Promise<void>;
// };
const CategoryAddForm = () => {
  const [state, formAction] = useFormState(createCategory, null);

  return (
    <div>
      <form action={formAction}>
        <input type="text" name="name" />
        <button type="submit">Add</button>
      </form>
      <div>{state?.message}</div>
    </div>
  );
};

export default CategoryAddForm;
