import getInfo from "../getInfo";

test('should return correct []', () => {
    const obj = {
        name: 'Лучник',
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]
    };
    const expected = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ];
    const result = getInfo(obj);
    expect(result).toEqual(expected);
})