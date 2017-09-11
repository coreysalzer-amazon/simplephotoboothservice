// code from https://stackoverflow.com/a/9145985
function toggleOpacity(id, duration) {
    var el = document.getElementById(id);
    if (el.style.opacity == 1) {
        fadeOut(el, duration);
    } else {
        fadeIn(el, duration);
    }
}

function fadeIn(el, duration) {
    fadeObject(el, 0, 1, duration);
}

function fadeOut(el, duration) {
    fadeObject(el, 1, 0, duration);
}

function fadeObject(el, start, end, duration) {
    var range = end - start;
    var goingUp = end > start;
    var steps = duration / 20;   // arbitrarily picked 20ms for each step
    var increment = range / steps;
    var current = start;
    var more = true;
    function next() {
        current = current + increment;
        if (goingUp) {
            if (current >= end) {
                current = end;
                more = false;
            }
        } else {
            if (current <= end) {
                current = end;
                more = false;
            }
        }
        el.style.opacity = current;
        if (more) {
            setTimeout(next, 20);
        }
    }
    next();
}

export default { toggleOpacity, fadeIn, fadeOut, fadeObject }
