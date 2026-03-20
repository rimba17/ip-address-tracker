"use client";
import Search from "./Search";
import Card from "./Card";
import { useState } from "react";
import dynamic from "next/dynamic";
import LoadingSearchCard from "./loading/LoadingSearchCard";
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
const WrapperClient = ({ dataUser }) => {
  const { data, success, message } = dataUser;
  const [ipData, setIpData] = useState(data);
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!inputSearch || inputSearch.trim() === "") return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?search=${inputSearch}`);
      const json = await res.json();

      if (!json.success) {
        setError(json.message);
        return;
      }
      setIpData(json.data);
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  if (!success) {
    return (
      <div className="absolute top-1/2 px-6 w-full">
        <div className="flex flex-col gap-4 items-center justify-center max-w-container mx-auto">
          <h1 className="text-white font-bold text-2xl">IP Address Tracker</h1>
          <Search />
          <div className="bg-white w-full rounded-md shadow p-4">
            <p className="text-center text-red-500 text-sm font-bold">
              failed to get data
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderCard = () => {
    if (loading) return <LoadingSearchCard />;
    if (error) {
      return (
        <div className="bg-white w-full rounded-md shadow p-4">
          <p className="text-center text-red-500 text-sm font-bold">{error}</p>
        </div>
      );
    }
    return <Card data={ipData} />;
  };

  return (
    <>
      <div className="absolute top-8 px-6 w-full z-20">
        <div className="flex flex-col gap-4 items-center justify-center max-w-container mx-auto">
          <h1 className="text-white font-bold text-2xl">IP Address Tracker</h1>
          <Search
            inputSearch={inputSearch}
            onChange={setInputSearch}
            onSearch={handleSearch}
          />
          {renderCard()}
        </div>
      </div>
      <div className="absolute top-48 left-0 w-full h-[calc(100vh-14rem)] z-0">
        <Map lat={ipData.location.lat} lng={ipData.location.lng} />
      </div>
    </>
  );
};

export default WrapperClient;
