import ChiefCard from "../chiefcard/chiefcard";
import React,{useEffect,useState} from "react";
import LoadingSpinner from "../loadingsnipper/loadingspinner";
function ChiefsSection(){
    let [isChiefsLoading, setChiefsLoading] = useState(false);
    let [chiefs, setChiefs] = useState([]);
    let [isChiefsError, setChiefsError] = useState(false);
    useEffect(() => {
        getChiefs()
    },[])
    const getChiefs = async () => {
        try {
            setChiefsLoading(true);
            let response = await fetch('http://localhost:5000/chiefs');
                const data = await response.json();
                chiefs = data; 
                setChiefs(data);
                setChiefsLoading(false); 
        } catch (e) {
            setChiefsLoading(false);
           setChiefsError(true);  
        }

    }
    return (
        <div className="section chiefs">
            <h1 className="title border-start border-5 border-primary ps-4 mb-5">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
            {isChiefsLoading && <LoadingSpinner/>}
            {isChiefsError && <div className="alert alert-danger" role="alert">Error Has Happened whe reterive data </div>}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}
export default ChiefsSection;