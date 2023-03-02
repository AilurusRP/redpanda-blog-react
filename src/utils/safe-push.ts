export function safePush<T>(array: T[] | undefined, item: T) {
    if (!array) return [item];
    return [...array, item];
}
