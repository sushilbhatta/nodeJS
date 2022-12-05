const { readFile, writeFile } = require("fs")
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err)
      return
    }
    const second = result
    writeFile(
      "./content/result-async.txt",
      `here is the result:${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
        }
        console.log(result)
      }
    )
  })
})
