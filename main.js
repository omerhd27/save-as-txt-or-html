const textarea = document.querySelector("textarea"),
filenameinput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    let selectedoption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedoption.split(" ")[0]} file`;
    console.log();
})

saveBtn.addEventListener("click", () => {
   const blob = new Blob([textarea.value], {type: selectMenu.value});
   const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filenameinput.value;
    link.href = fileUrl;
    link.click();
    
})