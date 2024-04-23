import { useState } from "react";
import NotificationsDropdownItem from "../NotificationsDropdown/NotificationsDropdownItem";

export default function NotificationsDropdown() {
  const [notificationsDropdownOpen, setNotificationsDropdownOpen] =
    useState(false);
  return (
    <div className="relative inline-block">
      {/* <!-- Dropdown Toggle Button --> */}
      <button
        onClick={() => setNotificationsDropdownOpen(!notificationsDropdownOpen)}
        aria-expanded="notificationsDropdownOpen"
        type="button"
        id="dropdown-notifications"
        className="inline-flex items-center justify-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
        aria-haspopup="true"
      >
        <div className="absolute -end-2 -top-2">
          <span className="rounded-full bg-neutral-800 px-1.5 py-0.5 text-xs font-semibold text-white">
            3
          </span>
        </div>
        <svg
          className="hi-outline hi-bell-alert inline-block h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
          ></path>
        </svg>
      </button>
      {/* <!-- END Dropdown Toggle Button --> */}
      {/* <!-- Dropdown --> */}
      {notificationsDropdownOpen && (
        <div
          role="menu"
          aria-labelledby="dropdown-notifications"
          className="absolute -end-20 z-10 mt-2 w-64 rounded-lg shadow-xl ltr:origin-top-right rtl:origin-top-left lg:w-80"
        >
          <div className="rounded-lg bg-white py-2.5 ring-1 ring-black ring-opacity-5">
            <NotificationsDropdownItem
              time="Just now"
              title="New Ticket"
              description="Your ticket has been created."
            />
            <NotificationsDropdownItem
              time="1 day ago"
              title="New Ticket"
              description="Your ticket has been created."
            />
            <hr className="my-2.5 border-neutral-100" />
            <div className="px-4 py-1.5">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
              >
                <svg
                  className="hi-mini hi-bell-alert inline-block h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.214 3.227a.75.75 0 00-1.156-.956 8.97 8.97 0 00-1.856 3.826.75.75 0 001.466.316 7.47 7.47 0 011.546-3.186zM16.942 2.271a.75.75 0 00-1.157.956 7.47 7.47 0 011.547 3.186.75.75 0 001.466-.316 8.971 8.971 0 00-1.856-3.826z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.94 32.94 0 003.256.508 3.5 3.5 0 006.972 0 32.933 32.933 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zm0 14.5a2 2 0 01-1.95-1.557 33.54 33.54 0 003.9 0A2 2 0 0110 16.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>All notifications</span>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* <!-- END Dropdown --> */}
    </div>
  );
}
