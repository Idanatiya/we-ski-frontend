import { SKI_RESORTS } from '../../constants';
import { SkiResort } from '../../types';

import * as React from 'react';

import useOnClickOutside from '../../hooks/useClickOutside';
import useToggle from '../../hooks/useToggle';

import './SkiResortAuthcomplete.scss';

interface Props {
  onHandleSelect: (resortId: number) => void;
}

function Authocomplete({ onHandleSelect }: Props) {
  const [query, setQuery] = React.useState('');
  const [isShown, toggleIsShown, setIsShown] = useToggle();
  const divRef = React.useRef<HTMLInputElement>(null);

  useOnClickOutside(divRef, () => {
    setIsShown(false);
  });

  const filteredSkiResorts = React.useMemo(
    () => SKI_RESORTS.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const onHandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value.trim();
    setQuery(value);
  };

  const onOptionSelect = (option: SkiResort) => {
    onHandleSelect(option.id);
    setQuery(option.name);
    toggleIsShown();
  };
  return (
    <section className="root" ref={divRef}>
      <section className="search-container">
        <input
          onChange={onHandleChange}
          placeholder="Enter Ski Resort"
          className="input"
          value={query}
          onClick={() => setIsShown(true)}
        />
      </section>
      {isShown && (
        <section className="autocomplete-container">
          {filteredSkiResorts.map((option) => (
            <div
              key={option.id}
              role="button"
              className="option-item"
              onClick={() => onOptionSelect(option)}
              tabIndex={0}
            >
              {option.name}
            </div>
          ))}
        </section>
      )}
    </section>
  );
}

export default Authocomplete;
