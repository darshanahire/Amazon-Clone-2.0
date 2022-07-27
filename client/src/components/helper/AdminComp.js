import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom'
import Swal from 'sweetalert2'
const AdminComp = () => {

    const initDat = {
        prodName: "",
        prodImg: "",
        prodBrand: "",
        highPrice: "",
        lowPrice: ""
    }
    let [allData, setAllData] = useState(initDat)
    let [prodImg, setProdImg] = useState();

    function handleChanges(e) {
        const { name, value } = e.target;
        setAllData({
            // spread operator
            ...allData,
            [name]: value,
        })
    }
    function handleImgChanges(e) {
        setProdImg(e.target.files[0])
    }


    const uploadProd = () => {

        const formdata = new FormData();
        formdata.append("file", prodImg);
        formdata.append("upload_preset", "b1mhgyub")

        axios.post("https://api.cloudinary.com/v1_1/darshanscloud/image/upload", formdata).then(async (res) => {
            let obj = {
                ...allData,
                prodImg: res.data.secure_url,
            }
            await axios.post("/add-new-prod", obj).then((data) => {
                if (data.status == 200) {
                    Swal.fire(
                        'Success',
                        'Product Uploaded',
                        'success'
                    )
                }
                else if (data.status == 201) {
                    Swal.fire(
                        'Error',
                        'Product Not Uploaded',
                        'error'
                    )
                }


            })

        })
        setAllData = initDat;
    }

    return (
        <div className="centerContainer">
            <Link className="navbar-brand my-3 mx-auto main_logo" to={"/"} ><img src="img/logoBlack.png" alt="amazon" width="170px" /></Link>
            <div className="loginForm">
                <h4 className="text-center mb-3">Sell Products On Amazon</h4>
                <label htmlFor="prodName" className="lable">Name of Product</label>
                <input type="text" className="loginInput" id="prodName" name="prodName" value={allData.prodName} onChange={handleChanges} />
                <label htmlFor="prodImg" className="lable">Please Upload Image of Product</label>
                <input className="mx-auto my-2" type="file" id="prodImg" name="prodImg" accept="image/*" onChange={handleImgChanges} />
                <label htmlFor="prodBrand" className="lable">Company of Product</label>
                <input type="text" className="loginInput" id="prodBrand" name="prodBrand" value={allData.prodBrand} onChange={handleChanges} />
                {/* <label htmlFor="prodRating" className="lable">Rating of Project</label>
        <input type="text" className="loginInput" id="prodRating" /> */}
                <div className="row d-flex">
                    <div className="col-6 text-center">
                        <label htmlFor="highPrice" className="lable mb-2">Price</label>
                        <input type="text" className="loginInput w-100" name="highPrice" id="highPrice" value={allData.highPrice} onChange={handleChanges} />
                    </div>
                    <div className="col-6 text-center">
                        <label htmlFor="lowPrice" className="lable mb-2">MRP</label>
                        <input type="text" className="loginInput w-100" name="lowPrice" id="lowPrice" value={allData.lowPrice} onChange={handleChanges} />
                    </div>
                </div>
                <button className="btnOrange" onClick={uploadProd}>Sell Your Product</button><br />
                <p style={{ "fontSize": "12px", "marginTop": "5px" }}>
                    By continuing, you agree to Amazon's Conditions of Use Privacy Notice</p>
            </div>
        </div>
    )
}
export default AdminComp
