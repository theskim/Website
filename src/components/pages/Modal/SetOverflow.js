const setOverflow = (isModalOpen) => {
    if (isModalOpen){
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
    } else {
        document.getElementsByTagName('html')[0].style.overflowY = "auto";
        document.getElementsByTagName('body')[0].style.overflowY = "auto";
    }
}

export default setOverflow;