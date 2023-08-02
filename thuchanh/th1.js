class myDate {
    constructor(day, month, year){
        console.log(this);
        this.day = day;
        this.month = month;
        this.year = year;
        this.getDay = () => {
            return this.day;
        }
        this.setDay = (day) => {
            this.day = day;
        }
        this.getMonth = () => {
            return this.month;
        }
        this.setMonth = (month) => {
            this.month = month;
        }
        this.getYear = () => {
            return this.year;
        }
        this.setYear = (year) => {
            this.year = year;
        }   
        this.setDate = (day,month,year) => {
            this.day = day;
            this.month = month;
            this.year = year;
        }
        this.toString = () => {
            return this.day + "/" + this.month + "/" + this.year;
        }
}
    
}
let date = new myDate(17, 7, 2005);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
console.log(day + "/" + month + "/" + year);

date.setDay(12);
date.setMonth(8);
date.setYear(2019);
console.log(date.day + "/" + date.month + "/" + date.year);
date.setDate();
console.log(date.toString());