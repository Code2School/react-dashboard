export const twelveHourGenerator = () => {
    let hourSeries = [];
    for (let i = 0; i < 24; i++) {
        let midday = 'AM';
        let time = i + 1;
        let key = time;
        if (time > 12) {
            time = time - 12;
            midday = 'PM'
        }
        hourSeries.push({
            time,
            key,
            midday
        });
    }
    return hourSeries;
}