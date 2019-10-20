import { ICategory } from '../../../interfaces/ICategory';

class CategoryService {
    private static instance: CategoryService;

    constructor() {
        CategoryService.instance = this;
    }

    public static getInstance(): CategoryService {
        if (this.instance) {
            return this.instance;
        }
        return new CategoryService();
    }

    public static async getAllCategories(): Promise<ICategory[]> {
        const responseRaw = await fetch('http://localhost:4001/category/all');
        const response = responseRaw.json();
        return response;
    }

    // TODO: implement /add, /update, /delete
}

export default CategoryService;
