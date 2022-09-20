function scroll(id) {
	if (typeof id === 'string') {
		//* скролл до секции
		const section = document.querySelector(id).offsetTop;
		const header = document.querySelector("#header").clientHeight;

		window.scrollTo(0, section - header, { behavior: "smooth", });
	}
	else {
		//* скролл в начало
		window.scrollTo(0, 0, { behavior: "smooth", });
	}
}

export { scroll }
