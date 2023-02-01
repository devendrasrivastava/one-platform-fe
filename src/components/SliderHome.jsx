import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderHome extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <div class = "card shadow">
                        <div class="inner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkRwKxusK_wAPTYYrqUPPpwogxJj9Hgq6Yw&usqp=CAU"class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class ="card-title">Fixed deposits</h5> 
                            <p class ="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero ex sunt nam, corrupti reiciendis qui expedita repudiandae, eveniet voluptatibus, incidunt temporibus quibusdam assumenda ea.</p>    
                        </div>  
                        </div>
          </div>
          <div>
            <h3>2</h3>
            <div class = "card shadow">
                        <div class="inner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkRwKxusK_wAPTYYrqUPPpwogxJj9Hgq6Yw&usqp=CAU"class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class ="card-title">Fixed deposits</h5> 
                            <p class ="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero ex sunt nam, corrupti reiciendis qui expedita repudiandae, eveniet voluptatibus, incidunt temporibus quibusdam assumenda ea.</p>    
                        </div>  
                        </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}