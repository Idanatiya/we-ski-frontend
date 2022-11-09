import { Resort } from '../../types';

import * as React from 'react';

import star from '../../assets/star.png';

import './HotelList.scss';

interface Props {
  hotels: Resort[];
}

function HotelList({ hotels }: Props) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel?.HotelCode} className="hotel-preview">
          <img
            className="hotel-img"
            src={hotel?.HotelDescriptiveContent?.Images[1]?.URL}
            alt={hotel?.HotelName}
          />
          <div className="hotel-info">
            <p>
              {hotel?.HotelName} - {hotel.HotelCode}{' '}
            </p>
            <p className="">
              {new Array(+hotel.HotelInfo.Rating).fill(null).map((_v, idx) => (
                <img key={idx} className="star-icon" src={star} alt="star" />
              ))}
            </p>
            <div className="hotel-price">
              <p>
                €{hotel?.PricesInfo?.AmountAfterTax} <small> / per person</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
