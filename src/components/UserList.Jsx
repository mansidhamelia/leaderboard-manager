import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import AlertDialog from "./baseComponents/AlertDialogBoxComponent";
import Table from "./baseComponents/UserTableComponent";
import AddUserForm from "./ModalComponents/AddUserModal";
import Pagination from "./baseComponents/BasePaginationComponent";
import Notification from "./baseComponents/BaseNotificationComponent";

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

    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const API_BASE_URL = "https://json-server-api-qd86.onrender.com";

    const columns = [
        { key: "name", label: "Name", onClick: () => handleSort('name') },
        { key: "points", label: "Points", onClick: () => handleSort('points') },
    ];

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('desc');
        }
    };

    useEffect(() => {
        axios.get(`${API_BASE_URL}/users`)
            .then(response => {
                setUsers(response.data);
                setCurrentPage(1);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setIsLoading(false);
            })
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // Handle sorting
    const sortedUsers = useMemo(() => {
        if (!sortBy) return users;
        return [...users].sort((a, b) => {
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
    }, [users, sortBy, sortDirection]);

    const filteredUsers = sortedUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // update points
    const handleUpdatePoints = (userId, points) => {
        const user = users.find(user => user.id === userId);
        if (!user) return;

        const newPoints = Math.max(user.points + points, 0);

        axios.patch(`${API_BASE_URL}/users/${userId}`, { points: newPoints })
            .then(response => {
                const updatedUser = users.map(user =>
                    user.id === userId ? { ...user, points: response.data.points } : user
                );
                setUsers(updatedUser);
            })
            .catch(error => console.error("Error updating points:", error));
    };

    // Delete a user
    const handleDeleteUser = () => {
        if (!selectedUserId) return;

        axios.delete(`${API_BASE_URL}/users/${selectedUserId}`)
            .then(() => {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== selectedUserId));
                setNotificationMessage("User deleted successfully!");
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            })
            .catch(error => console.error("Error deleting user:", error))
            .finally(() => {
                setIsAlertOpen(false);
            });
    };

    const confirmDeleteUser = (userId) => {
        setSelectedUserId(userId)
        setIsAlertOpen(true)
    };

    const handleAddUser = (newUser) => {
        // name validation
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === newUser.name) {

                console.log("User already exists");
                setIsAddUserModalOpen(false)
                setNotificationMessage("User already exists!");
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
                return;
            }
        }

        axios.post(`${API_BASE_URL}/users`, newUser)
            .then(response => {
                const updatedUsers = [...users, response.data];
                setUsers(updatedUsers);
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

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div>
            <h1 className="font-bold text-cyan-900 text-4xl my-3" >Leaderboard</h1>
            {isLoading ? (
                <p style={{ color: "var(--text-color" }}>Loading...</p>
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
                    />
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