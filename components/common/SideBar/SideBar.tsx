"use client";

import React from "react";
import {
  BarChart3,
  Users,
  Bed,
  Calendar,
  Wallet,
  MessageSquare,
  Info,
  User,
  Inbox,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "../../../interfaces/Navbar";

const SidebarLink = ({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) => {
  const isActive = pathname === item.href;
  return (
    <Link
      href={item.href}
      className={`p-2 rounded-xl transition-all duration-200 group relative ${
        isActive
          ? "bg-white text-indigo-600 shadow-sm"
          : "text-gray-400 hover:bg-white hover:text-indigo-600"
      }`}
    >
      <item.icon size={24} />
      <span className="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-60">
        {item.label}
      </span>
    </Link>
  );
};

export default function SideBar() {
  const pathname = usePathname();

  const groups = [
    {
      id: "stats",
      items: [{ icon: BarChart3, label: "Statistics", href: "/statistics" }],
    },
    {
      id: "main",
      items: [
        { icon: User, label: "Guests", href: "/guestManagement" },
        { icon: Users, label: "Groups", href: "/groups" },
        { icon: Bed, label: "Rooms", href: "/rooms" },
        { icon: Calendar, label: "Calendar", href: "/calendar" },
      ],
    },
    {
      id: "reports",
      items: [
        { icon: Inbox, label: "Archive", href: "/archive" },
        { icon: Wallet, label: "Wallet", href: "/wallet" },
        { icon: FileText, label: "Reports", href: "/reports" },
      ],
    },
    {
      id: "support",
      items: [
        { icon: MessageSquare, label: "Messages", href: "/messages" },
        { icon: Info, label: "Info", href: "/info" },
      ],
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[70px] bg-[#F1F2F7] border-r border-indigo-500/30 flex flex-col items-center py-6 z-50">
      <div className="mb-12">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl cursor-pointer shadow-lg shadow-indigo-200">
          S
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-10 items-center w-full">
        {groups.slice(0, 3).map((group) => (
          <div
            key={group.id}
            className="flex flex-col gap-4 items-center w-full"
          >
            {group.items.map((item) => (
              <SidebarLink key={item.href} item={item} pathname={pathname} />
            ))}
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-4 mt-auto mb-4 items-center w-full">
        {groups[3].items.map((item) => (
          <SidebarLink key={item.href} item={item} pathname={pathname} />
        ))}
      </div>
    </div>
  );
}
