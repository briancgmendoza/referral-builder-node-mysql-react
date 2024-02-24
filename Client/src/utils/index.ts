import Swal from "sweetalert2";

export const successToastMessage = (message: string | undefined) => {
  Swal.fire({
    text: message,
    toast: true,
    icon: "success",
    background: "#DDF9E5",
    position: "top",
    color: "#447E4D",
    timer: 3000,
    allowEscapeKey: true,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false
  })
}

export const errorToastMessage = (message: string | undefined) => {
  Swal.fire({
    text: message,
    toast: true,
    icon: "error",
    background: "#DDF9E5",
    position: "top",
    color: "red",
    timer: 3000,
    allowEscapeKey: true,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false
  });
}