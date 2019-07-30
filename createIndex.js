//Скрипт для автоматического содздания файлов index.js в компонентах
const fs = require('fs');
const path = require('path');
const pathComponents = path.resolve(__dirname, './src/components');

fs.readdir(pathComponents, function (err, items) {
    for (let i = 0; i < items.length; i++) {
        fs.stat(path.resolve(pathComponents, items[i]), function (err, stats) {
            if (stats.isDirectory()) {
                fs.readFile(path.resolve(pathComponents, items[i], 'index.js'), "utf8",
                    function (error, data) {
                        if (error) {
                            console.log('Create file',path.resolve(pathComponents, items[i])) //не работает с concurrently
                            fs.writeFileSync(path.resolve(pathComponents, items[i], 'index.js'), `export { ${items[i]} } from './${items[i]}';`)
                        }
                    });
            }
        })
    }
})






// foo();
async function foo() {
    const arr = await readdir();
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        fs.stat(path.resolve(__dirname, './src/components', arr[i]), function (err, stats) {
            if (stats.isDirectory()) {
                console.log(arr[i] + '    directory');
            }
        })
    }
};
async function readdir() {
    const arr = new Promise((resolve, reject) => {
        fs.readdir(pathDir, function (err, items) {
            const arr = [];
            for (let i = 0; i < items.length; i++) {
                arr.push(items[i]);
            }
            resolve(arr);
        })

    })
    const result = await arr;
    return result;
}
// arr();
// console.log(readdir())
// fs.stat(path.resolve(__dirname,'src'), function(err, stats) {
//     if (stats.isDirectory()) {
//         console.log('    directory');
//     }
// })
