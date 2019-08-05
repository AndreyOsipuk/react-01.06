# ReactJS
#package.json
скрипты запуска
все установленные пакеты
#package-lock.json
все установленные пакеты

#node_mudules
все файлы скачиваемых модулей
    
#modules webpack
`react`: работа с react
`react-dom`: что бы реакт понимал dom

`webpack`: вебпак
`webpack-cli`: консольное управление вебпаком
`webpack-dev-server`: локальный сервер / автоперезапуск сервера при изменении в коде

`@babel/core`: трансполятор, для понимания html тегов в js
`@babel/preset-env`:  es6 in es5
`@babel/preset-react`: перевод jsx в js (используется для конвертации react-плагинов;)
`@babel/preset-stage-0`: пресет для вызова функций .bind(this)  [не_поддерживается]
`@babel/plugin-proposal-class-properties`: плагин для вызова функций .bind(this)

`babel-loader`: используются для конвертации JS-файла, написанного на ES6, в совместимый с браузером E5

`css-loader`: webpack-плагин может загрузить файлы CSS, вставить небольшие изображения PNG в качестве URL-адреса данных и jpg файлы;
`style-loader`: добавляет CSS в html DOM, добавляя тег <style>;
`autoprefixer`: автоматически добавляет префиксы к CSS свйствам;
`node-sass`: работа с препроцессором sass
`sass-loader`: работа с препроцессором sass

`file-loader`: file-loader - файловый загрузчик для webpack;

`html-webpack-plugin`: webpack плагин, который упрощает создание HTML-файлов. Это
особенно полезно для webpack пакетов, которые включают в себя хэш в имени файла,
который меняется при каждой компиляции;
`mini-css-extract-plugin`: минификация CSS, все в одну неразборчивую строчку;
`uglifyjs-webpack-plugin`: минификация JS;
`postcss-loader`: `^3.0.0`,

`rimraf`: очищает файлы в папке перед записью вебпака

`prop-types`: проверка типов данных в props

`bootstrap`: библиотека bootstarp,
`jquery`: библиотека jquery,
`popper`: дополинтельные зависимости bootstrap,
`react-router@3`: 3 версия react router с вложенностью,
`react-router-dom`: @5.0.1 react-router для работы в браузере,

`axios`: работа с fetch,


    

#NodeJS
`dotenv` - для чтения переменных из файла .env в Node
`mongoose` - для работы с БД MongoDB
`faker` - генерирование фейковых данных
`request` - обработка запросов [?]
`express` - для обработки запросов [?]
`concurrently` - одновременный запуск несколький сценариев
`cors` - разрешить браузеру КЛИЕНТА принимать некоторые данные
`jsonwebtoken` - работа с токенами