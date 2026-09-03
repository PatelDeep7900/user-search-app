import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserDetail {
  label: string;
  value: string;
}

export interface UserDetailModel {
  title: string;
  icon: IconType
  data: UserDetail[];
}
