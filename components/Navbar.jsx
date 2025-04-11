"use client";
import { usePathname } from "next/navigation"; // Import usePathname
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GitHubButton from 'react-github-btn';
import "./Navbar.css";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Docs", href: "/docs", current: false },
  { name: "About", href: "/about-Us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const pathname = usePathname(); // Get the current path using usePathname

  // Update navigation items to reflect the current page
  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: pathname === item.href,
  }));

  return (
    <Disclosure as="nav" className="border-black/[.08]" style={{ height: "4rem" }}>
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 h-full">
        <div className="relative flex h-full items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="navbar">
              <div className="navbar-links">
                {updatedNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "dark:text-white text-black"
                        : "text-gray-500 dark:hover:text-white hover:text-black",
                      "text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="navbar-github">
                <GitHubButton
                  href="https://github.com/scade-platform/swift-android"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star buttons/github-buttons on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {updatedNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current ? "text-white" : "text-gray-400 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
