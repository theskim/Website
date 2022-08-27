const Contact = (props) => {
    return (
        <div className="contact">
            <img src={props.src} alt=""/>&nbsp;&nbsp;
            <a href={props.href}>
                {props.children}
            </a>
        </div>
    );
}

const ContactInfo = (props) => {
    return (
        <div className="contact-info">
            {props.src.map((image, i) =>
                <Contact src={image} href={props.href[i]} key={props.display[i]}>
                    {props.display[i]}
                </Contact>
            )}
        </div>
    )
}

export default ContactInfo;