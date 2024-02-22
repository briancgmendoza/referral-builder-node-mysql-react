export const formatPhoneNumber = (phoneNumber: number) => {
  const phoneNumberString = phoneNumber.toString();
  return `${phoneNumberString.slice(0, 4)}-${phoneNumberString.slice(4, 7)}-${phoneNumberString.slice(7)}`;
};