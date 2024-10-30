
const UserList = () => {
    return (
        <div className="container mt-5">
            <h2>User List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>user.id</td>
                        <td>user.email</td>
                        <td>user.role</td>
                        <td>user.createdAt</td>
                        <td>user.updatedAt</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserList;