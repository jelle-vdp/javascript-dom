/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementsByTagName("img")[0].addEventListener("mouseenter", () => {
        const hoverImgSrc = document.getElementsByTagName("img")[0].dataset.hover;
        document.getElementsByTagName("img")[0].dataset.original = document.getElementsByTagName("img")[0].src;
        document.getElementsByTagName("img")[0].src = hoverImgSrc;
    });

    document.getElementsByTagName("img")[0].addEventListener("mouseleave", () => {
        const ogImgSrc = document.getElementsByTagName("img")[0].dataset.original;
        document.getElementsByTagName("img")[0].src = ogImgSrc;
    });

})();
