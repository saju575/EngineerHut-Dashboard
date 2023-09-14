import React from 'react'
import "./SingleCustomer.css"

import jon from "../../../../assets/img/snow.jpeg";

const SingleCustomer = () => {

    return (
        <>
            <div className="customer-wrapper">
                <h1 className='customer-title'>Customers</h1>
                <p className='customer-links'>Home / <span>Customer List</span></p>
                <div className="customer-inner">
                    <div className="customer-innerLeft">
                        <img className='avatar' src={jon} alt="avatar" />
                        <div className='innerLeftTxt'>
                            <h2>Margaret Raw</h2>
                            <p className='text-muted'>+88 0 19 6545 2329 (654) </p>
                            <p className='text-blue'>jonsnow@gmail.com</p>
                            <p className='button'>Balance <br /> $1200</p>
                            <p> <span className='text-bold'>Last Order:</span> <br />7 days ago : <span className='text-blue'>#654649</span> </p>
                            <p className='text-bold'>Average Order Value: <span className='text-muted'> <br /> $454</span> </p>
                            <p> <span className='text-bold'>Last Order:</span> <br />7 days ago : <span className='text-blue'>#654649</span> </p>
                            <p className='text-bold'>Email Marketing</p>
                            <p>Subscribed</p>
                        </div>
                    </div>
                    <div className="customer-innerRight">
                        <div className="customer-rightTitle">
                            <div className="scroll-y">
                                <div className='orders-head'>
                                    <h3>Orders</h3>
                                    <p className='text-muted'>Total spent $73802210 on 7 days</p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr className='bg-muted'>
                                            <td className='text-blue padding'>#5d4f5fs56 </td>
                                            <td className='text-muted padding'> 27 Aug, 2023 </td>
                                            <p className="status cancelled padding">Cancelled</p>
                                            <td> 6 items </td>
                                            <td> <strong>$550.50</strong> </td>
                                        </tr>
                                        <tr>
                                            <td className='text-blue padding'>#645dfs5f5</td>
                                            <td className='text-muted padding'> 14 Mar, 2023 </td>
                                            <p className="padding">Shipped</p>
                                            <td> 9 items </td>
                                            <td> <strong>$210.40</strong> </td>
                                        </tr>
                                        <tr className='bg-muted'>
                                            <td className='text-blue padding'>#fs565d4f5</td>
                                            <td className='text-muted padding'> Today at 4:50 pm </td>
                                            <p className="padding">Delivered</p>
                                            <td> 10 items </td>
                                            <td> <strong>$149.70</strong> </td>
                                        </tr>
                                        <tr>
                                            <td className='text-blue padding'>#5dfs564f5 </td>
                                            <td className='text-muted padding'> 17 Dec, 2022 </td>
                                            <p className="padding">Delivered</p>
                                            <td> 6 items </td>
                                            <td> <strong> $128.90 </strong></td>
                                        </tr>
                                        <tr className='bg-muted'>
                                            <td className='text-blue padding'>#fs64dfdsd </td>
                                            <td className='text-muted padding'> 17 Dec, 2022 </td>
                                            <p className="padding">padding</p>
                                            <td> 6 items </td>
                                            <td> <strong> $128.90 </strong></td>
                                        </tr>
                                        <tr>
                                            <td className='text-blue padding'>#dfsd564f5 </td>
                                            <td className='text-muted padding'> 17 Dec, 2022 </td>
                                            <p className="padding">Delivered</p>
                                            <td> 6 items </td>
                                            <td> <strong> $128.90 </strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                        <a className='all-order-btn' href="#">View All Order</a>
                            </div>

                        </div>
                        <div className="account-details bg-muted">
                            <div className='account-dHead'>
                                <h4 className='text-bold'>Account Details</h4>
                                <p>🚀</p>
                            </div>
                            <hr />
                            <div className="account-dContent">
                                <div className='flexx'>
                                    <h6 className='text-muted'>First Name:</h6>
                                    <h6 className='text-bold'>Margardt</h6>
                                </div>
                                <div className='flexx'>
                                    <h6 className='text-muted'>Last Name:</h6>
                                    <h6 className='text-bold'>Raw</h6>
                                </div>
                                <div className='flexx'>
                                    <h6 className='text-muted'>Date of Birth: </h6>
                                    <h6 className='text-bold'>15 July 1465</h6>
                                </div>
                                <div className='flexx'>
                                    <h6 className='text-muted'>Gender: </h6>
                                    <h6 className='text-bold'>Male</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCustomer