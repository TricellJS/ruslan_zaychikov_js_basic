let heightTree = +prompt(`Укажи высоту елки (числом):`);
let tree = '';

if(heightTree === 0) {
    console.log(`Твоя ёлка еще в земле и выглядит как семено :)`);
}
    for (let i = 0; i < heightTree; i++ ) {
    tree += ' '.repeat(heightTree - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(tree);
