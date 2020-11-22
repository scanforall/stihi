
  const myColoring = new Coloring('.coloring', {
    url: './img/poem/2.svg', // Link to SVG image
    colors: [
        {
            color: "#f00301",
            palette: ["#f00301", "#140000", "#380000", "#660000", "#c20201", "#ff2020", "#ff7a7a", "#ffa8a8", "#ffd6d6"]
          }, {
            color: "#df6f3b",
            palette: ["#df6f3b", "#2c1307", "#6e2f13", "#843916", "#b04c1e", "#ea9f7c", "#edaf92", "#f1bfa7", "#f4cfbd"]
          }, {
            color: "#f0900d",
            palette: ["#f0900d", "#382201", "#663d02", "#945905", "#c27409", "#ffa526", "#ffb850", "#ffca7c", "#ffdca9"]
          }, {
            color: "#eedd1a",
            palette: ["#eedd1a", "#383402", "#665e05", "#93880c", "#c1b313", "#fdec2c", "#fdf153", "#fdf57e", "#fff8aa"]
          }, {
            color: "#30ef1c",
            palette: ["#30ef1c", "#0b3802", "#156606", "#1e940d", "#27c115", "#4efe2e", "#4efe2e", "#72fe53", "#bbffaa"]
          }, {
            color: "#08b4ef",
            palette: ["#08b4ef", "#002a38", "#014d66", "#036f94", "#0591c1", "#22c7fe", "#4ed2fe", "#7adeff", "#a8e9ff"]
          }, {
            color: "#0f61ef",
            palette: ["#0f61ef", "#011638", "#022a65", "#053c93", "#0a4fc1", "#2579fe", "#4f95fe", "#7baffe", "#a8cbfe"]
          }, {
            color: "#f110ef",
            palette: ["#f110ef", "#380138", "#660365", "#940693", "#c30bc1", "#cc55b2", "#ff50fe", "#ff7bfe", "#ffa9fe"]
          }, {
            color: "#787878",
            palette: ["#787878", "#0a0a0a", "#333333", "#4a4a4a", "#616161", "#8f8f8f", "#bdbdbd", "#d4d4d4", "#ebebeb"]
        }
    ],
    printButton: true,
    printButtonClass: 'coloring__print-button',
    printButtonText: ''
});