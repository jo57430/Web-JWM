<img src="assets/logo_long.png" alt="Logo du script 'JWM'" width="25%"/>

# [J-BAUER][EN] Jo Windows Manager

> **By Jonathan BAUER (J-BAUER)**</br>
> Version: 1.1.0</br>
> Date: 12/11/2024

## List of Available Global Options
These options are available for both `JWM_WindowManager` and `JWM_Window`.

### forPc
An `object {}` used to apply specified options inside only when the window is opened in a desktop browser.
### forMobile
An `object {}` used to apply specified options inside only when the window is opened in a mobile browser.

## List of the available option of `JWM_WindowManager`
When you create a new instance of `JWM_WindowManager` it is possible to pass options in its constucteur to change its behavior.

### mousePassthrough [def: false]
When `mousePassthrough` is true, the DOM used by WindowManager will be very transparent and you will be able to interact with the elements below it.


## List of the available option of `JWM_Window`
When you create a new instance of `JWM_Window` it is possible to pass options in its constucteur to change its behavior, once the instance has been created, it is possible to modify the options by using the function `setOption()` but the options will only be applied the next time `open()` or `update()` is called.

### x [def: 64]
Used to set the `x` cordonate of the window, if `center` or `center_horizontal` is true this value is skip.
### y [def: 64]
Used to set the `y` cordonate of the window, if `center` or `center_vertical` is true this value is skip.
### center [def: false]
Set the window if is true in the center of the page.
### center_horizontal [def: false]
If true, set the `x` axe of the window in the center of the page.
### center_vertical [def: false]
If true, set the `y` axe of the window in the center of the page.

### width [def: 640]
Used to set the `width` of the window,
### min_width [def: -1]
Used to set the `min_width` of the window,
### max_width [def: -1]
Used to set the `max_width` of the window,

### height [def: 400]
Used to set the `height` of the window,
### min_height [def: -1]
Used to set the `min_height` of the window,
### max_height [def: -1]
Used to set the `max_height` of the window,

### restore [def: false]
Used to set if the `restore` button is show or not.
### help [def: false]
Used to set if the `help` button is show or not.
### close [def: true]
Used to set if the `close` button is show or not.
### minimize [def: true]
Used to set if the `minimize` button is show or not.
### maximize [def: true]
Used to set if the `maximize` button is show or not.
### icon [def: ""]
Used to set a `icon` image before the window title.

### iconOnClick [def: false]
Allow the user to click on the icon when enable (call onIcon()).
### isStatePersistent [def: true]
If true if the user move and resize the window the size/pos is not reset when the window is reopened or updated.
### startMinimize [def: false]
Set if the window start minimized.
### startMaximize [def: false]
Set if the window start maximize.
### movable [def: true]
Set if the window can be moved by the user.
### resizable [def: true]
Set if the window can be resize by the user.