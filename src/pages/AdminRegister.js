
const AdminRegister = () => {
    return (
        <div className="container mt-5">
            <h2>Register Admin</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Admin Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter admin name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <input type="text" className="form-control" id="role" name="role" placeholder="Enter admin role" required />
                </div>
                <button type="submit" className="btn btn-primary">Register Admin</button>
            </form>
        </div>
    );
}

export default AdminRegister;