import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import LeftSideBar from '../../components/layout/LeftSideBar'
import TopBar from "@/components/layout/TopBar";
import {ToasterProvider} from '@/lib/ToasterProvider'

const poppins = Poppins({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "ElectroElite - Admin Dashboard",
  description: "Admin Dashboard for ElectroElite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>

    
          <main>
            <ToasterProvider/>
            <div className="flex max-lg:flex-col">

            <LeftSideBar/>
            <TopBar/>
            {children}
            </div>
            </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
