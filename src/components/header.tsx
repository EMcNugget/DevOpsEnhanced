import { UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (  
    <nav className="flex items-center justify-end p-1 pr-2">
      <UserButton />
    </nav>
  );
};
