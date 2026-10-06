import InfoBar from "./InfoBar";
import Map from "./Map";
import Header from "./Header";
import { useState } from "react";

export default function Search() {
    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState({});
    const [coordinates, setCoordinates] = useState([51.505, -0.09]);
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${apiUrl}${inputValue}`);
        const data = await res.json();

        setResponse(data);
        setCoordinates([data.location.lat, data.location.lng]);
    };

    return (
        <div>
            <Header>
                <h1 className="text-center text-4xl font-medium text-white">IP Address Tracker</h1>
                <form onSubmit={handleSubmit} className="flex w-full max-w-xl justify-center">
                    <input
                        type="text"
                        className="w-full rounded-l-md border bg-white p-2 text-slate-900"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search for an IP address"
                    />
                    <button type="submit" className="rounded-r-md border bg-blue-500 px-4 py-2 text-white">
                        Search
                    </button>
                </form>
            </Header>
            <InfoBar response={response}></InfoBar>
            <Map coordinates={coordinates} />
        </div>
    );
}