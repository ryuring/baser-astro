import { type BlogPosts, type BlogPost, Client } from './basercms-js-sdk';

const BASE_URL = 'https://baser-astro.localhost';
const IMAGE_BASE_URL = `${BASE_URL}/files/blog/1/blog_posts/`;

const client = new Client();

const formatEyeCatch = (blogPost: BlogPost): BlogPost => ({
    ...blogPost,
    eye_catch: IMAGE_BASE_URL + blogPost.eye_catch
});

export const getBlogs = async (): Promise<BlogPosts> => {
    const response = await client.getIndex({ endpoint: "blogs" });
    return response?.blogPosts.map(formatEyeCatch) ?? [];
};

export const getBlogDetail = async (id: string): Promise<BlogPost | null> => {
    const response = await client.getView({ endpoint: "blogs", id });
    return response?.blogPost ? formatEyeCatch(response.blogPost) : null;
};
