import { ICategory } from '../../../interfaces/ICategory';

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

    // TODO: implement /add, /update, /delete
}

export default CategoryService;
