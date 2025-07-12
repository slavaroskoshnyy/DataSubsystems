<h1 align="center">✅ Инструкция по установке и запуску тестов</h1>

### 🧩 Требования:

Перед началом убедитесь, что у вас установлены:

- [Git](https://git-scm.com/downloads)
- [Node.js и npm](https://nodejs.org/en) (проверить командой node -v и npm -v)
- [Google Chrome](https://www.google.com/chrome/) (по умолчанию Cypress использует его)
- [Visual Studio Code](https://code.visualstudio.com/) или другой редактор (по желанию)

### Шаг 1. Склонируйте репозиторий

Откройте терминал / командную строку в нужной папке и выполните:

`git clone https://github.com/slavaroskoshnyy/DataSubsystems.git`

Перейдите в директорию проекта:

`cd DataSubsystems`

### ⚙️ Шаг 2. Установка зависимостей

Установите зависимости:

`npm install`

Убедитесь, что файл package.json присутствует в корне проекта — иначе npm install не сработает.

### ▶️ Шаг 3. Запуск тестов

Откройте Cypress в графическом интерфейсе:

`npx cypress open`

🔍 В открывшемся окне выберите браузер и нужные тесты.
