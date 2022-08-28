var count = 10;
var selected = [];
for (var i = 0; i < count; i++) {
    if (i % 4 != i % 2) {
        selected.push(i);
    }
}
console.log(selected.length)