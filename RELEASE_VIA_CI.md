# 🚀 Публикация на npm через GitHub Actions

## ✅ Что уже сделано:
- ✅ npm токен добавлен в GitHub Secrets
- ✅ Workflow `.github/workflows/npm-publish.yml` создан
- ✅ Библиотека собрана и готова

---

## 📋 Шаги для публикации:

### 1️⃣ Закоммитить и запушить изменения

```bash
# Добавить все изменения
git add .

# Создать коммит
git commit -m "chore: prepare v1.0.0 release - rename to design-system-kit"

# Запушить в main
git push origin main
```

---

### 2️⃣ Создать git tag

```bash
# Создать тег v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0 - Initial release as design-system-kit"

# Запушить тег
git push origin v1.0.0
```

---

### 3️⃣ Создать GitHub Release

**Вариант A: Через веб-интерфейс (рекомендуется)**

1. Открыть: https://github.com/flowscape-ui/design-system-kit/releases/new

2. Заполнить форму:
   - **Tag**: `v1.0.0` (выбрать из списка)
   - **Release title**: `v1.0.0 - Initial Release`
   - **Description**: Скопировать из CHANGELOG.md

3. Нажать **"Publish release"**

4. GitHub Actions автоматически запустит публикацию! 🎉

**Вариант B: Через GitHub CLI**

```bash
gh release create v1.0.0 \
  --title "v1.0.0 - Initial Release" \
  --notes-file CHANGELOG.md
```

---

### 4️⃣ Проверить выполнение workflow

1. Перейти в **Actions** tab: https://github.com/flowscape-ui/design-system-kit/actions

2. Найти workflow **"Publish to npm"**

3. Дождаться завершения (обычно 2-3 минуты)

4. Проверить что все шаги зелёные ✅

**Что делает workflow:**
- ✅ Устанавливает зависимости
- ✅ Запускает тесты
- ✅ Собирает библиотеку
- ✅ Проверяет содержимое пакета
- ✅ Публикует на npm
- ✅ Создаёт summary с информацией

---

### 5️⃣ Проверить публикацию на npm

**В браузере:**
https://www.npmjs.com/package/@flowscape-ui/design-system-kit

**В терминале:**
```bash
npm view @flowscape-ui/design-system-kit
```

**Протестировать установку:**
```bash
mkdir /tmp/test-install && cd /tmp/test-install
npm init -y
npm install @flowscape-ui/design-system-kit
```

---

## 🎉 Готово!

После успешной публикации:

1. ✅ Пакет доступен на npm
2. ✅ Можно установить: `npm install @flowscape-ui/design-system-kit`
3. ✅ GitHub Release создан
4. ✅ Storybook задеплоится автоматически

---

## 🔄 Для будущих релизов:

```bash
# 1. Обновить версию
npm version patch  # 1.0.0 → 1.0.1
# или
npm version minor  # 1.0.0 → 1.1.0

# 2. Обновить CHANGELOG.md
nano CHANGELOG.md

# 3. Закоммитить
git add .
git commit -m "chore: bump version to $(node -p "require('./package.json').version")"
git push origin main

# 4. Запушить тег (создаётся автоматически при npm version)
git push origin --tags

# 5. Создать GitHub Release
# Workflow автоматически опубликует на npm
```

---

## 🆘 Если что-то пошло не так:

### Workflow упал с ошибкой

1. Проверить логи в Actions tab
2. Проверить что NPM_TOKEN в Secrets корректный
3. Проверить что организация @flowscape-ui существует на npm
4. Можно запустить workflow вручную: Actions → Publish to npm → Run workflow

### Версия уже существует на npm

```bash
# Увеличить версию
npm version patch
git push origin main --tags

# Создать новый релиз
```

### Нет прав на организацию @flowscape-ui

Вариант 1: Создать организацию на npm
Вариант 2: Изменить scope в package.json на свой username

---

## 📞 Полезные ссылки:

- **npm package**: https://www.npmjs.com/package/@flowscape-ui/design-system-kit
- **GitHub Releases**: https://github.com/flowscape-ui/design-system-kit/releases
- **GitHub Actions**: https://github.com/flowscape-ui/design-system-kit/actions
- **Storybook**: https://flowscape-ui.github.io/design-system-kit
