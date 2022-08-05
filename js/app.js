// Проверяем совместимость браузера, в котором мы запускаем
if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("Зарегистрировано!");
    } else {
        //  Регистрация serviceWorker
        navigator.serviceWorker
            .register("/js/sw.js", {
                scope: "/"
            })
            .then(function(reg) {
                console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
            });
    }
}