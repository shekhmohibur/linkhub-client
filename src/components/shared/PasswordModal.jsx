// components/PasswordModal.jsx

import Swal from "sweetalert2";

const PasswordModal = () => {
  const changePassword = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Change password",

      html: `

<input type="password" id="current" placeholder="Current password" class="swal2-input">

<input type="password" id="new" placeholder="New password" class="swal2-input">

`,

      focusConfirm: false,

      showCancelButton: true,

      confirmButtonText: "Update",

      preConfirm: () => {
        return {
          current: document.getElementById("current").value,

          password: document.getElementById("new").value,
        };
      },
    });

    if (formValues) {
      console.log("update password", formValues);

      Swal.fire("Updated!", "Password changed", "success");
    }
  };

  const resetPassword = () => {
    Swal.fire({
      title: "Reset password?",

      text: "Reset link will be sent to email",

      showCancelButton: true,

      confirmButtonText: "Send reset link",
    }).then(() => {
      Swal.fire("Email sent");
    });
  };

  return {
    changePassword,

    resetPassword,
  };
};

export default PasswordModal;
