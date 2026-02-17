"use client";

import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function TopBar() {
    return (
        <div className="h-12.5 bg-white border-b border-gray-100 flex items-center justify-between px-8 fixed w-[85%] left-1/2 -translate-x-1/2 top-0 z-40">
            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2 w-100">
                <Search className="text-gray-400 mr-2" size={20} />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                />
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-gray-400 hover:text-gray-600 transition-colors p-2">
                    <Bell size={24} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                    <div className="top-navName flex justify-center items-center gap-4">
                        <div className="top-navContent">
                            <div className="top-navName flex items-center gap-3.5">
                                <div >
                                    <span className="text-sm font-semibold text-gray-800">Ahmed Amin</span>
                                </div>
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold overflow-hidden">
                                    A
                                </div>
                            </div>
                        </div>

                        <div className="top-navicon">
                            <ChevronDown className="text-gray-400" size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
