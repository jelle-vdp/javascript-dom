/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("keyup", () => {
        let indicator = document.getElementById("validity");
        let pwField = document.getElementById("pass-one");
        let pwLength = pwField.value.length;
        let amountNum = (pwField.value.match(/\d/g) || []).length;

        if (pwLength > 7 && amountNum > 1){
            indicator.innerText = "OK"
        } else {
            indicator.innerText = "Not OK"
        }

    })

})();
