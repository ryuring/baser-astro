import axiosBase from 'axios';
import https from "https";

const BASE_URL = 'https://baser-astro.localhost';

interface GetIndexRequest {
    endpoint: string;
}

type GetViewRequest = {
    id: string;
} & GetIndexRequest;

interface BlogPost {
    id: number;
    title: string;
    content: string;
    detail: string;
    eye_catch: string;
    posted: string;
}

interface BlogPosts {
    blogPosts: BlogPost[];
}

export type { GetIndexRequest, GetViewRequest, BlogPost, BlogPosts };

const agent = new https.Agent({ rejectUnauthorized: false });

const axiosInstance = axiosBase.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    httpsAgent: agent,
    responseType: 'json'
});

export class Client {

    readonly ROUTE: Record<string, { plugin: string; controller: string }>  = {
        blogs: {
            plugin: 'bc-blog',
            controller: 'blog_posts',
        }
    };
    
    async getIndex<T>({ endpoint }: GetIndexRequest) {
        const url = `/baser/api/${this.ROUTE[endpoint].plugin}/${this.ROUTE[endpoint].controller}/index.json`;
        try {
            const response = await axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.error('getIndex error:', error);
            return null;
        }
    }

    async getView<T>({ endpoint, id }: GetViewRequest) {
        const url = `/baser/api/${this.ROUTE[endpoint].plugin}/${this.ROUTE[endpoint].controller}/view/${id}.json`;
        try {
            const response = await axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.error('getView error:', error);
            return null;
        }
    }
}
