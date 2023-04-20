import { classNames } from './classNames';

describe('className', () => {
    test('with only class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additionally classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', ['class1', 'class2'], {
                hovered: true,
                scrollable: true,
            }),
        ).toBe(expected);
    });

    test('with mod false', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            classNames('someClass', ['class1', 'class2'], {
                hovered: false,
                scrollable: true,
            }),
        ).toBe(expected);
    });

    test('with mod undefined', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            classNames('someClass', ['class1', 'class2'], {
                hovered: undefined,
                scrollable: true,
            }),
        ).toBe(expected);
    });
});
