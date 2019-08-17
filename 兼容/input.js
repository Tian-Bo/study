// 解决ios端输入框下白
document.body.addEventListener("focusout", () => {
	setTimeout(() => {
	const scrollHeight =
		document.documentElement.scrollTop || document.body.scrollTop || 0;
	window.scrollTo(0, Math.max(scrollHeight - 1, 0));
	}, 100);
});