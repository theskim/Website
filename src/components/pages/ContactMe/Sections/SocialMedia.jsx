const Logo = (props) => {
    return (
        <div className="social__logo">
            <a className="external-link" href={props.href}>
                <img src={props.src} loading='lazy' alt=''/>
            </a> 
        </div>
    );
}

const SocialMedia = (props) => {
    return (
        <div className="social-media">
            {props.src.map((image, i) =>
                <Logo src={image} href={props.href[i]} key={props.href[i]}/>
            )}
        </div>
    )
}

export default SocialMedia;