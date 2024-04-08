import { useEffect, useState } from 'react';

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);
  const [singleCountry, setSingleCountry] = useState([]);
  //function used to set the country name we select in selectcountry state

  const handleChange = (e) => {
    setSelectCountry(e.target.value);
  };
  console.log(selectCountry);
  useEffect(() => {
    const fetchCountriesList = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      setCountryList(data);
      console.log(countryList);
    };
    fetchCountriesList();
  }, []);

  useEffect(() => {
    const fetchSingleCountry = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${selectCountry}`
      );
      const data = await res.json();
      setSingleCountry(data);
    };
    fetchSingleCountry();
  }, [selectCountry]);

  return (
    <div className="text-center m-10">
      <h1 className="text-5xl my-6 font-bold text-red-500">
        Get Countries Details
      </h1>
      <select
        className="p-2 font-bold border border-sky-500 rounded-lg"
        value={selectCountry}
        onChange={handleChange}
      >
        <option value="">Select Country</option>
        {countryList.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>

      {selectCountry && singleCountry && (
        <div className="flex justify-center">
          <div className="w-96 min-h-96 border-2 rounded-lg border-sky-500 m-8 p-8 shadow-lg  rounded-">
            <img src={singleCountry[0]?.flags.svg} />
            <h1 className="text-3xl my-2 font-bold">
              🌍 {singleCountry[0]?.name?.common}
            </h1>
            <h1 className="text-2xl font-semibold">
              Capital : {singleCountry[0]?.capital}
            </h1>
            <h1 className="text-2xl font-semibold">
              Population👨‍👩‍👧‍👦 : {singleCountry[0]?.population}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
