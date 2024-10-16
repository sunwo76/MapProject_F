import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Map.css';
import { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const MapPage = () => {
    const {id} = useParams();
    const [data, setData] = useState({latitude: 0, longitude: 0, address: ''});
    const [isOpen, setIsOpen] = useState(false);
    useKakaoLoader({
        appkey: "a537721ae1c3852ff074c862269169ea"
    });
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACK_HOST}/map/${id}`)
            .then(res=>{
                console.log(res);
                setData(res.data.mapDTO);
            })
            .catch(error=>console.log(error));
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">의류 수거함 위치 지도</h1>

            {/* <div id="map" className="mb-4"></div> */}
            <Map style={{width: '100%', height: '70vh', margin: '50px 0 0'}} center={{lat: data.latitude, lng: data.longitude}} level={3}>
                <MapMarker position={{lat: data.latitude, lng: data.longitude}} clickable={true} onClick={() => setIsOpen(true)}>
                {isOpen && (
                    <div style={{ minWidth: "150px" }}>
                        <img
                        alt="close"
                        width="14"
                        height="13"
                        src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                        style={{
                            position: "absolute",
                            right: "5px",
                            top: "5px",
                            cursor: "pointer",
                        }}
                        onClick={() => setIsOpen(false)}
                        />
                        <div style={{ padding: "5px", color: "#000" }}>{data.address}</div>
                    </div>
                )}
                </MapMarker>
            </Map>
        </div>
    )
}

export default MapPage;