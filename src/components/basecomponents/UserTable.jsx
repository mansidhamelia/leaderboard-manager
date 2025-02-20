import { useState } from 'react';
import { ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Table({ columns, data, onAddUser, handleUpdatePoints, confirmDeleteUser }) {

    const [searchTerm, setSearchTerm] = useState('');

    // Handle filtering
    const filteredData = data.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center justify-between">

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
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        onClick={onAddUser}
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm 
                        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                                            className={` px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer ${col.onClick ? "hover:text-indigo-600" : ""}`}
                                        >
                                            <a href="#" className="group inline-flex" >
                                                {col.label}
                                                <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                </span>
                                            </a>
                                        </th>
                                    ))}
                                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {filteredData.map((user) => (
                                    <tr key={user.id} className="even:bg-gray-50 text-left">
                                        {columns.map((col) => (
                                            <td key={col.key} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {user[col.key]}
                                            </td>
                                        ))}
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <div className="flex gap-2">
                                                <button onClick={() => handleUpdatePoints(user.id, 1)} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
                                                <button onClick={() => handleUpdatePoints(user.id, -1)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                                                <button onClick={() => confirmDeleteUser(user.id)} className="px-2 py-1 bg-gray-500 text-white rounded">Delete</button>
                                            </div>
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{actions(user)}</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
