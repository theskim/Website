const SetOverflow = (isModalOpen) => {
    if (isModalOpen){
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
        document.getElementsByTagName('html')[0].style.position = "fixed";
        document.getElementsByTagName('body')[0].style.position = "fixed";
    } else {
        document.getElementsByTagName('html')[0].style.overflowY = "auto";
        document.getElementsByTagName('body')[0].style.overflowY = "auto";
        document.getElementsByTagName('html')[0].style.position = "static";
        document.getElementsByTagName('body')[0].style.position = "static";
    }
}

export default SetOverflow;