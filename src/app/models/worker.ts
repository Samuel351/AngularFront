import { IDepartament } from './departament';
export interface IWorker{
    id: number;
    nome: string;
    email: string;
    rg: string;
    foto: string;
    departament: IDepartament;
}