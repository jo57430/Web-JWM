/* !
 * |==================================|
 * |        Jo Windows Manager        |
 * |==================================|
 * |
 * |     Ver : 1.1.0
 * |    Date : 02/11/2024
 * |      By : Jonathan BAUER (jbauer.fr)
 * | Copyright 2024-2025 The JWM Author (Jonathan BAUER)
 * | License : Apache 2.0 ()
 * |
 * |==================================
 * This is the js file used for the exemple 4.
*/

var VarWithUniqueNameToRemoveWhenUnloaded = {t:"000", d:true}

function JWM_JS_LOAD() {
    alert("JavaScript file loaded!");
    console.log("JavaScript file loaded!");
}

function JWM_JS_UNLOAD() {
    alert("JavaScript file unloaded!");
    console.log("JavaScript file unloaded!");

    // Unload variable, object, table, etc...
    VarWithUniqueNameToRemoveWhenUnloaded = null;
}

function JWM_JS_OPEN(obj_window, ...args) {
    alert(`A new window (${obj_window.toString()}) using this file has been opened with arguments:`, args);
    console.log(`A new window (${obj_window.toString()}) using this file has been opened with arguments:`, args);
}

function JWM_JS_UPDATE(obj_window, ...args) {
    alert(`A window (${obj_window.toString()}) using this file has been updated with arguments:`, args);
    console.log(`A window (${obj_window.toString()}) using this file has been updated with arguments:`, args);
}

function JWM_JS_CLOSE(obj_window, ...args) {
    alert(`A window (${obj_window.toString()}) using this file has been closed with arguments:`, args);
    console.log(`A window (${obj_window.toString()}) using this file has been closed with arguments:`, args);
}