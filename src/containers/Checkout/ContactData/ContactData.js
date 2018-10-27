import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axiosOrders';

class ContactData extends Component {
    state = {
        name: '',
        phone: '',
        address: {
            zipCode: '',
            street: ''
        },
        loading: false

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Rodrigo Silva',
                phone: '+141641144',
                address: {
                    zipCode: 'M4C MMM',
                    street: '1 Danforth',
                }
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => { 
            this.setState({loading: false})
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading: false})
        });
    }

    render(){
        let form = (
            <form >
                <input className={classes.Input} type='text' name='name' placeholder='Your name'/>
                <input className={classes.Input} type='text' name='phone' placeholder='Phone'/>
                <input className={classes.Input} type='text' name='street' placeholder='Address'/>
                <input className={classes.Input} type='text' name='zipcode' placeholder='Zip code'/>
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner/>;
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;