type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
    return (
        <div>
            ID DO EVENTO: {params.id}
        </div>
    );
};

export default Page;