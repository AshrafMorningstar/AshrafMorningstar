const qrText = document.getElementById("qrText");
const qrImg = document.getElementById("qrImg");
const qrBox = document.getElementById("qrBox");
const generate = document.getElementById("generate")
const textError = document.getElementById("textError");
const downloadBtn = document.getElementById("downloadBtn")
const shareBtn = document.getElementById("shareBtn");


generate.addEventListener("click", (e) =>{
    e.preventDefault();

    generateQR();
})

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value.trim());
        qrBox.classList.add("show-img")

        const proxiedURL = "https://corsproxy.io/?" + encodeURIComponent(originalURL);

        qrImg.src = proxiedURL;
        textError.innerHTML="";
    } else{
        textError.innerHTML = "Please write something to generate QR Code";

        setTimeout(() => {
            textError.innerHTML = "";
        }, 2000);
    }
}


function downloadQRCode() {
    const imageURL = qrImg.src;

    if (!imageURL) {
        textError.innerHTML =("Please generate a QR Code first.");
        setTimeout(() => {
            textError.innerHTML = "";
        }, 2000);
        return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous"; // Required for cross-origin image download
    img.src = imageURL;

    img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(function(blob) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qr-code.png";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href); // Clean up
        }, "image/png");
    };

    img.onerror = function () {
        textError.innerHTML =("Image could not be loaded. Possible CORS error from API.");
        setTimeout(() => {
            textError.innerHTML = "";
        }, 2000);
    };
}



//  this is for share btn script 

// document.addEventListener('DOMContentLoaded', () => {
    
//         // Initial State
//         shareBtn.style.display = 'inline-block';
//         socialIcons.classList.add('hidden');


//     shareBtn.addEventListener("click", () =>{
//         if (!qrImg || !qrImg.src || qrImg.src.includes("empty") || qrImg.src === window.location.href) {
//             textError.innerHTML = "Please generate a QR Code first.";
//             setTimeout(() => {
//               textError.innerHTML = "";
//             }, 2000);
//             return;
//           }
        
//           const qrSrc = encodeURIComponent(qrImg.src);
//           const text = encodeURIComponent("Check out this QR code!");
        
//           document.getElementById('whatsappShare').href = `https://github.com/AshrafMorningstar
//           document.getElementById('twitterShare').href = `Ashraf Morningstar
        
//           // Toggle share options
//           document.getElementById('shareOptions').classList.toggle('hidden');
//           shareBtn.style.display = 'none';
//           socialIcons.classList.remove('hidden');
//     });
//   });
  






//  trail code for share btn
document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');
    const socialIcons = document.getElementById('shareOptions'); // Assuming this is your container for social icons
    const qrImg = document.getElementById('qrImg');
    const textError = document.getElementById('textError');
  
    // Initial State
    shareBtn.style.display = 'inline-block';
    socialIcons.classList.add('hidden');
  
    shareBtn.addEventListener("click", () => {
      if (!qrImg || !qrImg.src || qrImg.src.includes("empty") || qrImg.src === window.location.href) {
        textError.innerHTML = "Please generate a QR Code first.";
        setTimeout(() => {
          textError.innerHTML = "";
        }, 2000);
        return;
      }
  
      const qrSrc = encodeURIComponent(qrImg.src);
      const text = encodeURIComponent("Check out this QR code!");
  
      document.getElementById('whatsappShare').href = `https://github.com/AshrafMorningstar
      document.getElementById('twitterShare').href = `Ashraf Morningstar  
      // Hide share button, show social icons
      shareBtn.style.display = 'none';
      socialIcons.classList.remove('hidden');
    });
  });
  

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar