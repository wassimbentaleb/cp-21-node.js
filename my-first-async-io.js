const fs = require("fs");
let ln = 0;
const linenumbers = (file) => {
  for (let i = 0; i < file.length; i++) {
    if (file[i] === "\n") {
      ln++;
    }
  }
  console.log(ln);
};
const file = fs.readFile(process.argv[2], "utf-8", (err, data) => {
  err ? console.log(err) : linenumbers(data);
});
