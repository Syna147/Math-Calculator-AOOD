function splitFunction() {
  let str = document.getElementById("fileInput").value;
  let arr = str.split(",");

  
  arr = arr.filter(item => item.trim() !== "");
  arr = arr.map(item => parseFloat(item));

 
  arr = arr.filter(num => !isNaN(num));

  return arr;
}