import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "size-14 inline-flex bg-neutral-300 rounded-2xl items-center justify-center text-xl text-neutral-900 font-medium",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Key;
