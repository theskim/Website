import ProjectsTitle from "./ProjectsTitle";
import CommuterStudent from "./Descriptions/CommuterStudent";
import Click from "./Descriptions/Click";
import UofTHacksSite from "./Descriptions/UofTHacksSite";
import TrackTC from "./Descriptions/TrackTC";
import FutbolTabol from "./Descriptions/FutbolTabol";
import UofTHacksDashboard from "./Descriptions/UofTHacksDashboard";
import Aazami from "./Descriptions/Aazami";
import Mapper from "./Descriptions/Mapper";
import Processor from "./Descriptions/Processor";
import Divider from "../../../assets/Divider/Divider";
import "./Projects.scss";
import Select from 'react-select';
import { useState } from "react";
import React from "react";
import { scroller } from 'react-scroll';

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      border: "3px solid rgb(91, 58, 255)",
      borderRadius: "30px",
      boxShadow: state.isFocused ? "0 0 0 3px rgb(91, 58, 255)" : null,
      "&:hover": {
        border: "3px solid rgb(91, 58, 255)",
      },
      fontFamily: "Poppins",
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "20px 20px 20px 20px",
        border: "3px solid rgb(91, 58, 255)",
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      fontFamily: "Poppins",
      borderRadius: "20px 20px 20px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(91, 58, 255)"
        : state.isFocused
        ? "rgba(91, 58, 255, 0.1)"
        : "white",
      color: state.isSelected ? "white" : "rgb(91, 58, 255)",
      "&:hover": {
        backgroundColor: "rgba(91, 58, 255, 0.1)",
      },
      fontFamily: "Poppins",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(91, 58, 255)",
      fontFamily: "Poppins",
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: "rgb(91, 58, 255)",
      padding: "0.5rem",
      maxWidth: "50%",
    }),
};

const Projects = () => {
    const [selectedSection, setSelectedSection] = useState(null);

    const projects = [
      { name: 'Aazami', section: 'Machine Learning', component: <Aazami /> },
      { name: 'Aazami', section: 'Hardware', component: <Aazami /> },
        { name: 'Mapper', section: 'Fullstack / Software', component: <Mapper /> },
        { name: 'Processor', section: 'Hardware', component: <Processor /> },
        { name: 'UofTHacksDashboard', section: 'Fullstack / Software', component: <UofTHacksDashboard /> },
        { name: 'UofTHacksSite', section: 'Fullstack / Software', component: <UofTHacksSite /> },
        { name: 'TrackTC', section: 'Fullstack / Software', component: <TrackTC /> },
        { name: 'FutbolTabol', section: 'Fullstack / Software', component: <FutbolTabol /> },
        { name: 'CommuterStudent', section: 'Fullstack / Software', component: <CommuterStudent /> },
        { name: 'Click', section: 'Fullstack / Software', component: <Click /> },
    ];

    const handleSelectChange = (selectedOption) => {
        setSelectedSection(selectedOption.value);
        scroller.scrollTo('projects', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
    };

    const SectionSelect = () => {
        return (
            <div style={{margin: '0 auto 5rem auto', width: "min(75%, 40rem)"}}>
                <Select
                    options={[
                        { value: null, label: 'All sections' },
                        { value: 'Fullstack / Software', label: 'Fullstack / Software' },
                        { value: 'Machine Learning', label: 'Machine Learning' },
                        { value: 'Hardware', label: 'Hardware' },
                    ]}
                    styles={customStyles}
                    defaultValue={{ value: selectedSection, label: selectedSection ? selectedSection : 'All sections'}}
                    onChange={handleSelectChange}
                />
            </div>
        );
    };

    const uniqueProjects = projects.reduce((acc, curr) => {
        if (selectedSection != null || !acc.some(project => project.name === curr.name)) {
          acc.push(curr);
        } 
        return acc;
    }, []);

    const filteredProjects = uniqueProjects.filter(project => {
        return selectedSection ? project.section === selectedSection : true;
    });

    return (
        <>
            <ProjectsTitle/>
            <SectionSelect/>
            {filteredProjects.map(project => (
                <React.Fragment key={project.name}>
                    {project.component}
                    <Divider/>
                </React.Fragment>
            ))}
        </>
    );
}

export default Projects;