import React, {Component} from 'react';
import image from './mainlogo.JPG';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';
import {connect} from 'react-redux';
import history from "./history";
import { Button } from 'reactstrap';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
const items = [

    {
        src:'https://www.f-cdn.com/assets/css/images/homepage/2x-nasa-3-78af6535.jpg',
        altText: '',
        caption: ''
    },
    {
        src:'https://www.f-cdn.com/assets/css/images/homepage/2x-app-1-374cf36f.jpg',
        altText: '',
        caption: ''
    },
    {
        src:'https://www.f-cdn.com/assets/css/images/homepage/2x-website-4-d8912531.jpg',
        altText: '',
        caption: ''
    }
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.state = {
            isOpen: false,
            activeIndex: 0
        };
    }
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style={{height:"600px",width:"1350px"}}/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return (
            <div>
            {!this.props.loginstatus ?
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="/login"><Button color="success">Login</Button></NavLink>
                            </NavItem>


                            <NavItem>
                                <NavLink href="/Signup"><Button color="success">Sign Up</Button></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>


            </div> :
                history.push('/profile')
            }
            </div>
        );
    }
}

const mapStateToProps =(stores)=> {
//if(stores.stores!=null){
    return {
        loginstatus : stores.stores.loginstatus
       // loginstatus : false
    };
//}

}


export default connect(mapStateToProps)(Header);