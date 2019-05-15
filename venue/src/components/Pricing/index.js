import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

     state = {
         prices:[100, 150, 250],
         positions:['Balcony', 'Medium', 'Star'],
         desc:[
             'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
             'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero',
             'sit amet quam egestas semper.Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
         ],
         linkTo:['http://sales/a', 'http://sales/b', 'http://sales/c'],
         delay:[500, 0, 500]
     }

     showBoxes = () => (
         this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state. delay[i]}> 
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>         
                </div>
            </Zoom>
         ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;