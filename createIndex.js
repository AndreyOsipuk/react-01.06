//Скрипт для автоматического содздания файлов index.js в компонентах
const fs = require('fs');
const path = require('path');
const pathComponents = path.resolve(__dirname, './src/components');

fs.readdir(pathComponents, function(err, items) {
    for (let i = 0; i < items.length; i++) {
        fs.stat(path.resolve(pathComponents, items[i]), function(err, stats) {
            if (stats.isDirectory()) {
                fs.readFile(path.resolve(pathComponents, items[i], 'index.js'), "utf8",
                    function(error, data) {
                        if (error) {
                            console.log('Create file', path.resolve(pathComponents, items[i])) //не работает с  concurrently
                            fs.writeFileSync(path.resolve(pathComponents, items[i], 'index.js'), `export { ${items[i]} } from './${items[i]}';`)
                        }
                    });
            }
        })
    }
})