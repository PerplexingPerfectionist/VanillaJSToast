# Vanilla JS Toast

![Static Badge](https://img.shields.io/badge/JavaScript-blue?logo=javascript&logoColor=f5f5f5)

A toast notification that works on any JavaScript webpage. No framework, no dependencies.

- Vanilla JavaScript
- CSS

### Usage

Add the following files to your project.

- Toast.js
- Toast.css

To call a toast use the syntax below below

```
ShowToast(message, title, toastStyle, duration)
```

**Parameters**

- Message (Default: "Test message") - A string that will be shown as text on the toast.
- Title (nullable) - Title for the toast.
- toastStyle (Default: "info") - One of the following strings.
  - "success"
  - "warning"
  - "danger"
  - "info"
- Duration (Default: 5000) - the number of milliseconds to show your toast.
  - Duration can be an integer or "static" - when set to "static", the toast must be closed using the "X" button in the top right corner of the toast.
- Close (Default: true) - Toggles the rendering of the close button. This is overridden if "static" duration has been set.
