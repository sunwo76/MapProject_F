
const ClothingBinRegister = () => {
    return (
        <div className="container mt-5">
            <h2>Register a Clothing Bin</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter bin name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="latitude" className="form-label">Latitude</label>
                    <input type="number" step="0.000001" className="form-control" id="latitude" name="latitude" placeholder="Enter latitude" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="longitude" className="form-label">Longitude</label>
                    <input type="number" step="0.000001" className="form-control" id="longitude" name="longitude" placeholder="Enter longitude" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="district" className="form-label">District</label>
                    <input type="text" className="form-control" id="district" name="district" placeholder="Enter district" required />
                </div>
                <button type="submit" className="btn btn-primary">Register Bin</button>
            </form>
        </div>
    );
}

export default ClothingBinRegister;