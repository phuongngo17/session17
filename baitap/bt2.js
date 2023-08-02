class Temperature{
    constructor(celsius) {
        this.celsius = celsius;
        this.changeF = () => {
            if (celsius >= -273) {
                return (celsius * 1.8) + 32;
             }
        
        }
        this.changeK = () => {
            if (celsius >= -273) {
                return celsius + 273.15;
            }
        }
    }
}
let temperature = new Temperature(25);
console.log(temperature.changeF());
console.log(temperature.changeK());