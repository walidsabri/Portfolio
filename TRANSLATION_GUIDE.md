# i18n Translation Guide

## Setup Complete! ✅

Your portfolio now supports **3 languages**: English (EN), French (FR), and Spanish (ES).

---

## How to Use Translations in Components

### Basic Usage

```jsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("nav.home")}</h1>
      <p>{t("home.description")}</p>
    </div>
  );
}
```

### Language Switching

```jsx
const { i18n } = useTranslation();

// Change language
i18n.changeLanguage("fr"); // Switch to French
// Switch to Spanish
i18n.changeLanguage("en"); // Switch to English

// Get current language
console.log(i18n.language); // 'en' | 'fr' | 'es'
```

---

## File Structure

```
src/
├── i18n.js                 # i18n configuration
├── locales/
│   ├── en.json            # English translations
│   ├── fr.json            # French translations
│   └── es.json            # Spanish translations
└── components/layout/Nav.jsx  # Language switcher added
```

---

## Adding New Translations

### Step 1: Add to all JSON files

Update `src/locales/en.json`, `src/locales/fr.json`, and `src/locales/es.json`:

```json
{
  "newSection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

### Step 2: Use in your component

```jsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("newSection.title")}</h1>
      <p>{t("newSection.description")}</p>
    </div>
  );
}
```

---

## Features

✅ **Persistent Language** - User's language choice is saved in localStorage
✅ **Fallback Language** - English is the default if language not set
✅ **Reactive** - All components update when language changes
✅ **Clean Keys** - Nested JSON structure for organization

---

## Professional Best Practices Applied

1. ✅ **Industry Standard** - Using react-i18next (most popular in production apps)
2. ✅ **Persistence** - Language preference saved in localStorage
3. ✅ **Scalability** - Easy to add more languages (just add new JSON file)
4. ✅ **Developer Experience** - Simple key-based translations
5. ✅ **Performance** - Lazy loading ready, no performance impact

---

## Next Steps (Optional)

Want to enhance further? Consider:

1. **Namespace translations** - Organize by feature
2. **Pluralization** - Handle singular/plural forms
3. **Date/Time formatting** - Locale-specific formats
4. **Language detection** - Auto-detect user's browser language
5. **RTL support** - For Arabic, Hebrew, etc.

---

## Testing Your Setup

Open browser console and run:

```javascript
// Check current language
localStorage.getItem("language");

// Test language switching programmatically
i18n.changeLanguage("fr");
```

---

Happy translating! 🌍
