export type PeopleOption = {
  label: string;
  value: number;
};

export type SkiResort = {
  id: number;
  name: string;
};

export type SearchQuery = {
  ski_site: number;
  from_date: string;
  to_date: string;
  group_size: number;
};

export interface Image {
  MainImg?: string;
  URL: string;
}

export interface Resort {
  HotelCode: string;
  HotelName: string;
  HotelDescriptiveContent: {
    Images: Image[];
  };
  HotelInfo: HotelInfo;
  PricesInfo: ResortPrice;
}

export interface HotelInfo {
  Rating: string;
}

export interface ResortPrice {
  AmountAfterTax: string;
  AmountBeforeTax: string;
}
