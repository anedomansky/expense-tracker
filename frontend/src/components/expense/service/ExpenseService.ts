import { IExpense } from '../../../interfaces/IExpense';
import { ISuccessMessage } from '../../../interfaces/ISuccessMessage';

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

    public async addExpense(description: string, amount: number, category: string): Promise<ISuccessMessage> {
        const responseRaw = await fetch(`${this.baseUrl}/expense/add`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description,
                amount,
                category,
            }),
        });
        const response = responseRaw.json();
        return response;
    }

    public async removeExpense(id: number): Promise<ISuccessMessage> {
        const responseRaw = await fetch(`${this.baseUrl}/expense/delete`, {
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

    // TODO: implement /update
}

export default ExpenseService;
