import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Home.css';

const Home = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [size, setSize] = useState(10); // 페이지당 항목 수
    const [query, setQuery] = useState(null);
    const [paging, setPaging] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (query != null) {
            const params = { query: query, page };
            axios.get(process.env.REACT_APP_BACK_HOST + '/search', { params })
                .then(res => {
                    setList(res.data.list);
                    setTotal(Number(res.data.total));
                    setSize(Number(res.data.size));
                    setPaging(Array.from({ length: Math.ceil(res.data.total / res.data.size) }, (_, i) => i));
                })
                .catch(error => console.log(error));
        }
    }, [query, page]);

    const submitEvent = e => {
        e.preventDefault();
        setQuery(e.target.query.value);
        setPage(0);
    };

    const clickEvent = id => {
        navigate(`/map/${id}`);
    };

    const pagingEvent = (index) => {
        setPage(index);
    };

    const navEvent = (isPrevious) => {
        const maxPage = Math.ceil(total / size) - 1;
        if (isPrevious) {
            setPage((prevPage) => Math.max(prevPage - 10, 0));
        } else {
            setPage((prevPage) => Math.min(prevPage + 10, maxPage));
        }
    };

    // 현재 페이징 그룹 계산 (10개씩 표시)
    const pagingStart = Math.floor(page / 10) * 10;
    const pagingEnd = Math.min(pagingStart + 10, paging.length);

    return (
        <div className="container my-5 p-4 bg-light rounded shadow-lg">
            <div className="search-box text-center mb-4">
                <h1 className="text-success">의류수거함 조회</h1>
                <form onSubmit={submitEvent} className="d-flex justify-content-center mt-3">
                    <input type="text" className="form-control w-50 me-2" placeholder="구를 입력하세요 (예: 영등포구, 서대문구)" name="query" />
                    <button type="submit" className="btn btn-success">🔍</button>
                </form>
            </div>
            {list.length !== 0 ? (
                <div>
                    <h2 className="text-success text-center mb-3">총 {total}건 조회됨</h2>
                    <table className="table table-striped table-hover text-center">
                        <thead className="table-success">
                            <tr>
                                <th>행정동</th>
                                <th>수거함 주소</th>
                                <th>지도링크</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list?.map((v, i) => (
                                <tr key={i}>
                                    <td>{v.name}</td>
                                    <td className="text-start">{v.address}</td>
                                    <td>
                                        <button className="btn btn-link text-success" onClick={() => clickEvent(v.id)}>
                                            지도 버튼
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="paging-container d-flex justify-content-center mt-3">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" onClick={() => navEvent(true)}>&lt;&lt;</button>
                            </li>
                            {paging.slice(pagingStart, pagingEnd).map((v, i) => (
                                <li className={`page-item ${v === page ? "active" : ""}`} key={i}>
                                    <button className="page-link" onClick={() => pagingEvent(v)}>{v + 1}</button>
                                </li>
                            ))}
                            <li className="page-item">
                                <button className="page-link" onClick={() => navEvent(false)}>&gt;&gt;</button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p className="text-muted text-center">검색 결과가 없습니다.</p>
            )}
        </div>
    );
}

export default Home;
