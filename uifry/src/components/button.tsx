import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "h-[60px] rounded-md py-4 px-5 min-w-[180px] bg-black text-white text-lg font-medium",
        className
      )}
    >
      {children}
    </button>
  );
}
