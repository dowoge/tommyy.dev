const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

const setTheme = (mode) => {
	if (mode === "light") {
		root.setAttribute("data-theme", "light");
		toggle.textContent = "dark mode";
		toggle.setAttribute("aria-pressed", "true");
	} else {
		root.removeAttribute("data-theme");
		toggle.textContent = "light mode";
		toggle.setAttribute("aria-pressed", "false");
	}
};

setTheme(storedTheme ?? (prefersLight ? "light" : "dark"));

toggle.addEventListener("click", () => {
	const isLight = root.getAttribute("data-theme") === "light";
	const next = isLight ? "dark" : "light";
	setTheme(next);
	localStorage.setItem("theme", next);
});

const robloxElement = document.getElementById("roblox-username");
const robloxId = robloxElement?.dataset.robloxId;
if (robloxElement && robloxId) {
	fetch(`https://users.roproxy.com/v1/users/${robloxId}`)
		.then((response) => (response.ok ? response.json() : null))
		.then((data) => {
			if (data?.name) {
				robloxElement.textContent = `${data.displayName} (@${data.name})`;
			} else {
				robloxElement.textContent = "roblox.com";
			}
		})
		.catch(() => {
			robloxElement.textContent = "roblox.com";
		});
}