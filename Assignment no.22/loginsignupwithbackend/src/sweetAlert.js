import Swal from "sweetalert2";

export const sweetAlert = (title,icon,text) =>{
    return Swal.fire({
      position: "center",
      icon: icon,
      title: title,
      text : text,
      showConfirmButton: true,
      timer: 1500
    });
  }