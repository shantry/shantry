const originalSize = 500;

const acceptedTypes = [ "image/png", "image/jpeg" ];

const homeContainer = document.createElement("div");
homeContainer.id = "homeContainer";
document.body.append(homeContainer);

const startText = document.createElement("p");
startText.innerHTML = `To get started, please upload an image. ${originalSize}x${originalSize} are the ideal dimensions, but all images will be automatically scaled to fit this size.`;

const imageUpload = document.createElement("input");
imageUpload.type = "file";
imageUpload.accept = acceptedTypes.join(", ");

homeContainer.append(startText, imageUpload);

imageUpload.addEventListener("input", () => {
  const fileReader = new FileReader();

  const uploadedFile = imageUpload.files[0];

  if (!acceptedTypes.includes(uploadedFile.type)) return alert("File type not accepted");
  
  fileReader.readAsDataURL(uploadedFile);
  
  fileReader.addEventListener("load", () => {
    const originalImage = new Image();
    originalImage.src = fileReader.result;
    originalImage.addEventListener("load", () => {
      homeContainer.remove();

      const pixelatedImageContainer = document.createElement("div");
      pixelatedImageContainer.id = "pixelatedImageContainer";
      document.body.append(pixelatedImageContainer);
      
      const resizedImage = new Image();
      resizedImage.id = "pixelatedImage";
      resizedImage.width = originalSize;
      resizedImage.height = originalSize;
      resizedImage.src = resizeImageCanvas(originalImage, originalSize, originalSize).toDataURL();
      pixelatedImageContainer.append(resizedImage);

      const imageOverlay = document.createElement("div");
      imageOverlay.classList.add("imageOverlay");
      imageOverlay.innerHTML = "Turning your image into nothing...";
      pixelatedImageContainer.append(imageOverlay);

      let i = 0;

      let size = originalSize;
      
      const shrinkInterval = setInterval(() => {
        const shrinkIncrement = Math.max(6, 5 - i / 300);
        size = Math.max(1, size - shrinkIncrement);

        const resizedImageCanvas = resizeImageCanvas(originalImage, size, size);
        
        resizedImage.src = resizedImageCanvas.toDataURL();
        i++;

        if (size <= 1) {
          clearInterval(shrinkInterval);

          const pixel = resizedImageCanvas.getContext("2d").getImageData(0, 0, 1, 1).data;
          
          pixelatedImageContainer.style["background-color"] = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3] / 255})`;

          imageOverlay.addEventListener("transitionstart", () => {
            imageOverlay.innerHTML = "Your image has successfully been ERADICATED. Congratulations.";
          }, { once: true });
          
          imageOverlay.classList.add("centered");
        }
      }, 50);
    });
  });
});

function resizeImageCanvas(image, width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
  return canvas;
}