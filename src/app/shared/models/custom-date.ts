export class CustomDate {
    private year: number;
    private month: number;
    private day: number;
    constructor(Year: number, Month: number, Day: number){
        this.year = Year;
        this.month = Month;
        this.day = Day;
    }

    getFormatedDate(): string {
        return `${this.year}-${this.month}-${this.day}`;
    }
}
