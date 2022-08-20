const Contact = (props) => {
    return (
        <>
            <img src={props.src} alt=""/>&nbsp;&nbsp;
            <a href={props.href}>
                {props.children}<br/>
            </a>
        </>
    );
}

const ContactInfo = (props) => {
    return (
        <div className="contact-info">
            {props.src.map((image, i) =>
                <Contact src={image} href={props.href[i]}>
                    {props.display[i]}
                </Contact>
            )}
        </div>
    )
}

export default ContactInfo;