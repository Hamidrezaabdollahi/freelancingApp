function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2">
      <ul className="flex flex-col items-start gap-y-4 m-4 ">{children}</ul>
    </div>
  );
}

export default Sidebar;
