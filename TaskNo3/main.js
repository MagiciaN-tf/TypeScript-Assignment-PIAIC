const name = "Talha Farooqui";
console.log("LowerCase:", name.toLowerCase());
console.log("UpperCase:", name.toUpperCase());
console.log("TitleCase:", toTitleCase(name));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }