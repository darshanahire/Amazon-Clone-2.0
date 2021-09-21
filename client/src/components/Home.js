import React from 'react'
import Navbar from './Navbar'
import LeftSideBar from './LeftSideBar'
import RightContiner from './RightContiner'
import Categires from './helper/categires'
import ItemComp from './itemComp'
function Home() {
    return (<>
     <Navbar />
        <div className="mainContainer">
            <LeftSideBar />
            <div className="RightContiner">
                <RightContiner />
                <Categires />
                <div className="mainContainer" >
                    <ItemComp />
                </div>
            </div>
            </div>
        </>
        )
}

        export default Home
