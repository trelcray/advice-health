import { cn } from "@/lib/utils";

interface IContentProps {
  title: string;
  value: string;
  className?: string;
}

export const Content: React.FC<IContentProps> = ({
  title,
  value,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-80 flex-col gap-4 rounded-lg bg-gray-200 p-2",
        className
      )}
    >
      <p className="text-lg font-semibold text-gray-900">{title}</p>
      <span className="flex h-full items-center justify-center text-center text-6xl font-bold">
        {value}
      </span>
    </div>
  );
};
