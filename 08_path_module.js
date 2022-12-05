//path module

const path = require("path") // imported the path module
console.log(path.sep)
// join the path
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)
// provide the basename of the file ie text.txt
const base = path.basename(filePath)
console.log(base)

//provide the absolute path
const absolutePath = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolutePath)
