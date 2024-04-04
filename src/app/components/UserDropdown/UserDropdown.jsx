import { Menu, Transition } from "@headlessui/react";
import UserDropdownItem from "./UserDropdownItem";
export default function UserDropdown() {
  return (
    <div className="relative inline-block">
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex items-center justify-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200">              
              User
            </Menu.Button>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute end-0 z-10 mt-2 w-40 rounded-lg shadow-xl ltr:origin-top-right rtl:origin-top-left"
              >
                <div className="rounded-lg bg-white py-2.5 ring-1 ring-black ring-opacity-5">
                  <Menu.Item>
                    <UserDropdownItem title="Profile" icon="user" />
                  </Menu.Item>
                  <Menu.Item>
                    <UserDropdownItem title="Settings" icon="settings" />
                  </Menu.Item>
                  <hr className="my-2.5 border-neutral-100" />
                  <Menu.Item>
                    <UserDropdownItem title="Log out" icon="logout" />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
