// singleton_caliz/singleton.js

class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }

        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const fullMessage = `[${timestamp}] ${message}`;
        this.logs.push(fullMessage);
        console.log(fullMessage);
    }

    getLogs() {
        return this.logs;
    }
}

// Creamos una instancia global para usarla en toda la app
window.logger = new Logger();
Object.freeze(window.logger);
