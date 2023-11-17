import { ComponentPropsWithoutRef } from "react";

type TRoundInputBoxProps = ComponentPropsWithoutRef<"input">;
const RoundInputBox = (props: TRoundInputBoxProps) => {
  return (
    <input
      className="border-black border-2 border-solid h-8 rounded-md m-2"
      type="text"
      name="name"
      {...props}
    />
  );
};

export default RoundInputBox;
