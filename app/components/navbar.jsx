"use client";
import { useState } from "react";
import {
  FaChevronDown,
  FaMoneyBillWave,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-50 flex items-center justify-between px-5 h-[8vh] shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaMoneyBillWave className="text-pink-300 scale-120" />
        <Link href="/">
          <div className="font-[Dancing_Script] font-black text-3xl">Qián</div>
        </Link>
        <FaMoneyBillWave className="text-pink-300 scale-120" />
      </div>

      {/* DESKTOP NAV (unchanged) */}
      <div className="hidden md:flex items-center space-x-5 relative">
        <Link href="/">
          <div className="hover:text-pink-400 transition-colors">Dashboard</div>
        </Link>

        <Link href="/expenses">
          <div className="hover:text-pink-400 transition-colors">Expenses</div>
        </Link>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center hover:text-pink-400 transition-colors"
          >
            Budgets
            <FaChevronDown
              className={`ml-1 mt-0.5 text-pink-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-8 left-0 bg-white border border-pink-100 shadow-lg rounded-lg w-36 py-2 z-50 animate-fadeIn">
              <Link
                href="/budgets/daily-budgets"
                className="block px-4 py-2 text-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                Daily
              </Link>
              <Link
                href="/budgets/weekly-budgets"
                className="block px-4 py-2 text-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                Weekly
              </Link>
              <Link
                href="/budgets/monthly-budgets"
                className="block px-4 py-2 text-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                Monthly
              </Link>
            </div>
          )}
        </div>

        <Link href="/savings">
          <div className="hover:text-pink-400 transition-colors">Savings</div>
        </Link>
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-pink-400 text-2xl"
        onClick={() => setIsMobileMenu(!isMobileMenu)}
      >
        {isMobileMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU (NEW, but uses same links) */}
      {isMobileMenu && (
        <div className="absolute top-[8vh] left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden py-5 z-50">
          <div className="flex flex-col space-y-4 px-5">
            <Link href="/" onClick={() => setIsMobileMenu(false)}>
              Dashboard
            </Link>

            <Link href="/expenses" onClick={() => setIsMobileMenu(false)}>
              Expenses
            </Link>

            {/* MOBILE BUDGETS */}
            <details className="cursor-pointer">
              <summary className="flex items-center justify-between">
                Budgets
                <FaChevronDown className="text-pink-400" />
              </summary>

              <div className="flex flex-col pl-4 mt-2 space-y-2">
                <Link
                  href="/budgets/daily-budgets"
                  onClick={() => setIsMobileMenu(false)}
                >
                  Daily
                </Link>
                <Link
                  href="/budgets/weekly-budgets"
                  onClick={() => setIsMobileMenu(false)}
                >
                  Weekly
                </Link>
                <Link
                  href="/budgets/monthly-budgets"
                  onClick={() => setIsMobileMenu(false)}
                >
                  Monthly
                </Link>
              </div>
            </details>

            <Link href="/savings" onClick={() => setIsMobileMenu(false)}>
              Savings
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
