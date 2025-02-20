import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function UserModal({ open, setOpen, user }) {
    if (!user) return null;

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        {/* Close Button */}
                        <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:ring-offset-2"
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Modal Content */}

                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-2xl font-bold text-cyan-900">
                                    User Details
                                </DialogTitle>
                                <div className="mt-6 space-y-4">
                                    {/* User Name */}
                                    <div className="flex items-center space-x-4">
                                        <span className="text-lg font-medium text-gray-700">Name:</span>
                                        <span className="text-lg text-gray-900">{user.name} {user.last_name} </span>
                                    </div>

                                    {/* User Age */}
                                    <div className="flex items-center space-x-4">
                                        <span className="text-lg font-medium text-gray-700">Age:</span>
                                        <span className="text-lg text-gray-900">{user.age}</span>
                                    </div>

                                    {/* User Points */}
                                    <div className="flex items-center space-x-4">
                                        <span className="text-lg font-medium text-gray-700">Points:</span>
                                        <span className="text-lg text-gray-900">{user.points} points</span>
                                    </div>

                                    {/* User Address */}
                                    <div className="flex items-start space-x-4">
                                        <span className="text-lg font-medium text-gray-700">Address:</span>
                                        <span className="text-lg text-gray-900 break-words">{user.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Close Button */}
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-900 sm:ml-3 sm:w-auto"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
