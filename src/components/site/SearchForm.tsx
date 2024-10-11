"use client"

import { escapeCPF } from "@/utils/escapeCPF";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
}

export const SearchForm = ({ onSearchButton }: Props) => {

    const [cpfInput, setCpfInput] = useState('');

    return (
        <div>
            <p className="mb-3 text-xl">Qual seu CPF?</p>
            <input
                placeholder="Digite seu CPF"
                inputMode="numeric"
                type="text"
                className="w-full p-3 bg-white text-black text-center text-2xl outline-none rounded-lg"
                autoFocus
                value={cpfInput}
                onChange={e => setCpfInput(escapeCPF(e.target.value))}
            />
            <button
                className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-2xl border-b-4 border-blue-600 active:border-0"
                onClick={() => onSearchButton(cpfInput)}
            >Entrar</button>
        </div>
    );
}