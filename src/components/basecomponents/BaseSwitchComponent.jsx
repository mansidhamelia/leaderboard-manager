import { Switch as HeadlessSwitch } from '@headlessui/react';

const Switch = ({ checked, onChange }) => {
    return (
        <HeadlessSwitch
            checked={checked}
            onChange={onChange}
            className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
        >
            <span className="sr-only">Toggle</span>
            <span
                aria-hidden="true"
                className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-cyan-600"
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 inline-block size-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
            />
        </HeadlessSwitch>
    );
};

export default Switch;