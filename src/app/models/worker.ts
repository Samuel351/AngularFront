import { IDepartament } from './departament';
export interface IWorker{
    id: number;
    name: string;
    email: string;
    rg: string;
    photo: any;
    departament: IDepartament;
}