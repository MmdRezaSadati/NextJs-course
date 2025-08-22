import Link from "next/link";
import React, { FC, ReactNode } from "react";
interface IChildren {
  children: ReactNode;
}
const DashboardLayout: FC<IChildren> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-52 p-5 bg-blue-950">
        <h3 className="text-xl">Dashboard Menu</h3>
        <ul className="underline">
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/dashboard/settings"}>Settings</Link>
          </li>
          <li>
            <Link href={"/dashboard/profile"}>Profile</Link>
          </li>
        </ul>
      </aside>
      <main className="grow">{children}</main>
    </div>
  );
};

export default DashboardLayout;
