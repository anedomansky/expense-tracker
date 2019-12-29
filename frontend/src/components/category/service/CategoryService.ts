import { ICategory } from '../../../interfaces/ICategory';
import { ISuccessMessage } from '../../../interfaces/ISuccessMessage';

class CategoryService {
    private static instance: CategoryService;

    private baseUrl: string;

    constructor() {
        CategoryService.instance = this;
        this.baseUrl = 'http://localhost:4001';
    }

    public static getInstance(): CategoryService {
        if (this.instance) {
            return this.instance;
        }
        return new CategoryService();
    }

    public async getAllCategories(): Promise<ICategory[]> {
        const responseRaw = await fetch(`${this.baseUrl}/category/all`);
        const response = responseRaw.json();
        return response;
    }

    public async addCategory(name: string): Promise<ISuccessMessage> {
        const responseRaw = await fetch(`${this.baseUrl}/category/add`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        const response = responseRaw.json();
        return response;
    }

    public async removeCategory(id: number): Promise<ISuccessMessage> {
        const responseRaw = await fetch(`${this.baseUrl}/category/delete`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        const response = responseRaw.json();
        return response;
    }
}

export default CategoryService;
