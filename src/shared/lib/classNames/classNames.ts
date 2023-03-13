type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    additional: Array<string | undefined> = [],
    mods: Mods = {},
) {
    const modsClasses: string[] = [];

    for (const mod in mods) {
        if (mods[mod]) modsClasses.push(mod);
    }

    return [cls, ...additional.filter(Boolean), ...modsClasses].join(' ');
}
