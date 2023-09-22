class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.candidate = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        // Используем бинарный поиск для выбора нового кандидата
        this.candidate = Math.round((this.max - this.min) / 2 + this.min);
        return this.candidate;
    }

    lower() {
        // Устанавливаем верхнюю границу диапазона в текущий кандидат
        this.max = this.candidate ;
    }

    greater() {
        // Устанавливаем нижнюю границу диапазона в текущий кандидат
        this.min = this.candidate ;
    }
}


module.exports = GuessingGame;
