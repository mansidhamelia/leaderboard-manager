import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const AddUserForm = ({ onAddUser, onClose }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [last_name, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { name, last_name, age: parseInt(age), points: 0, address };
        onAddUser(newUser); // Call the onAddUser function passed from UserList
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="text"
        //         placeholder="Name"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //         required
        //     />
        //     <input
        //         type="number"
        //         placeholder="Age"
        //         value={age}
        //         onChange={(e) => setAge(e.target.value)}
        //         required
        //     />
        //     <input
        //         type="text"
        //         placeholder="Address"
        //         value={address}
        //         onChange={(e) => setAddress(e.target.value)}
        //         required
        //     />
        //     <button type="submit">Add User</button>
        // </form>
        <div className="grid gap-x-6 gap-y-6 py-6 ">
            <div className="px-4 sm:px-0">
                <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-left text-sm/6 font-medium text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    placeholder="First Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-900 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-left  text-sm/6 font-medium text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    placeholder="Last Name"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                    autoComplete="last-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-900 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-left  text-sm/6 font-medium text-gray-900">
                                Age
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Age"
                                    type="number"
                                    placeholder="Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    autoComplete="age"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-900 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-left text-sm/6 font-medium text-gray-900">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    autoComplete="street-address"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                Country
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div> */}

                        {/* <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div> */}


                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button type="button" onClick={onClose} className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-900"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;