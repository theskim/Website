const Logo = (props) => {
    return (
        <div className="social__logo">
            <a className="external-link" href={props.href} class="button">
                <img src={props.src} alt="Loading.."/>
            </a> 
        </div>
    );
}

const SocialMedia = (props) => {
    return (
        <div className="social-media">
            {props.src.map((image, i) =>
                <Logo src={image} href={props.href[i]}/>
            )}
        </div>
    )
}

export default SocialMedia;