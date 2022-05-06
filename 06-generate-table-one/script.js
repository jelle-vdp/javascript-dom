/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    const tableRow = "<tr><td>Hello world</td></tr>";
    const tableRows = tableRow.repeat(10);
    target.innerHTML = `<table><tbody>${tableRows}</tbody></table>`;

})();
