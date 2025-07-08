// TODO: 벽
var maxEvents = function (events) {
    events.sort((a, b) => a[1] - b[1]);

    let attended = new Set();

    for (const [start, end] of events) {

        for (let day = start; day <= end; day++) {
            if (!attended.has(day)) {
                attended.add(day);
                break;
            }
        }
    }

    return attended.size;
};