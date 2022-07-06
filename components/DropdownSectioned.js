export default function DropdownSection() {
  return (
    <div>
      <div className="inline-flex items-stretch bg-white border rounded-md">
        <a
          href="/edit"
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
        >
          Edit
        </a>

        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg"
            role="menu"
          >
            <div className="flow-root py-2">
              <div className="-my-2 divide-y divide-gray-100">
                <div className="p-2">
                  <strong className="block p-2 text-xs font-medium text-gray-400 uppercase">
                    General
                  </strong>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    View on Storefront
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    View Warehouse Info
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Duplicate Product
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Unpublish Product
                  </a>
                </div>

                <div className="p-2">
                  <strong className="block p-2 text-xs font-medium text-gray-400 uppercase">
                    Danger Zone
                  </strong>

                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg hover:bg-red-50"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
