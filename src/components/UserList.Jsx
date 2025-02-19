import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertDialog from "./basecomponents/AlertDialogBox";
import Table from "./basecomponents/UserTable";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchUsers, setSearchUsers] = useState('');
    const [sortBy, setSortBy] = useState('points');
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)

    const columns = [
        { key: "name", label: "Name", onClick: () => setSortBy("name") },
        { key: "age", label: "Age" },
        { key: "points", label: "Points", onClick: () => setSortBy("points") }
    ];

    useEffect(() => {
        axios.get('http://localhost:5000/user')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error))
    }, []);
    // Handle sorting
    const sortedUsers = users.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'points') return b.points - a.points;
        return 0;
    });

    // Handle filtering
    const filteredUsers = sortedUsers.filter(user =>
        user.name.toLowerCase().includes(searchUsers.toLowerCase())
    );

    // Update user points
    const handleUpdatePoints = (userId, points) => {
        axios.patch(`http://localhost:5000/users/${userId}`, { points })
            .then(response => {
                setUsers(users.map(user =>
                    user.id === userId ? { ...user, points: user.points + points } : user
                ));
                console.log(points, "points increment");
            })
            .catch(error => console.error(error));
    };



    // Delete a user
    const handleDeleteUser = () => {
        if (!selectedUserId) return

        axios.delete(`http://localhost:5000/users/${selectedUserId}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== selectedUserId));
            })
            .catch(error => console.error(error))
            .finally(() => {
                setIsAlertOpen(false)
            })
    };
    const confirmDeleteUser = (userId) => {
        setSelectedUserId(userId)
        setIsAlertOpen(true)
    }

    const onAddUser = () => {

    }

    return (
        <div>
            <h1 className="font-bold text-cyan-900 text-4xl">Leaderboard</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchUsers}
                onChange={(e) => setSearchUsers(e.target.value)}
            />

            <Table
                columns={columns}
                data={filteredUsers}
                handleUpdatePoints={handleUpdatePoints}
                confirmDeleteUser={confirmDeleteUser}
                onAddUser={onAddUser}
            />
            {/* <table>
                <thead>
                    <tr>
                        <th onClick={() => setSortBy('name')}>Name</th>
                        <th>Age</th>
                        <th onClick={() => setSortBy('points')}>Points</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.points}</td>
                            <td>
                                <button onClick={() => handleUpdatePoints(user.id, 1)}>+</button>
                                <button onClick={() => handleUpdatePoints(user.id, -1)}>-</button>
                                <button onClick={() => confirmDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <AlertDialog
                isOpen={isAlertOpen}
                onClose={() => setIsAlertOpen(false)}
                onConfirm={handleDeleteUser}
                title="Delete User"
                message="Are you sure you want to delete this user? This action cannot be undone."
            />
        </div>
    );

};
export default UserList;