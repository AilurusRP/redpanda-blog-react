export interface BlogData {
    _id: string;
    title: string;
    content: string;
    createTime: string;
    updateTime?: string;
    tags: string[];
}
