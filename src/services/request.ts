export default async function request<T>(resource: string, options?: RequestInit): Promise<T | undefined> {
    return (await fetch(`/api/${resource}`, options)).json();
}
