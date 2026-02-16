"use client";

import React from "react";
import {
  Search,
  Download,
  Edit,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Guest } from "../../interfaces/GuestManagement";

const dummyGuests: Guest[] = [
  {
    id: "1",
    name: "Jane Cooper",
    idCard: "KA0963",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Single",
  },
  {
    id: "2",
    name: "Floyd Miles",
    idCard: "K09637",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Married",
  },
  {
    id: "3",
    name: "Ronald Richards",
    idCard: "KL0937",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Married",
  },
  {
    id: "4",
    name: "Marvin McKinney",
    idCard: "KM3794",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Single",
  },
  {
    id: "5",
    name: "Jerome Bell",
    idCard: "KL0862",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Single",
  },
  {
    id: "6",
    name: "Kathryn Murphy",
    idCard: "KS2389",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Divorced",
  },
  {
    id: "7",
    name: "Jacob Jones",
    idCard: "K78365",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Single",
  },
  {
    id: "8",
    name: "Kristin Watson",
    idCard: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Divorced",
  },
];

const StatusBadge = ({ status }: { status: Guest["status"] }) => {
  const styles = {
    Single: " text-black-600 border-blue-100",
    Married: " text-black-600 border-green-100",
    Divorced: "text-black-600 border-red-100",
  };

  return (
    <span
      className={`px-6 py-2 rounded-full text-xs font-extralight border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default function GuestTable() {
  return (
    <div className="bg-gray rounded-3xl p-8 shadow-sm border border-gray-100">
      <div className="overflow-x-auto -mx-8 px-8">
        <div className="min-w-[800px]">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Guest Management</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2 w-[240px]">
                <Search className="text-gray-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-sm w-full"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-xl">
                <span>Short by:</span>
                <span className="font-semibold text-gray-800">Newest</span>
              </div>
              <div className="flex gap-2 ml-4">
                <button className="p-2 text-black hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                  <Download size={20} />
                </button>
                <button className="p-2 text-black hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                  <Edit size={20} />
                </button>
                <button className="p-2 text-black hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                  <Trash2 size={20} />
                </button>
                <button className="p-2  text-black hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="border-b border-black-20 text-gray-400 text-sm font-extrabold">
                <th className="pb-4 pt-2 font-normal">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="pb-4 pt-2 font-normal pl-4">Guest Name</th>
                <th className="pb-4 pt-2 font-normal">ID Card</th>
                <th className="pb-4 pt-2 font-normal">Phone Number</th>
                <th className="pb-4 pt-2 font-normal">Email</th>
                <th className="pb-4 pt-2 font-normal">Country</th>
                <th className="pb-4 pt-2 font-normal text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 ">
              {dummyGuests.map((guest) => (
                <tr
                  key={guest.id}
                  className="group  hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="py-4 pl-4 font-semibold text-gray-800 border-b border-gray-300">
                    {guest.name}
                  </td>
                  <td className="py-4 text-gray-600 border-b border-gray-300">
                    {guest.idCard}
                  </td>
                  <td className="py-4 text-gray-600 border-b border-gray-300">
                    {guest.phone}
                  </td>
                  <td className="py-4 text-gray-600 border-b border-gray-300">
                    {guest.email}
                  </td>
                  <td className="py-4 text-gray-800 font-medium border-b border-gray-300">
                    {guest.country}
                  </td>
                  <td className="py-4 text-right border-b border-gray-300">
                    <StatusBadge status={guest.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between mt-8">
            <p className="text-sm text-gray-400">
              Showing data 1 to 8 of 256K entries
            </p>
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              {[1, 2, 3, 4, "...", 40].map((page, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === 1
                    ? "bg-indigo-800 text-white shadow-md shadow-indigo-100"
                    : "text-gray-400 hover:bg-gray-50 bg-gray-50"
                    }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
