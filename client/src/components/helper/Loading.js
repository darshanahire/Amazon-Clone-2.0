import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading() {
    return (
        <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px", height: "300px", padding: "34px" }}>
        <div className="like-div">
            <div className="text-center mb-1">
                <Skeleton height="120px" />
            </div>
            <Skeleton height="15px" />
            <div className="my-1">
                <Skeleton height="30px" />
            </div>
            <a className="linkDecoretionNone">
                <Skeleton height="40px" />
            </a>

        </div>
    </div>
    )
}

export default Loading
