import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/work.css";
import WorkRoofReplacement from "./WorkRoofReplacement";
import WorkRoofRepair from "./WorkRoofRepair";
import WorkExteriorRepair from "./WorkExteriorRepair";
import Gallery from "./Gallary";



function Work() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabSelect = (index) => {
        setTabIndex(index);
    };

    return (
        <section id="Work">
            <div className="Work">
                {/* <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect} className="ReactTabs">
                    <TabList className="ReactTabs__TabList">
                        <Tab className="ReactTabs__Tab">Roof Replacement</Tab>
                        <Tab className="ReactTabs__Tab">Roof Repairs</Tab>
                        <Tab className="ReactTabs__Tab">Exterior Repairs</Tab>
                    </TabList>

                    <TabPanel className="ReactTabs__TabPanel"> */}
                        <Gallery/>
                    {/* </TabPanel>
                    <TabPanel className="ReactTabs__TabPanel">
                        <WorkRoofRepair />
                    </TabPanel>
                    <TabPanel className="ReactTabs__TabPanel">
                        <WorkExteriorRepair />
                    </TabPanel>
                </Tabs> */}

            </div>
        </section>
    );
}

export default Work;
