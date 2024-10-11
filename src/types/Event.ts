export type Event = {
    id: number;
    status: boolean;
    title: string;
    discription: string;
    grouped: boolean;
}

export const event: Event[] = [
    { id: 1, status: true, title: "Evento Teste Boladão", discription: "Minino: R$ 100,00", grouped: true }
]

/*
export const cpf = [
    { person: { id: 1, name: "Pessoa 1" }, personMatched: { id: 4, name: "Pessoa 4" } },
    { person: { id: 2, name: "Pessoa 2" }, personMatched: { id: 6, name: "Pessoa 6" } }
]
*/