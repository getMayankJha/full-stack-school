import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col min-h-screen">
        <Navbar />

        {/* main content fills available height */}
        <main className="flex-grow overflow-auto">{children}</main>

        {/* footer: light theme to match site */}
        <footer className="bg-white border-t border-gray-200 py-4 text-center">
          <p className="font-medium text-gray-700 text-sm md:text-base">
            Mayank Jha
          </p>
          <div className="space-x-4 text-sm">
            <Link
              href="https://github.com/getMayankJha"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/getmayankjha/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
