<img src="assets/logo_long.png" alt="Logo du script 'JWM'" width="25%"/>

# [J-BAUER][EN] Jo Windows Manager

> **By Jonathan BAUER (J-BAUER)**</br>
> Version: 1.0</br>
> Date: 06/11/2024


## List of all Global Functions

### JWM.version_spliter()
Used to get the passed version string into a split three-part unsigned integer (Major, Minor, Bug fix).

- **Parameters**:
  - `str_version {string}`: The version to convert to unsigned integers.
- **Returns**: `(number|Array)` – Returns an array with the current version in three parts.

### JWM.version()
Used to get the current version of JWM, split into three unsigned integers (Major, Minor, Bug fix).

- **Returns**: `(number|Array)` – Returns an array with the current version of the script.

### JWM.version_check()
Used by other scripts that rely on this script as a basis to check compatibility.

- **Parameters**:
  - `obj_version {string|Array}`: The version to convert to unsigned integers.
- **Returns**: `boolean` – Returns `true` if the two scripts are compatible, or `false` otherwise.

### JWM.isValid()
Used by other scripts to check if this script is ready for use.

- **Parameters**:
  - `obj_version {string|Array}`: The version to check.
- **Returns**: `boolean` – Returns `true` if the script is ready to use/alive, or `false` otherwise.

### JWM.sleep()
Used to wait in an asynchronous function for a specified number of milliseconds.

- **Parameters**:
  - `int_ms {number}` [OPTIONAL: 0.1]: The time to wait in milliseconds.

### JWM.returnInfo()
Used to return a value and print information to the console (prints the returned value if DEBUG is enabled).

- **Parameters**:
  - `obj_returned {object}` [OPTIONAL: null]: The value to return.
  - `str_log {string}` [OPTIONAL: null]: The log message to print to the console. If empty, prints nothing.
- **Returns**: `object` – Returns the passed object.

### JWM.returnWarning()
Used to return a value and print a warning to the console (prints the returned value if DEBUG is enabled).

- **Parameters**:
  - `obj_returned {object}` [OPTIONAL: null]: The value to return.
  - `str_log {string}` [OPTIONAL: null]: The log message to print to the console. If empty, prints nothing.
- **Returns**: `object` – Returns the passed object.

### JWM.returnError()
Used to return a value and print an error with a trace to the console (prints the returned value if DEBUG is enabled).

- **Parameters**:
  - `obj_returned {object}` [OPTIONAL: null]: The value to return.
  - `str_log {string}` [OPTIONAL: null]: The log message to print to the console. If empty, prints nothing.
  - `int_errID {number}` [OPTIONAL: null]: Adds an error code when printed to the console. If empty, does nothing.
- **Returns**: `object` – Returns the passed object.

### JWM.getManager()
Gets the requested instance of the Windows manager.

- **Parameters**:
  - `obj_idOrName {string|number}`: The unique identifier or index of the JWM_WindowManager instance.
- **Returns**: `JWM_WindowManager` – Returns the JWM_WindowManager class or `nil` if failed.

### JWM.isManager()
Checks if the requested identifier for a JWM_WindowManager exists.

- **Parameters**:
  - `obj_idOrName {string|number}`: The unique identifier or index of the JWM_WindowManager instance.
- **Returns**: `boolean` – Returns `true` if found, or `false` otherwise.

### JWM.newManager()
Creates a new instance of the Windows manager.

- **Parameters**:
  - `str_identifier {string}` [OPTIONAL: jwm_wm_(wm_nextID+1)]: The unique identifier for the JWM_WindowManager instance.
  - `obj_options {object}` [OPTIONAL: {}]: Used to customize certain behaviors of the WindowManager.
- **Returns**: `JWM_WindowManager` – Returns the JWM_WindowManager class or `nil` if failed.

### JWM.remManager()
Removes an instance of the Windows manager.

- **Parameters**:
  - `obj_idOrName {string|number}`: The unique identifier or index of the JWM_WindowManager instance.
- **Returns**: `boolean` – Returns `true` if removed successfully, or `false` if failed.

### JWM.remAllManager()
Removes all instances of the Windows manager.

- **Returns**: `boolean` – Returns `true` if all instances were removed, or `false` if failed.

### JWM.getWindow()
Gets the requested window within one of the Windows managers, if it exists.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID of the window.
- **Returns**: `JWM_Window` – Returns the JWM_Window class or `nil` if failed.

### JWM.isWindow()
Checks if the requested window exists within one of the Windows managers.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID of the window.
- **Returns**: `boolean` – Returns `true` if the window exists, or `false` if not.

### JWM.newWindow()
Creates a new window in the main/first WindowManager.

- **Parameters**:
  - `str_identifier {string}` [OPTIONAL: jwm_w_(w_nextID)]: The unique identifier for the window.
  - `obj_options {object}` [OPTIONAL: {}]: Used to customize certain behaviors of the window.
- **Returns**: `JWM_Window` – Returns the created window if valid, or `null` if not.

### JWM.remWindow()
Removes a window in the main/first WindowManager.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID of the window to remove.
- **Returns**: `boolean` – Returns `true` if the window was removed, or `false` if not.

### JWM.remAllWindow()
Removes all open windows.

- **Returns**: `boolean` – Returns `true` if all windows were removed.

### JWM.getWindowCount()
Gets the number of currently open windows.

- **Returns**: `number` – Returns the number of open windows.

### JWM.hide()
Hides all open windows and background.

### JWM.show()
Shows all open windows and background.

### JWM.setMainCSS()
Changes the path to the main CSS used for the window.

- **Parameters**:
  - `str_cssPath {string}`: The URL path to the CSS.

### JWM.getMainCSS()
Gets the path to the main CSS.

- **Returns**: `string|boolean` – Returns the URL to the CSS or `false` if the stored URL is invalid.

### JWM.setCustomCSS()
Changes the path to the custom CSS used for the window.

- **Parameters**:
  - `str_cssPath {string}`: The URL path to the custom CSS.

### JWM.getCustomCSS()
Gets the path to the custom CSS.

- **Returns**: `string|boolean` – Returns the URL to the CSS or `false` if the stored URL is invalid.