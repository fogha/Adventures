import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 50
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart:this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                
                    <Fade 
                        onReveal = {() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets Before June 20th</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada 
                            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies 
                            eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                            </p>
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"   
                                color="#ffffff"
                                link="#"                       
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;