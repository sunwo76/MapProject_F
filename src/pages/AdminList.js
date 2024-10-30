
const AdminList = () => {
    return (
        <div className="container mt-5">
            <h2>Admin List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Admin Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>admin.id</td>
                        <td>admin.name</td>
                        <td>admin.role</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminList;