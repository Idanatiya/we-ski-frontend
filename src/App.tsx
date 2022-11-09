import React from 'react';

import HotelList from './components/HotelList/HotelList';
import HotelSearchForm from './components/HotelSearchForm/HotelSearchForm';

import TheNavbar from './layout/TheNavbar/TheNavbar';
import { Resort, SearchQuery } from './types';

function App() {
  const [hotels, setHotels] = React.useState<Resort[]>([]);

  // Curr search
  const [currSearch, setCurrSearch] = React.useState<SearchQuery | null>(null);
  const onHandleSearchForm = (newHotels: Resort[], formData: SearchQuery) => {
    setHotels(newHotels);
    setCurrSearch(formData);
  };

  const searchDescription = currSearch
    ? `${hotels.length} ski trip actions  • ${currSearch?.from_date} - ${currSearch?.to_date} • ${currSearch?.group_size} people`
    : '';

  return (
    <>
      <TheNavbar>
        <HotelSearchForm onHandleSearchForm={onHandleSearchForm} />
      </TheNavbar>
      <main className="main-container">
        <h2>Select your ski trip</h2>
        {hotels.length > 0 ? (
          <>
            <p>{searchDescription}</p>
            <HotelList hotels={hotels} />
          </>
        ) : (
          <div>Please Make A Search</div>
        )}
      </main>
    </>
  );
}

export default App;
