import React, { useEffect } from "react";




const  JobDetails = (props)=> {
        useEffect(() => {
            console.log('Use Effect');
            setTimeout(() => {
                alert('Data Saved!!')
            }, 1000);
        });
        console.log('[Job Details] Render')
        return(
            <>
                <div onClick={props.UseE}>
                    JobTitle : {props.JobName}                   
                </div>

            </>
        )
        
}


export default JobDetails;