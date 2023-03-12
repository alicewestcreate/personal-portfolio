import React, {useEffect} from 'react';



const Section = (props) => {

    useEffect(() => { props.setPortfolioNav(true)
        return () => {console.log(props.displayPortfolioNav); props.setPortfolioNav(false)}
         },[])
    


    return (
        <div>
            <h1>This is a section</h1>
        </div>
    );
}
export default Section;
