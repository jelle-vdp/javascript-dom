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

    document.getElementById("pass-one").addEventListener("keydown", () => {
        let indicator = document.getElementById("validity");
        let pwField = document.getElementById("pass-one");
        let pwLength = pwField.value.length + 1;
        let amountNum = (pwField.value.match(/\d/g) || []).length + 1;

        console.log("lengte pw: ", pwLength);
        console.log("nummers: ", amountNum);

        if (pwLength > 7 && amountNum > 1){
            indicator.innerText = "OK"
        }

        
    })

})();
