import CountUp from "react-countup";

import { cn } from "@/lib/utils";

interface IContentProps {
  title: string;
  value: number;
  className?: string;
  isPrice?: boolean;
}

export const Content: React.FC<IContentProps> = ({
  title,
  value,
  isPrice,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-[20rem] flex-col gap-4 rounded-lg bg-gray-200 p-2",
        className
      )}
    >
      <p className="text-lg font-semibold text-gray-900">{title}</p>
      <p className="inline-flex h-full items-center justify-center text-center text-6xl font-bold">
        {isPrice && <span className="mr-2">R$</span>}
        <CountUp start={0} end={value} duration={5} />
      </p>
    </div>
  );
};
