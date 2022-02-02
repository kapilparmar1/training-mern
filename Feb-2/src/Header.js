const HEADER = ({Heading,title,clicked}) => {

    return(
        <>
        <div>
            <h2>{clicked ? `${Heading} : ${title}` : Heading}</h2>
        </div>
        </>
    )

}
export default HEADER;