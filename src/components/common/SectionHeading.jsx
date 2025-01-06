const SectionHeading = (props) => {

    const { title, subTitle } = props;

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <>
            <h3 className="custom-heading text-center">{title}</h3>
            <p className="text-center">{subTitle}</p>
        </>
    )
}

export default SectionHeading;