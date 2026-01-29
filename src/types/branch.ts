export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  hours: {
    open: string;
    close: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
}
