export type Review = {
  name?: string;
  date?: string;
  rating?: number;
  comments?: string;
};

export type OperatingHour = {
  Monday?: string;
  Tuesday?: string;
  Wednesday?: string;
  Thursday?: string;
  Friday?: string;
  Saturday?: string;
  Sunday?: string;
};

export type Restaurent = {
  id?: number;
  name?: string;
  photograph?: string;
  neighborhood?: string;
  address?: string;
  latlng?: {
    lat?: number;
    lng?: number;
  };
  cuisine_type?: string;
  operating_hours?: OperatingHour;
  reviews?: Review[];
};
