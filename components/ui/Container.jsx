import { cn } from "@/lib/utils";
export function Container({ children, className, as: Tag = "div", id }) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
