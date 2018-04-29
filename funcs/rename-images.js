const fs = require('fs')
var getRepoInfo = require('git-repo-info')

var info = getRepoInfo()

// console.log(info.branch)
let branchName = info.branch
let fileName

fs.readdir('./dist/deploy/images', (err, files) => {
   files.forEach(prevName => {
      newName = branchName + '_' + prevName
      fs.rename(
         './dist/deploy/images/' + prevName,
         './dist/deploy/images/' + newName,
         function(err) {
            if (err) throw err
            else console.log(prevName, "changed to", newName);
         }
      )
   })
})
