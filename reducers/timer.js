export default class Timer {
    constructor(name) {
        this.name = name;
        this.time = 0;
        this.isrunning = false;
        this.billableHours = 0;
    }
}
