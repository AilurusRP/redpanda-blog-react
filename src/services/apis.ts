import { BlogData } from "../interfaces/blog-data";
import request from "./request";

export function getAllBlogs() {
    return request<BlogData[]>("get-all-blogs");
}
