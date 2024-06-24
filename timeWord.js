function timeWord(time){
    if (time[0] == 0 && time[1] == 0 && time[3] == 0 && time[4] == 0) return 'midnight';
    if (time[0] == 1 && time[1] == 2 && time[3] == 0 && time[4] == 0) return 'noon';

    let hours = ['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    let tens = ['oh','','twenty','thirty','forty','fifty'];
    let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let ones = ['','one','two','three','four','five','six','seven','eight','nine'];
    let result = ['hour','minute','am'];

    // Determine what hour it is
    let hour = time[0]+time[1];
    hour = Number(hour);
    if (hour > 12) hour -= 12;
    result[0] = hours[hour];

    // Determine what minute it is
    let minute = time[3]+time[4];

    if (minute[0] == 1) {result[1] = teens[Number(minute[1])]};

    if (minute[0] != 1 && minute[1] == 0) {result[1] = tens[Number(minute[0])]};
    if (minute[0] != 1 && minute[1] != 0) {result[1] = tens[Number(minute[0])] + ' ' + ones[Number(minute[1])]};

    if (minute[0] == 0 && minute[1] == 0) {result[1] = "o'clock"};

    // Determine if it is PM
    if (time[0] == 2) result[2] = 'pm';
    if (time[0] == 1 && time[1] > 1) result[2] = 'pm';

    return result.join(' ');
}