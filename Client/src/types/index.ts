export type TContainerProps = {
  children: React.ReactNode;
}

export type TModalProps = {
  ariaDescribedBy: string;
  open: boolean;
  close: () => void;
  title: string;
  modalContent: React.ReactElement;
}

export type TFormProps = {
  shouldPopulateData?: {
    bool: boolean;
    id: number | null;
  }
}

export type TUserWithoutId = {
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
}

export type TUserProfileFormData = {
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
  avatar_image?: File | string | null;
}