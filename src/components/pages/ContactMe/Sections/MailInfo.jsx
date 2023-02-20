import { Icon } from '@iconify/react';

const MailInfo = (props) => {
    return (
        <div className="contact-info">
            <div className="contact">
                <Icon icon="material-symbols:mail-rounded" />&nbsp;&nbsp;
                <a href={props.href}>
                    {props.display}
                </a>
            </div>
        </div>
    )
}

export default MailInfo;