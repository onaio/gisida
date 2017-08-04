export default function () {
    let url = "https://spreadsheets.google.com/feeds/list/1fVdPJMpe5tAiGp6yg2bg1J34L4kGdyT-nW_-oGmP1EQ/1/public/basic?alt=json";
    let DATA = [];
    $.getJSON(url, function (data) {
        let Data = data.feed.entry;

        for (let i = 0; i < Data.length; i += 1) {
            let rowArr = Data[i].content.$t.split(', ');
            let row = rowArr.reduce(function (obj, item) {
                let parts = item.split(': ');
                obj[parts[0]] = parts[1];
                return obj;
            }, {});

            DATA.push(row);
        }
    });
    return DATA;
}