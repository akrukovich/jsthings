document.addEventListener('DOMContentLoaded', function() {
    /*
     * printPyramid
     *
     * Prints to the console a pyramid of '#' characters of the specified height
     * For example, if height is 5, the console will look like this:
     *          ##
     *         ###
     *        ####
     *       #####
     *      ######
     */



    var slider = document.querySelector("input[type='range']");
    var brick_select = document.querySelector("select")
    var counter = document.getElementById("size-upstairs");
    var pyramid = document.getElementById("pyramid");

    slider.addEventListener("change", printPyramid);
    brick_select.addEventListener("change", printPyramid);



    if (matchMedia) {
        const mq = window.matchMedia("(max-width: 575px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }


    function WidthChange(mq) {
        if (mq.matches) {
            slider.max = 12;
            slider.value = 6;
            printPyramid();
        } else {
            slider.max = 20;
            slider.value = 10;
            printPyramid();
        }

    }



    printPyramid();

    function printPyramid() {


        counter.textContent = slider.value;


        const height = slider.valueAsNumber;
        const block = document.createElement("span");
        const emptyBlock = block.cloneNode();

        var brick = brick_select.options[brick_select.selectedIndex].value;

        if (brick != "square") {
            block.className = "block symbol";
            block.innerHTML = brick;
        } else {
            block.className = "block fill";
        }
        emptyBlock.className = "empty-block";

        if (pyramid.hasChildNodes()) {
            pyramid.innerHTML = '';
        }

        let space = height - 1;
        for (let i = 2; i < height + 2; i++) {
            let div = document.createElement("div");
            div.innerHTML = emptyBlock.outerHTML.repeat(space--) + block.outerHTML.repeat(i);
            pyramid.appendChild(div);
        }

    }




});