export default function Company(props: {
    name: string;
    description: string;
    link: string;
}) {
    return (
        <>
        <div className = "companyCard">
            <div className = "companyCardContents">
                    <a href={props.link}><p>{props.name}</p></a>
                    <p>{props.description}</p>
            </div>
            <hr></hr>
        </div>
        </>
    )
}