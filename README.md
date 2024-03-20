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
ShowToast('message', 'toastStyle', 'duration')
```

**Parameters**
- Message - A string that will be shown as text on the toast.
- toastStyle - One of the following strings.
  - "success"
  - "warning"
  - "danger"
  - "info"
- Duration - the number of milliseconds to show your toast.
  - Duration can be an integer or "static" - when set to "static", the toast must be closed using the "X" button in the top right corner of the toast.

Parameter defaults
- Message - "Test message"
- toastStyle - "info"
- Duration - 5000

