


const Page = ({ params: { name } }: { params: { name: string } }) => {
    return (
        <div>{name.toString()}</div>
    )
}
export default Page;