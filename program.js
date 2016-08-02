// console.log('HELLO WORLD');

// 2 - Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
//

// var total = 0;
// for(var i = 2; i < process.argv.length; i++) {
//     total += Number(process.argv[i]);
// }
// console.log(total);

// 3 - Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
// The full path to the file to read will be provided as the first command-line argument.

// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// console.log(buffer.toString().split('\n').length - 1);

// 4 - Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.


// var fs = require('fs');
// fs.readFile(process.argv[2], function (err, data) {
//   if (err) {
//     throw err;
//   }
//    console.log(data.toString().split('\n').length - 1);
// });

// at /Users/caitlinsweeney/Desktop/node-practice/program.js:27:22
// at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)

// 5 -- Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

// METHOD 1
//
// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function (err, list) {
//   if(err) {
//     throw err;
//   }
//   for (var i = 0; i < list.length; i++) {
//     if(path.extname(list[i]) === "."  + process.argv[3]) {
//       console.log(list[i]);
//     }
//   }
// });

// returns-->
// CHANGELOG.md
// LICENCE.md
// README.md

// METHOD 2
//
// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// });

// 7 -- Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

var fs = require('fs')
var path = require('path')
