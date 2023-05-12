import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Header } from "~/components/header";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <SignedIn>
              <h1 className="text-4xl text-white">Placeholder</h1>
            </SignedIn>
            <SignedOut>
              <h1 className="text-4xl text-white">Sign in</h1>
              <SignIn />
            </SignedOut>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
