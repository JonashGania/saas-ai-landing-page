import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "inline-flex gap-2 border border-violet-600 px-3 py-1 rounded-full text-violet-600 uppercase",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span>{children}</span>
    </div>
  );
};

export default Tag;
