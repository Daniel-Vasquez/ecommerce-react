import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IconMenu } from '@/components/Icons/LogoMenu/index.jsx'
import { ROUTES } from "@/constants/routes";

export function DropdownMenu() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="p-2 rounded-md hover:bg-blue">
          <IconMenu className="text-golden w-7 h-7" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 w-56 focus:outline-none">
            <div className="bg-blue flex flex-col gap-3 px-4 py-7 rounded-md border border-border">
              {ROUTES.map(({ href, label }, index) => (
                <Menu.Item key={index}>
                  <a
                    href={href}
                    className="bg-blue-medium text-white rounded-md px-3 py-2 font-bold hover:bg-golden hover:text-black"
                  >
                    {label}
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
