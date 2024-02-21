export type TUsers = {
  users: TUserProfile[];
}

export type TUserProfile = {
  user_id: number;
  given_name: string;
  surname: string;
  email: string;
  phone: string;
  house_no: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  avatar_image: Buffer | null; 
}
