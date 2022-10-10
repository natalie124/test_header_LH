# Сборка на GULP v 2.1.0 от SRO.

**Как использовать сборку:**
1. Устанавливаем пакеты: в консоли пишем npm i (версия node.js 16.16)
2. Все изменения вносятся только в папке src
3. Далее доступны команды в консоли:

**Запуск сборки в режиме разработки**
```shell 
npm run dev 
```

- По умолчанию включена автоконвертация картинок в webp. Достаточно включить режим разработки и положить картинку в папку src/img.

- По умолчанию включена автосборка svg в sprite. Достаточно включить режим разработки и положить .svg в папку src/img/svg.


**Запуск сборки в режиме продакшена (используем перед коммитом)**

```shell 
npm run build
```

**Режим билда без картинок**

```shell 
npm run buildnoimg
```
 Используйте, если во время билда приходится долго ждать минификации и конвертации картинок в webp, а правки с ними не связаны.


#Что нового?

1. Новый режим билда без картинок. Используйте, если во время билда приходится долго ждать минификации и конвертации картинок в webp, а правки с ними не связаны. Запускается командой npm run buildnoimg в консоли.
2. Удален режим сборки картинок по отдельности.
3. Переименованы команды. Список доступных теперь следующий:

   npm run dev - режим разработки

   npm run build - режим билда

   npm run buildnoimg - режим билда без картинок
4. Мелкие правки и оптимизации.



