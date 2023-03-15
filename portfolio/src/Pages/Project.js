import React, {useEffect} from 'react';
import Header from "../Components/Header"
import Button from "../Components/Button";
import ImageContainer from '../Components/ImageContainer';


const Project = (props) => {

    useEffect(() => { props.setPortfolioNav(true)
        return () => {console.log(props.displayPortfolioNav); props.setPortfolioNav(false)}
         },[])
    


    return (
        <div>
            <h1>This is a a new section section</h1>
            <Header></Header>
            <ImageContainer></ImageContainer>

            <Button></Button>

        </div>
    );
}
export default Project;
