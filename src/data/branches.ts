import { Branch } from '@/types/branch';

export const branches: Branch[] = [
  {
    id: 'branch-1',
    name: 'Sweetie Fresh Central Park',
    address: 'Jl. Letjen S. Parman Kav. 28, Tanjung Duren Selatan',
    city: 'Jakarta Barat',
    phone: '021-29345678',
    whatsapp: '6281234567890',
    hours: {
      open: '08:00',
      close: '22:00'
    },
    coordinates: {
      lat: -6.1754,
      lng: 106.7906
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'
  },
  {
    id: 'branch-2',
    name: 'Sweetie Fresh Grand Indonesia',
    address: 'Jl. MH Thamrin No.1, Menteng',
    city: 'Jakarta Pusat',
    phone: '021-23581234',
    whatsapp: '6281234567891',
    hours: {
      open: '10:00',
      close: '22:00'
    },
    coordinates: {
      lat: -6.1944,
      lng: 106.8229
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
  },
  {
    id: 'branch-3',
    name: 'Sweetie Fresh Pondok Indah Mall',
    address: 'Jl. Metro Pondok Indah, Pondok Pinang',
    city: 'Jakarta Selatan',
    phone: '021-75912345',
    whatsapp: '6281234567892',
    hours: {
      open: '10:00',
      close: '22:00'
    },
    coordinates: {
      lat: -6.2655,
      lng: 106.7838
    },
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'
  },
  {
    id: 'branch-4',
    name: 'Sweetie Fresh Kemang',
    address: 'Jl. Kemang Raya No. 15, Bangka',
    city: 'Jakarta Selatan',
    phone: '021-71793456',
    whatsapp: '6281234567893',
    hours: {
      open: '09:00',
      close: '21:00'
    },
    coordinates: {
      lat: -6.2615,
      lng: 106.8166
    },
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800'
  }
];
