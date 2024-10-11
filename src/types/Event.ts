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