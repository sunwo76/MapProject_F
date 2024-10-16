import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Home.css';

const Home = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [size, setSize] = useState(0);
    const [next, setNext] = useState(false);
    const [query, setQuery] = useState(null);
    const [paging, setPaging] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        if(query != null) {
            const params = {query: query, page}
            console.log(params);
            axios.get(process.env.REACT_APP_BACK_HOST + "/search", { params })
                .then(res => {
                    console.log(res);
                    setList(res.data.list);
                    setTotal(Number( res.data.total ));
                    setSize(Number( res.data.size ));
                    setNext(Number( res.data.nextPage ));
                    setPaging(res.data.paging);
                })
                .catch(error => console.log(error));
        }
    }, [query, page]);
    const mapEvent = no => {
        console.log(no);
    }
    const submitEvent = e => {
        e.preventDefault();
        setQuery(e.target.query.value);
        setPage(0);
    }
    const clickEvent = id => {
        console.log(id);
        navigate(`/map/${id}`);
    }
    const pagingEvent = (index) => {
        setPage(index);
    }
    const navEvent = (type) => {
        if(type) {
            if(paging[paging.length - 1] - 10 >= 0) setPage(page - 10);
        } else {
            if(page + 10 < Math.floor( total / size )) setPage(page + 10);
        }
    }
    return (
        <div className="search-container">
            <div className="search-box">
                <h1>의류수거함 조회</h1>
                <form onSubmit={submitEvent}>
                    <input type="text" className="search-bar" placeholder="구를 입력하세요 (예: 종로구, 서대문구)" name="query" />
                    <button type="submit" className="search-button">🔍</button>
                </form>
            </div>
            {
                list.length !== 0 ? 
                <div style={{display: 'block'}}>
                    <h1>총건수 {total}</h1>
                    <table className='table text-center'>
                        <thead>
                            <tr>
                                <td>행정동</td>
                                <td>수거함 주소</td>
                                <td>지도링크</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            list?.map((v, i) => {
                                return (
                                    <tr key={i} onClick={() => clickEvent(v.id)}>
                                        <td>{v.name}</td>
                                        <td className='text-start'>{v.address}</td>
                                        <td className='cursor-pointer link-btn' onClick={()=> mapEvent(v.id)}>지도 버튼</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <div className='paging-container'>
                        <ul>
                            <li onClick={()=>navEvent(true)}>&lt;&lt;</li>
                        {
                            paging?.map((v, i) => <li key={i} onClick={() => pagingEvent(v)}>{v + 1}</li>)
                        }
                            <li onClick={()=>navEvent(false)}>&gt;&gt;</li>
                        </ul>
                    </div>
                </div> 
                : 
                <></>
            }
            
        </div>
    );
}

export default Home;
