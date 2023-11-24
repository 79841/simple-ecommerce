import { ComponentPropsWithoutRef, memo } from "react";

type TRoundInputBoxProps = ComponentPropsWithoutRef<"input">;
const RoundInputBox = memo(function RoundInputBox(props: TRoundInputBoxProps) {
  return (
    <input
      className="m-2 h-8 rounded-md border-2 border-solid border-black"
      type="text"
      name="name"
      {...props}
    />
  );
});

export default RoundInputBox;
