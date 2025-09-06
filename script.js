document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.querySelector("input[type='file']");
    fileInput.addEventListener("change", () => {
        if(fileInput.files.length > 0){
            alert("File selected: " + fileInput.files[0].name);
        }
    });
});
