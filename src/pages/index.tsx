import { UserButton, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery();

  return (
    <>
      <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <nav className="flex items-center justify-end p-1 pr-2">
          <UserButton />
        </nav>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <SignedIn>
              <h1 className="text-4xl text-white">
                {hello.data ? hello.data.greeting : "Loading tRPC Query"}
              </h1>
            </SignedIn>
            <SignedOut>
              <h1 className="text-4xl text-white">
                Sign in to view tRPC queries
              </h1>
              <SignIn />
            </SignedOut>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
