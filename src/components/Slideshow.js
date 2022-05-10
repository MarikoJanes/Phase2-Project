import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slideshow({recipeData}) {
    let data =recipeData;
    
    if(recipeData==undefined || recipeData==null || recipeData.length == 0){
    let tmp = [{"image" : "https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif",
    "name":"Place holder"}];
    recipeData = tmp;
    }
    const eggImages = recipeData.map(recipe => {
        return <div key={recipe.id}><img style={{width: "200px", height: "200px", paddingLeft: "70px"}} src={recipe.image} alt={recipe.name}/></div>
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


  return (
    <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {eggImages}
    </Carousel>
  )
}

export default Slideshow