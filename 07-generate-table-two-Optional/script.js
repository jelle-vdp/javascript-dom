/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    let table = "<table><tbody>";
    for (i = 1; i < 11; i++){
        table = `${table}<tr>`;
        for (j = 1; j < 11; j++){
            table = `${table}<td>${i.toString()} x ${j.toString()} = ${i * j}</td>`;
        };
        table = `${table}</tr>`;
    };
    table = `${table}</tbody></table>`;

    target.innerHTML = table;

})();
