import { useState } from 'react';
import { ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import UserModal from './UserModalComponent';

export default function Table({ columns, data, onAddUser, handleUpdatePoints, confirmDeleteUser, searchTerm, setSearchTerm }) {

    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle filtering
    // const filteredData = data.filter(user =>
    //     user.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // Open modal with selected user
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">

                <div className="sm:flex-auto text-left">
                    <h1 className="text-base font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users, including their details and actions.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative ">
                    <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-800 focus:ring-cyan-800 sm:text-sm"
                    />
                </div>

                <div className="mt-4 sm:ml-12 sm:mt-0 sm:flex-none">
                    <button
                        onClick={onAddUser}
                        className="block rounded-md bg-cyan-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm 
                        hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-900"
                    >
                        Add User
                    </button>
                </div>
            </div>


            {/* Table */}
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    {columns.map((col) => (
                                        <th
                                            key={col.key}
                                            onClick={col.onClick}
                                            className={` px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer ${col.onClick ? "hover:text-cyan-900" : ""}`}
                                        >
                                            {/* <a href="#" className="group inline-flex" >
                                                {col.label}
                                                <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                </span>
                                            </a> */}
                                            <div className="group inline-flex items-center">
                                                {col.label}
                                                {/* Conditionally render the icon only for Name and Points columns */}
                                                {col.onClick && (
                                                    <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {data.map((user) => (
                                    <tr key={user.id} className="even:bg-gray-50 text-left">
                                        {columns.map((col) => (
                                            // <td key={col.key} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <td
                                                key={col.key}
                                                className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${col.key === "name" ? "text-gray-900 cursor-pointer hover:text-cyan-800" : ""
                                                    }`}
                                            >
                                                {col.key === "name" ? (
                                                    <button
                                                        onClick={() => handleOpenModal(user)}
                                                        className="text-gray-900 hover:text-cyan-800"
                                                    >
                                                        {` ${user.name} ${user.last_name}`}
                                                    </button>
                                                )
                                                    : col.key === "points" ? (
                                                        `${user[col.key]} points`
                                                    ) : (
                                                        user[col.key]
                                                    )}
                                            </td>
                                        ))}
                                        {/* <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500"> */}
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-3">
                                            <div className="flex gap-2 justify-end">
                                                <button onClick={() => handleUpdatePoints(user.id, 1)} className="whitespace-nowrap px-2 py-1 text-sm text-gray-500">
                                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-base font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                        +
                                                    </span>
                                                </button>
                                                <button onClick={() => handleUpdatePoints(user.id, -1)} className="whitespace-nowrap px-2 py-1 text-sm text-gray-500">
                                                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-base font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                                        -
                                                    </span>
                                                </button>
                                                <button onClick={() => confirmDeleteUser(user.id)} className="whitespace-nowrap px-2 py-1 bg-cyan-900 text-white rounded-md">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <UserModal user={selectedUser} open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
    );
}
