import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between md:mt-24 mt-16 md:p-24 p-[58px]">
      <Link className={cn(buttonVariants({ variant: "outline"}) )} href={"/image-classification"}>Start Here!</Link>
    </main>
    </>
  );
}
