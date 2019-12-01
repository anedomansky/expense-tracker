import { IExpense } from '../../../interfaces/IExpense';

class ExpenseService {
    private static instance: ExpenseService;

    private baseUrl: string;

    constructor() {
        ExpenseService.instance = this;
        this.baseUrl = 'http://localhost:4001';
    }

    public static getInstance(): ExpenseService {
        if (this.instance) {
            return this.instance;
        }
        return new ExpenseService();
    }

    public async getAllExpenses(): Promise<IExpense[]> {
        const responseRaw = await fetch(`${this.baseUrl}/expense/all`);
        const response = await responseRaw.json();
        return response;
    }
}

export default ExpenseService;
