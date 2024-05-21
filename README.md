# Скрипт Autodistribution для Google Sheets

## Обзор

Скрипт `autodistribution` предназначен для создания нового распределения пользователей на основе данных из Google Sheets. Он анализирует текущие данные пользователей и настройки, чтобы создать команды на основе заданных критериев, минимизируя повторения участников.

## Функциональные возможности

- **Автоматическое формирование команд**: Создает команды на основе данных пользователей и заданных критериев.
- **Распределение на основе критериев**: Распределяет пользователей с учетом различных свойств и баллов для обеспечения сбалансированных команд.
- **Минимизация повторений**: Гарантирует, что одни и те же пользователи не будут часто попадать в одни и те же команды.

## Требования

- Авторизация в аккаунт Google для  использования Google Sheets.

## Установка

1. **Скопируйте Google Sheet**: Создайте копию предоставленного шаблона Google Sheet.

   ![Копирование Google Sheet]([//i.imgur.com/BEIkTDm.png/3200x1700] "Копирование Google Sheet")

2. **Авторизуйте скрипт**: Откройте документ Google Sheets, перейдите в редактор скриптов и авторизуйте скрипт.

   ![Авторизация](file-KXXaC9wHlMtJJsHnxMHC8B6W)

3. **Предоставьте разрешения**: Убедитесь, что скрипт `autodistribution` имеет необходимые разрешения для доступа и изменения документа Google Sheets.

   ![Разрешения](file-U2ejWbFtrqtPZ55aSZ1HqAQN)

4. **Запустите скрипт**: Выполните скрипт для создания нового распределения команд на основе текущих данных в таблице.

   ![Запуск скрипта](file-MIfGyt7okZHUqNjP7R0Aid7P)

## Скриншоты

### Данные Google Sheets
Скрипт использует данные, структурированные в следующем формате в Google Sheets:

#### Лист настроек
![Лист настроек](file-Sg0l8ZiZcXnxrETSfMkfesBg)

#### Лист пользователей
![Лист пользователей](file-LiYtP8WZddbZVztOHFy6I83O)

### Процесс авторизации
При первом запуске скрипта необходимо предоставить авторизацию для доступа к данным Google Sheets.

![Запрос авторизации](file-KXXaC9wHlMtJJsHnxMHC8B6W)

## Использование

1. **Подготовьте данные**: Убедитесь, что ваш документ Google Sheets заполнен соответствующими данными пользователей и настройками.
2. **Запустите скрипт**: Перейдите к скрипту через меню Google Sheets `Расширения` > `Apps Script` и выполните его.
3. **Проверьте результаты**: Скрипт обновит документ Google Sheets с новыми распределениями команд.

## Поддержка

Для любых вопросов или проблем, пожалуйста, свяжитесь с разработчиком по адресу brnvs1v@gmail.com.

---

Этот файл `README.md` предоставляет подробное руководство по использованию и функциям скрипта `autodistribution`, а также необходимые скриншоты для более простого понимания и настройки.
