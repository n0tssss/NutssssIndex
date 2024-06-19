const { createApp, ref } = Vue;

const themeKey = "n0ts-me-theme";

const setupData = {
    setTheme(theme) {
        window.localStorage.setItem(themeKey, theme);
        themeCache.value = theme;
    },
    loadTheme() {
        const cache = window.localStorage.getItem(themeKey);
        if (!cache) {
            this.setTheme("light");
        }
        document.documentElement.setAttribute("theme", cache || "light");
    },
    switchTheme() {
        themeCache.value = window.localStorage.getItem(themeKey);
        themeCache.value = themeCache.value === "light" ? "dark" : "light";
        this.setTheme(themeCache.value);
        this.loadTheme();
    }
};

createApp({
    setup() {
        const message = ref("Hello vue!");
        return {
            message
        };
    }
}).mount("#main");
