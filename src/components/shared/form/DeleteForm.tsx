import { TCategory } from "@/types/Category";
import { TProduct } from "@/types/Product";
import { TProduction } from "@/types/Production";
import DeleteButton from "../button/DeleteButton";
import { memo } from "react";

type TDeleteFormProps = {
  formAction: (formData: FormData) => void;
  item: TCategory | TProduction | TProduct;
};
const DeleteForm = memo(function DeleteForm({ formAction, item }: TDeleteFormProps) {
  return (
    <div className="flex">
      <div className="mr-2 mb-1">{item.name}</div>
      <form action={formAction}>
        <input type="hidden" name="id" value={item.id} />
        <DeleteButton />
      </form>
    </div>
  );
});

export default DeleteForm;
