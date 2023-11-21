export default function getInfo({special}) {
    for (let point of special) {
        if (!('description' in point)) {
            point.description = 'Описание недоступно';
        }
    }
    return special;
}