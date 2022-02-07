import { Fragment } from "react";
import { useSelector } from "react-redux";


const PostalInfo = () => {

    const postalData = useSelector((state) => state.postal.postalData);

    return (
        <Fragment>
            <p> This is the place for displaying the information</p>
           

            
            <p> {JSON.stringify(postalData)}</p>
           
        </Fragment>

    );

};

export default PostalInfo;