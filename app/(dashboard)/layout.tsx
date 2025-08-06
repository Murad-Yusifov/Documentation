import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {/* Menu */}
        <div className="">
            <Image src="/vercel.svg" alt="" width={22} height={22}/>
            

        </div>
        {/* main */}
        <div className="">
            {children}
        </div>
        </div>
  );
}
