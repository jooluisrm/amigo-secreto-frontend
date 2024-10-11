type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
    return (
        <main className="text-center mx-auto max-w-lg p-5">
            <header>
                <h2 className="text-2xl text-yellow-400">Amigo Secreto</h2>
                <h1 className="text-3xl mt-5 mb-2">** TITULO DO EVENTO **</h1>
                <p className="text-sm mb-5">** DESCRIÇÃO DO EVENTO **</p>
            </header>

            ...

            <footer className="mt-5 text-sm">Criado por @jão.luisrm_</footer>
        </main>
    );
};

export default Page;