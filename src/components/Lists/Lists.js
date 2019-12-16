import React from 'react';
import SingleItem from "./List/SingleItem";
import Grid from '@material-ui/core/Grid';
import Modal from "../Modal/Modal";

const Lists = (props) => {
    console.log(props)
    let single;
    if(props.images.length !== 0){
        single = props.images.results.map((image,index) => {
            return (
                 <SingleItem
                     key={image.id}
                     id={image.id}
                     urlImage={image.urls.regular}
                     description={image.alt_description}
                     userName={image.user.first_name}
                     click={props.handleModal}
                     object={image}
                 />
            )
        })
    }
  return (
      <div className='content'>
          <Grid container spacing={3}>
          {single}
          </Grid>
          <Modal show={props.show} close={props.handleHide} item={props.activeItem}/>
      </div>
  )


};

export default Lists;
