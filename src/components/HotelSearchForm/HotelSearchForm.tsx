import { hotelService } from '../../services/hotelService';
import { Resort, SearchQuery } from '../../types';
import { utilService } from '../../utils/index';
import SkiResortAuthcomplete from '../SkiResortAutocomplete/SkiResortAuthcomplete';

import * as React from 'react';

import './HotelSearchForm.scss';

const PEOPLE_OPTIONS = utilService.getPeopleOptions();

interface Props {
  onHandleSearchForm: (hotels: Resort[], formData: SearchQuery) => void;
}

function HotelSearchForm({ onHandleSearchForm }: Props) {
  const [groupSize, setGroupSize] = React.useState(1);
  const [resortId, setResortId] = React.useState<number>(0);
  const [date, setDate] = React.useState<Record<string, string>>({ start: '', end: '' });

  const onHandleDate = (dateValue: string, mode: 'start' | 'end') => {
    const value = utilService.formatDate(dateValue);
    setDate((prevState) => ({
      ...prevState,
      [mode]: value,
    }));
  };

  const onHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { end, start } = date;
    const isFormValid = [end, start, groupSize, resortId].every(Boolean);
    if (!isFormValid) {
      return;
    }
    const queryParams: SearchQuery = {
      ski_site: resortId,
      from_date: start,
      to_date: end,
      group_size: groupSize,
    };
    const hotels = await hotelService.searchHotels(queryParams);
    if (hotels.length === 0) {
      return alert('No hotels available, try again...');
    }
    onHandleSearchForm(hotels, queryParams);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <SkiResortAuthcomplete onHandleSelect={(id) => setResortId(id)} />
      <select value={groupSize} onChange={(ev) => setGroupSize(+ev.target.value)}>
        {PEOPLE_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <input type="date" onChange={(ev) => onHandleDate(ev.target.value, 'start')} />
      <input type="date" onChange={(ev) => onHandleDate(ev.target.value, 'end')} />
      <button type="submit">Search</button>
    </form>
  );
}

export default HotelSearchForm;
