export function hasClass(el, className) {
	if(el.classList) {
		return el.classList.contains(className);
	}
	else {
		return !!el.className.match(getRegEx(className));
	}
}

export function addClass(el, className) {
	if (el.classList) {
		el.classList.add(className);
	}
	else if(!hasClass(el, className)) {
		el.className += " " + className;
	}
}

export function removeClass(el, className) {
	if(el.classList) {
		el.classList.remove(className);
	}
	else if(hasClass(el, className)) {
		el.className = el.className.replace(getRegEx(className), ' ');
	}
}

function getRegEx(className) {
	return new RegExp('\\s|^)' + className + '\\s|$)');
}