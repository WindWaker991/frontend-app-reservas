export interface City {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  city: string;
}

export interface Institution {
  id: string;
  name: string;
  city: string;
  sectors: Sector[];
}

export interface Sector {
  id: string;
  name: string;
  objects: Objects[];
}

export interface Objects {
  id: string;
  number: string;
}