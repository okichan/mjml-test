const fs = require('fs')
const args = process.argv.slice(2)
const repoName = require('git-repo-name')
const getRepoInfo = require('git-repo-info')

// print process.argv
// process.argv.forEach((val, index) => {
//    console.log(`${index}: ${val}`)
// })

// console.log(repoName.sync())

fs.readFile('./dist/deploy/index.html', 'utf-8', (err, data) => {
   let result = data.replace(/src="images\//g, `src="https://s3-ap-southeast-2.amazonaws.com/ca-tomomi/edm-test/`)
   // console.log(result);

   if (args[0] === 'vision6') {
      result = result.replace(/cursor:auto;/g, '');
  }

  writeFile(result);
})

function writeFile(string) {
   fs.writeFile("dist/deploy/index.html", string, ['utf8', '0o666', 'w+'], function(err) {
       if (err) {
           return console.log(err);
       }
       console.log("----- COMPLETE: email built -----");
   });
}