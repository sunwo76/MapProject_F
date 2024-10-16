
const SearchHistory = () => {
    return (
        <div className="container mt-5">
            <h2>Search History</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>District</th>
                        <th>Searched At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>searchHistory.id</td>
                        <td>searchHistory.userId</td>
                        <td>searchHistory.district</td>
                        <td>searchHistory.searchedAt</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SearchHistory;