let profilePhoto = document.getElementById("profile_photo");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function () {
  profilePhoto.src = URL.createObjectURL(inputFile.files[0]);
};
