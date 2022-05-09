/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    
    let imgIn = 0;
    const img = document.getElementsByTagName("img")[0];

    const nextCarouselImg = () => {
        if (imgIn !== gallery.length - 1){
            imgIn = imgIn + 1;
            img.src = gallery[imgIn]; 
        } else {
            imgIn = 0;
            img.src = gallery[imgIn];
        }
    }

    document.getElementById("next").addEventListener("click", nextCarouselImg)

})();
