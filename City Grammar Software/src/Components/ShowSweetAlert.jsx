import Swal from 'sweetalert2';

const showSweetAlert = (title,desc,allowOutsideClick,checkDidOpen) => {
    Swal.fire({
        title: title,
        text:desc,
        allowOutsideClick: allowOutsideClick,
        didOpen: () => {
           checkDidOpen?
           Swal.showLoading():
           null
          } 
      });
}

export default showSweetAlert
