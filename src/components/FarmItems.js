import React, { useContext } from 'react'
import farmContext from '../context/farmContext';

const FarmItems = (props) => {
    const context = useContext(farmContext);
    const { deleteFarm } = context;
    const { farm } = props;
    return (
        <div className='col-md-3'>
            <div className="card" style={{ "width": "18rem" }}>

                <div className="card-body">
                    <h5 className="card-title"> {farm.farm_name}</h5>
                    <h5 className="card-title"> {farm.balance}</h5>
                    <p className="card-text">{farm.message}</p>
                    <p className="card-text">{farm.status}</p>

                    <button className='btn btn-danger' onClick={() => {
                        deleteFarm(farm._id)

                    }} >Delete</button>
                </div>
            </div>



        </div>
    )
}

export default FarmItems
