let uploadButton = document.getElementById("upload-button");
let container = document.querySelector(".border");
let error = document.querySelector(".hidden");
let imageDisplay = document.getElementById("image-display");
let ok_button = document.querySelector(".ok_button");
let support_button = document.querySelector(".support_button");

const fileHandler = (file, name, type) => {
  if (type.split("/")[0] !== "image") {
    error.classList.remove("hidden");
    return false;
  }
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    let imageContainer = document.createElement("figure");
    let img = document.createElement("img");
    img.src = reader.result;
    imageContainer.append(img);
    imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
    imageDisplay.append(imageContainer);
  };
};

uploadButton.addEventListener("change", () => {
  imageDisplay.innerHTML = "";
  Array.from(uploadButton.files).forEach((file) => {
    fileHandler(file, file.name, file.type);
  });
});

container.addEventListener(
  "dragenter",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
  },
  false
);

container.addEventListener(
  "dragleave",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
  },
  false
);

container.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
  },
  false
);

container.addEventListener(
  "drop",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    imageDisplay.innerHTML = "";
    Array.from(files).forEach((file) => {
      fileHandler(file, file.name, file.type);
    });
  },
  false
);

ok_button.addEventListener("click", () => {
  error.classList.add("hidden");
});

support_button.addEventListener("click", () => {
  window.open("https://www.google.com", "_blank");
  error.classList.add("hidden");
});
