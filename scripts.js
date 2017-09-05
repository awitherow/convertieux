var data = {}

/*
 * init
 */
document.addEventListener("DOMContentLoaded", function () {
    // INPUT FIELDS
    var cryptoInput = getElementbyClass('crypto-input')
    var fiatInput = getElementbyClass('fiat-input')

    cryptoInput.addEventListener("input", handleInput)
    fiatInput.addEventListener("input", handleInput)

    // SELECT FIELDS
    var cryptoSelect = getElementbyClass('crypto-select')
    var fiatSelect = getElementbyClass('fiat-select')

    cryptoSelect.addEventListener("change", handleSelect)
    fiatSelect.addEventListener("change", handleSelect)

    // TODO: for each exchange, 
    // - get crypto -> fiat && fiat -> crypto calculations
    // - save that to data then
    // - setinterval every 15 seconds repeat that function
});

/*
 * event listener handlers
 * - handleInput takes crypto and fiat input and does calculations
 */

function handleInput(e) {
    var inputField = e.target.className
    var inputValue = e.target.value
    console.log(inputField, inputValue)
    // TODO: psuedo code the solution
    // - run proper multiplier
    // - update other field
}

function handleSelect(e) {
    var selectField = e.target.className
    var selectValue = e.target.value
    console.log(selectField, selectValue)
    // TODO: psuedocode the solution
    // set data.active.crypto
    // set data.active.fiat
    // do calculations
    // update both fields
}

/*
 * helper functions
 * - getElementByClass removes complexity in calling document over and over.
 */

function getElementbyClass(tag) {
    return document.getElementsByClassName(tag)[0]
}