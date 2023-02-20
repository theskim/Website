import Project from "./Project";
import { Aazami } from "../../../../assets/ProjectImages";

const TrackTC = () => {
    return (
        <Project
            title="Aazami - MakeUofT Winner of Most Innovative Power Efficient Hack using the Tiny ML Kit"
            alt="Aazami"
            skills="Qualcomm Tiny ML Kit • Edge Impulse • Arduino Nano 33 BLE Sense • Neo Pixels"
            image={Aazami}
            link="https://devpost.com/software/aazami"
            github="https://github.com/skim1601?tab=repositories"
        >
       The inspiration behind Aazami comes from a personal experience with a loved one who had dementia. Witnessing the struggles and frustration of forgetting memories was heart-wrenching. It made us realize the need for a simple yet effective solution that could alleviate this issue. That's when the idea of Aazami was born - to create a device that could ease the burden of memory loss, not just for our family, but for millions of families worldwide. Our hope is that Aazami can help people with dementia cherish and relive their precious memories, and provide a small but significant sense of comfort in their daily lives. <br/><br/>
       Aazami's main function is to record the last 10 seconds of voice, which can be replayed by using a voice command, "I forgot." This innovative feature helps users to retrieve lost memories and ease the frustration caused by forgetfulness. Aazami is compact and easy to use, making it a convenient companion for people with dementia, their families, and caregivers. By providing an easy and reliable way to recall memories, Aazami aims to enhance the quality of life of people with dementia and their loved ones.<br/><br/>
       To develop Aazami, we utilized a combination of hardware and software components including Arduino and Adafruit's Neopixel for the hardware, and Edge Impulse for machine learning. Our team started off by recording our own voices to create a dataset for "I forgot" voice detection, and refined it through trial and error to ensure the most appropriate dataset for our constraints. Then we generated Arduino code and improved it to optimize the hardware performance, and also created an amplifier circuit to boost the sound of the device. Through these iterative processes, we combined all the components to create a functional and effective solution. <br/><br/>

        Created by: Amirreza Aazam, Vishwa Eswaran, and Sean Kim
        </Project>
    );
}

export default TrackTC;