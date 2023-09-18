const Logo = ({href, src}) => {
    return (
        <div className="social__logo">
            <a className="external-link" href={href}>
                <img src={src} loading='lazy' alt=''/>
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