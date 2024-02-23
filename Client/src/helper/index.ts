export const formatPhoneNumber = (phoneNumber: number) => {
  const phoneNumberString = phoneNumber.toString();
  return `${phoneNumberString.slice(0, 4)}-${phoneNumberString.slice(4, 7)}-${phoneNumberString.slice(7)}`;
};

export const convertBase64 = (buffer: ArrayBuffer | null): Promise<string> => {
  if (!buffer) {
    return Promise.resolve("");
  }

  return new Promise((resolve, reject) => {
    const blob = new Blob([new Uint8Array(buffer)]);
    const fileReader = new FileReader();
    
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        resolve(fileReader.result);
      } else {
        reject(new Error("Invalid result type"));
      }
    };

    fileReader.onerror = (error) => {
      reject(error);
    };

    fileReader.readAsDataURL(blob);
  });
};
