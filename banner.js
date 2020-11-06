const childProcess = require("child_process")
//childProcess?????
module.exports = function banner() {
//   const commit = childProcess.execSync("git rev-parse --short HEAD")
//   const user = childProcess.execSync("git config user.name")
  const date = new Date().toLocaleString()
    const commit = "vasde";
    const user = "mdm"
  return (
    `commitVersion: ${commit}` + `Build Date: ${date}\n` + `Author: ${user}`
  )
}