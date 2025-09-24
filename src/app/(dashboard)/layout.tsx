import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
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

        {/* main content grows to fill space */}
        <main className="flex-grow">{children}</main>

        {/* footer */}
        <footer className="bg-white border-t border-gray-200 py-4 text-center mt-4">
          <p className="font-medium text-gray-700 text-sm md:text-base">
            Mayank Jha
          </p>
          <div className="space-x-4 text-sm flex justify-center items-center">
            <Link
              href="https://github.com/getMayankJha"
              target="_blank"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <FaGithub /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/getmayankjha/"
              target="_blank"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <FaLinkedin /> LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
