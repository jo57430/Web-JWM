<img src="assets/logo_long.png" alt="Logo du script 'JWM'" width="25%"/>

# [J-BAUER][EN] Jo Windows Manager

> **By Jonathan BAUER (J-BAUER)**</br>
> Version: 1.0</br>
> Date: 06/11/2024

## Information about `JWM_Window` class.
The `JWM_Window` must be a child of `JWM_WindowManager`, otherwise it won't work!


## List of class Functions that can be Override of `JWM_Window`

### onOpen()
Function called when the window is opened. This is an override function.

- **Parameters:**
  - `args` {Args} – All arguments passed in the window open/update function.

### onClose()
Function called when the window is closed. This is an override function.

- **Parameters:**
  - `args` {Args} – All arguments passed in the window close/update function.

### onUpdate()
Function called when the window is updated. This is an override function.

- **Parameters:**
  - `args` {Args} – All arguments passed in the window update function.

### onHelp()
Function called when the help button of the window is clicked. This is an override function.

### onRestore()
Function called when the restore button of the window is clicked. This is an override function.

### onIcon()
Function called when the icon of the window is clicked, if the option is enabled. This is an override function.

## List of class Functions of `JWM_Window`


### constructor()
Create a new window.

- **Parameters:**
  - `class_parent` {JWM_WindowManager} - The WindowManager class that manage this window instance.
  - `str_identifier` {string} [OPTIONAL:jwm_w_(w_nextID)] – The unique identifier of this instance of `JWM_Window`. If a window with the same identifier already exists, the window will not be created.
  - `obj_options` {object} [OPTIONAL:{}] – Custom options for the window behavior.
- **Returns:** `JWM_Window` – Returns the `JWM_Window` class.

### destructor()
Used to destroy this window.

### toString()
Converts this class to a string.

### isValid()
Checks if this class is valid and usable.

- **Returns:** {boolean} – `true` if the class is valid; `false` otherwise.

### matchIdentifier()
Checks if the provided string matches the identifier of this window.

- **Parameters:**
  - `str_stringToCheck` {string} – The string to be checked.
- **Returns:** {boolean} – `true` if the string matches; `false` otherwise.

### getIdentifier()
Retrieves the identifier of this class.

- **Returns:** {string} – The identifier of this class.

### matchUID()
Checks if the provided number matches the UID of this window.

- **Parameters:**
  - `int_uidToCheck` {number} – The UID to check.
- **Returns:** {boolean} – `true` if the number matches the UID; `false` otherwise.

### getUID()
Retrieves the UID of this window.

- **Returns:** {string} – The UID of this window.

### getElement()
Retrieves the base HTML element of the window.

- **Returns:** {Element} – The base HTML element.

### open()
Opens the window. If the window is already open, calls `update()` internally.

- **Parameters:**
  - `str_title` {string} [OPTIONAL:"JWM Window"] – The title for the window.
  - `str_body` {string} [OPTIONAL:"Hello World"] – The HTML body content.
  - `args` {...args} [OPTIONAL:[]] – Arguments passed to the `onOpen()` function.

### close()
Closes the window but does not destroy the class. Use `remove()` to both close and destroy the class.

- **Parameters:**
  - `args` {...args} [OPTIONAL:[]] – Arguments passed to the `onClose()` function.

### update()
Updates the window.

- **Parameters:**
  - `str_title` {string} [OPTIONAL:"JWM Window"] – The title of the window.
  - `str_body` {string} [OPTIONAL:"Hello World"] – The HTML body content.
  - `args` {...args} [OPTIONAL:[]] – Arguments passed to the `onUpdate()` function.

### remove()
Closes and removes this window.

### show()
Displays this window.

### hide()
Hides this window.

### isMinimize()
Checks if the window is currently minimized.

- **Returns:** {boolean} – `true` if minimized; `false` otherwise.

### minimize()
Changes the minimized state of the window.

### isMaximize()
Checks if the window is currently maximized.

- **Returns:** {boolean} – `true` if maximized; `false` otherwise.

### maximize()
Changes the maximized state of the window.

### browserResize()
Updates the window's position when the browser window resizes. Automatically managed if the window is correctly created.

### getHeadElement()
Retrieves the `jwm_w_head` element (the window's head section).

- **Returns:** {Element} – The head element, or `null` if not found.

### getTitlebarElement()
Retrieves the `jwm_w_head_title` element (the title bar section).

- **Returns:** {Element} – The title bar element, or `null` if not found.

### getControlElement()
Retrieves the `jwm_w_head_control` element (the control panel section).

- **Returns:** {Element} – The control panel element, or `null` if not found.

### getTitlebarButtonElement()
Retrieves a specific button element inside the control panel.

- **Returns:** {Element} – The button element, or `null` if not found.

### getBodyElement()
Retrieves the `jwm_w_body` element (the body section).

- **Returns:** {Element} – The body element, or `null` if not found.

### getResizeElement()
Retrieves the `jwm_w_resize` element (the resize button).

- **Returns:** {Element} – The resize button element, or `null` if not found.

### getTitlebarHeight()
Gets the height of the title bar.

- **Returns:** {number} – The height in pixels.

### getTitlebarWidth()
Gets the width of the title bar.

- **Returns:** {number} – The width in pixels.

### getControlHeight()
Gets the height of the control panel.

- **Returns:** {number} – The height in pixels.

### getControlWidth()
Gets the width of the control panel.

- **Returns:** {number} – The width in pixels.

### getBodyHeight()
Gets the height of the body.

- **Returns:** {number} – The height in pixels.

### getBodyWidth()
Gets the width of the body.

- **Returns:** {number} – The width in pixels.

### getHeight()
Gets the overall height of the window.

- **Returns:** {number} – The height in pixels.

### getWidth()
Gets the overall width of the window.

- **Returns:** {number} – The width in pixels.

### getSize()
Gets the size (width and height) of the window.

- **Returns:** {Array|number} – An array [width, height] in pixels.

### getMarginHeight()
Gets the margin height of the window.

- **Returns:** {number} – The margin height in pixels.

### getMarginWidth()
Gets the margin width of the window.

- **Returns:** {number} – The margin width in pixels.

### getX()
Gets the x-coordinate of the window (relative to the window manager element).

- **Returns:** {number} – The x-coordinate in pixels.

### getY()
Gets the y-coordinate of the window (relative to the window manager element).

- **Returns:** {number} – The y-coordinate in pixels.

### getPos()
Gets the x and y coordinates of the window.

- **Returns:** {Array|number} – An array [x, y] in pixels.

### setX()
Sets the x-coordinate of the window (relative to the window manager element).

- **Parameters:**
  - `int_x` {number} – The x-coordinate in pixels.
  - `bool_force` {boolean} – If `true`, disables boundary checks.

### setY()
Sets the y-coordinate of the window (relative to the window manager element).

- **Parameters:**
  - `int_y` {number} – The y-coordinate in pixels.
  - `bool_force` {boolean} – If `true`, disables boundary checks.

### setPos()
Sets the x and y coordinates of the window (relative to the window manager element).

- **Parameters:**
  - `int_x` {number} – The x-coordinate in pixels.
  - `int_y` {number} – The y-coordinate in pixels.
  - `bool_force` {boolean} – If `true`, disables boundary checks.

### setWidth()
Sets the width of the window.

- **Parameters:**
  - `int_width` {number} – The width in pixels.
  - `bool_force` {boolean} – If `true`, disables boundary checks.

### setHeight()
Sets the height of the window.

- **Parameters:**
  - `int_width` {number} – The width in pixels.
  - `bool_force` {boolean} – If `true`, disables boundary checks.

### setSize()
Sets the size (width and height) of the window.

- **Parameters:**
  - `int_width` {number} – The width in pixels.
  - `int_height` {number} – The height in pixels.
  - `bool_force` {boolean} – If `true`, disables boundary checks.

### isLinkedWindow()
Checks if a given window is linked to this window.

- **Parameters:**
  - `obj_windowClass` {JWM_Window} – The window to check.
- **Returns:** {boolean} – `true` if linked; `false` otherwise.

### addLinkedWindow()
Adds a link to a given window.

- **Parameters:**
  - `obj_windowClass` {JWM_Window} – The window to add.

### getLinkedWindow()
Gets a list of all linked windows.

- **Returns:** {Array} – An array of linked windows.

### remLinkedWindow()
Removes a link to a given window.

- **Parameters:**
  - `obj_windowClass` {JWM_Window} – The window to remove.

### remAllLinkedWindow()
Removes all linked windows.

### isFocused()
Checks if this window is currently focused.

- **Returns:** {boolean} – `true` if the window is focused, `false` otherwise.

### getLayer()
Retrieves the current layer of the window.

- **Returns:** {number} – The current layer of the window, or `-1` if invalid.

### getMinLayer()
Retrieves the minimum layer the window can be moved to.

- **Returns:** {number} – The minimum layer the window can go to.

### setLayer()
Sets the layer at which the window should be placed.

- **Parameters:**
  - `int_zindex` {number} – The layer (z-index) to set for the window.

### unFocus()
Unfocuses the window if it is currently focused.

### setFocus()
Sets focus on the window if it is not already focused.

### setIcon()
Sets the window icon in the `jwm_w_head` element of the window.

- **Parameters:**
  - `str_path` {string} – The path to the image to display as the icon. If invalid or an empty string, removes the icon.

### enableMove()
Enables the window to be moved by the user.

### disableMove()
Disables the window movement by the user.

### enableResize()
Enables the window to be resized by the user.

### disableResize()
Disables the window resizing by the user.

### addButton()
Adds a new button to the control panel of the window.

- **Parameters:**
  - `str_type` {string} – The button type to add (e.g., restore, help, minimize, maximize, close).

### remButton()
Removes a button from the control panel of the window.

- **Parameters:**
  - `str_type` {string} – The button type to remove (e.g., restore, help, minimize, maximize, close).

### enableLayerMove()
Enables the window to change its current layer.

### disableLayerMove()
Disables the window from changing its current layer (locks it to the current layer).

### setCenter()
Sets the position of the window to the desired relative location.

- **Parameters:**
  - `int_id` {number} – The position index where to center the window (1 to 9, in the same pattern as a numpad: 
    - 1: left-bottom,
    - 2: center-bottom,
    - 3: right-bottom,
    - 4: left-center,
    - 5: center-center,
    - 6: right-center,
    - 7: left-top,
    - 8: center-top,
    - 9: right-top).

### setOption()
Sets the options for the window for the next time it’s opened or updated.

- **Parameters:**
  - `obj_options` {Object} – An object containing the options to set. If the default option type is not the same as the one passed in `obj_options`, it will be ignored.