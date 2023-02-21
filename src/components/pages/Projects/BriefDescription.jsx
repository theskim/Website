import { Icon } from '@iconify/react';
const BriefDescription = ({ skills }) => {
    return (
        <>  
            <p>
                <b><Icon icon="material-symbols:keyboard-previous-language" width="1.7rem"/>&nbsp;Tech Stack:&nbsp;</b>
                {skills}
            </p>
        </>
    );
} 

export default BriefDescription;