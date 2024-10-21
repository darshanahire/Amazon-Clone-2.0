import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading() {
    return (
        <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px", height: "375px", padding: "34px" }}>
        <div className="like-div">
            <div className="text-center mb-1">
                <Skeleton height="150px" />
            </div>
            <Skeleton height="25px" />
            <div className="my-1">
                <Skeleton height="40px" />
            </div>
            <a className="linkDecoretionNone">
                <Skeleton height="50px" />
            </a>

        </div>
    </div>
    )
}

export default Loading
