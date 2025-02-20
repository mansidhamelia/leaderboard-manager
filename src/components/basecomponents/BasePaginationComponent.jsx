import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 my-4">
            <div className="-mt-px flex w-0 flex-1">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowLongLeftIcon aria-hidden="true" className="mr-3 size-5 text-gray-400" />
                    Previous
                </button>
            </div>
            <div className="hidden md:-mt-px md:flex">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${currentPage === page
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                    <ArrowLongRightIcon aria-hidden="true" className="ml-3 size-5 text-gray-400" />
                </button>
            </div>
        </nav>
    );
};

export default Pagination;
