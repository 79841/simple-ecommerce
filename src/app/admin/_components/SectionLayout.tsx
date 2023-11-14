import { PropsWithChildren } from "react";

type TSectionLayoutProps = PropsWithChildren & { title: string };
const SectionLayout = ({ children, title }: TSectionLayoutProps) => {
  return (
    <div className="flex justify-start items-center flex-col rounded-md p-5 border-black border-2 border-solid w-[25rem]">
      <div className="text-3xl mb-5">{title}</div>
      {children}
    </div>
  );
};

export default SectionLayout;
