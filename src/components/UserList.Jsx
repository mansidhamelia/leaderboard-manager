import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertDialog from "./basecomponents/AlertDialogBox";
import Table from "./basecomponents/UserTable";
import AddUserForm from "./AddUserForm";
import Pagination from "./basecomponents/BasePaginationComponent";
import Notification from "./basecomponents/BaseNotificationComponent";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [sortBy, setSortBy] = useState('points');
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState();
    const [usersPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDirection, setSortDirection] = useState('desc');

    // Notification state
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const columns = [
        { key: "name", label: "Name", onClick: () => handleSort('name') },
        { key: "points", label: "Points", onClick: () => handleSort('points') },
    ];

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            console.log('clicked')
        } else {
            setSortBy(column);
            console.log('not clicked')
            setSortDirection('desc');
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3051/users')
            .then(response => {
                setUsers(response.data);
                setCurrentPage(1);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            })
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // Handle sorting
    const sortedUsers = users.sort((a, b) => {
        if (sortBy === 'name') {
            return sortDirection === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
        if (sortBy === 'points') {
            return sortDirection === 'asc'
                ? a.points - b.points
                : b.points - a.points;
        }
        return 0;
    });

    const filteredUsers = sortedUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // update points
    const handleUpdatePoints = (userId, points) => {
        const user = users.find(user => user.id === userId);
        if (!user) return;

        const newPoints = user.points + points;
        axios.patch(`http://localhost:3051/users/${userId}`, { points: newPoints })
            .then(response => {
                setUsers(users.map(user =>
                    user.id === userId ? { ...user, points: response.data.points } : user
                ));
            })
            .catch(error => console.error(error));
    };

    // Delete a user
    const handleDeleteUser = () => {
        if (!selectedUserId) return;

        axios.delete(`http://localhost:3051/users/${selectedUserId}`)
            .then(() => {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== selectedUserId));
                setNotificationMessage("User deleted successfully!");
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            })
            .catch(error => console.error(error))
            .finally(() => {
                setIsAlertOpen(false);
            });
    };

    const confirmDeleteUser = (userId) => {
        setSelectedUserId(userId)
        setIsAlertOpen(true)
    };

    const handleAddUser = (newUser) => {
        axios.post('http://localhost:3051/users', newUser)
            .then(response => {
                setUsers([...users, response.data]);
                setIsAddUserModalOpen(false);

                setNotificationMessage("User added successfully!");
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            })
            .catch(error => console.error(error));
    }

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h1 className="font-bold text-cyan-900 text-4xl my-3">Leaderboard</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Table
                        columns={columns}
                        data={currentUsers}
                        handleUpdatePoints={handleUpdatePoints}
                        confirmDeleteUser={confirmDeleteUser}
                        onAddUser={() => setIsAddUserModalOpen(true)}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
                        onPageChange={handlePageChange}
                    />
                </>
            )}

            <Notification
                message={notificationMessage}
                show={showNotification}
                onClose={() => setShowNotification(false)}
            />
            <AlertDialog
                isOpen={isAlertOpen}
                onClose={() => setIsAlertOpen(false)}
                onConfirm={handleDeleteUser}
                title="Delete User"
                message="Are you sure you want to delete this user? This action cannot be undone."
            />
            {/* Add User Modal */}
            {isAddUserModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold text-gray-900">Add User</h2>
                        <AddUserForm onAddUser={handleAddUser} onClose={() => setIsAddUserModalOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};
export default UserList;