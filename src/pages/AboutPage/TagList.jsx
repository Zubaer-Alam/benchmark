import clsx from "clsx";

export function TagList({ className, children }) {
  return (
    <ul role="list" className={clsx(className, "flex flex-wrap gap-4")}>
      {children}
    </ul>
  );
}

export function TagListItem({ className, children }) {
  return (
    <li
      className={clsx(
        "rounded-full md:bg-neutral-950 px-4 py-1.5 text-sm md:text-neutral-100",
        className
      )}
    >
      {children}
    </li>
  );
}
