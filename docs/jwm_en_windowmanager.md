<img src="assets/logo_long.png" alt="Logo du script 'JWM'" width="25%"/>

# [J-BAUER][EN] Jo Windows Manager

> **By Jonathan BAUER (J-BAUER)**</br>
> Version: 1.1.0</br>
> Date: 12/11/2024


## List of class Functions of `JWM_WindowManager`

### constructor()
Creates a new instance of the Windows manager.

- **Parameters**:
  - `str_identifier {string}` [OPTIONAL: jwm_wm_(wm_nextID)]: The unique identifier for this instance of JWM_WindowManager.
  - `obj_options {object}` [OPTIONAL: {}]: Used to customize the behavior of the WindowManager.
- **Returns**: `JWM_WindowManager` – Returns the JWM_WindowManager class.

### destructor()
Used to destroy this instance of WindowManager.

### toString()
Converts this class to a string representation.

### matchIdentifier()
Matches the passed string with the identifier of this class.

- **Parameters**:
  - `str_stringToCheck {string}`: The string to match.
- **Returns**: `boolean` – Returns `true` if the passed string matches the identifier of this class.

### getIdentifier()
Gets the identifier of this class.

- **Returns**: `string` – Returns the identifier of this class.

### getWindow()
Gets the window with the specified identifier if it exists.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID to retrieve.
- **Returns**: `JWM_Window` – Returns the window class or `nil` if not found.

### isWindow()
Checks if a window with the specified identifier exists.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID to check.
- **Returns**: `boolean` – Returns `true` if the window is found, `false` otherwise.

### newWindow()
Creates a new window.

- **Parameters**:
  - `str_identifier {string}` [OPTIONAL: jwm_w_(w_nextID)]: The unique identifier for the window.
  - `obj_options {object}` [OPTIONAL: {}]: Used to customize the behavior of the window.
- **Returns**: `JWM_Window` – Returns the created window if valid, or `null`.

### remWindow()
Removes a window.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID of the window to remove.
- **Returns**: `boolean` – Returns `true` if the window was removed, `false` otherwise.

### remAllWindow()
Removes all open windows.

- **Returns**: `boolean` – Returns `true` if all windows were removed.

### getWindowCount()
Gets the number of currently open windows.

- **Returns**: `number` – Returns the number of open windows.

### hide()
Hides all opened windows and the background.

### show()
Shows all opened windows and the background.

### setMousePassthroughOption()
Sets whether the background is permanently transparent or solid for mouse interactions.

- **Parameters**:
  - `bool_status {boolean}`: `true` for transparent, `false` for solid.

### setMousePassthrough()
Temporarily sets the background to be transparent or solid for mouse interactions.

- **Parameters**:
  - `bool_status {boolean}`: `true` for transparent, `false` for solid.

### getMousePassthrough()
Gets whether the background is set to be transparent or solid (as configured by options or `setMousePassthroughOption`).

- **Returns**: `boolean` – Returns `true` if the background is transparent, `false` if solid.

### getLayer()
Returns the current z-index of the specified window.

- **Parameters**:
  - `str_uidOrIdentifier {string|number}`: The identifier/UID to check.
- **Returns**: `boolean` – Returns `true` if the identifier is found, `false` otherwise.

### getFocused()
Returns the z-index of the last window displayed.

- **Returns**: `number` – Returns the z-index number.

### setFocus()
Sets a window to the foreground.

- **Parameters**:
  - `int_zi_from {number}`: The window index to focus on.
