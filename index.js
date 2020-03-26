const queryselector = (selector, context = document) => {
	if (typeof selector !== 'string') {
		console.warn('Required argument selector is not a String or undefined: ', selector);
	}

    const result = context.querySelectorAll(selector);

    return result;
};

if (typeof (Node) !== 'undefined' && !Node.prototype.$) {
	window.$ = Node.prototype.$ = NodeList.prototype.$ = function(selector, context = document) {
		return queryselector(selector, context);
	};
}
