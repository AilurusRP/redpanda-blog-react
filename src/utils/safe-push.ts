export function safePush<T>(array: Array<T> | undefined, item: T) {
    if (!array) return [item];
    return [...array, item];
}
