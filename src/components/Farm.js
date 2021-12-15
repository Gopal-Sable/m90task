import react, { useContext, useEffect } from "react";
import farmContext from "../context/farmContext";
import FarmItems from "./FarmItems";
function Farm() {

    const context = useContext(farmContext);
    const { farms, setFarms, createFarm, showFarms } = context;
    const onChange = (e) => {
        // e.preventDefault();
        setFarms({ ...farms, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        createFarm(farms.farm_name, farms.balance, farms.message, farms.status);


    }
    useEffect(() => {
        showFarms();
    }, []);

    return (
        <div classname="container">
            <form>
                <h3>Create user For Farm</h3>
                <div className="container">
                    <div className="mb-3">
                        <label for="farm_name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="farm_name" name="farm_name" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="message" className="">Message</label>
                        <input type="texr" className="form-control" id="message" name="message" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="balance" className="">Balance</label>
                        <input type="number" className="form-control" id="balance" name="balance" onChange={onChange} />
                    </div>
                    <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div className="row">
                <h3>your farms</h3>
                {
                    farms.map((farm) => {
                        return <FarmItems key={farm._id} farm={farm} />;
                    })

                }
            </div>

        </div>
    )
}

export default Farm
