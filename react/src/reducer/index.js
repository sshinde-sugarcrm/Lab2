import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {LOGOUT} from '../actions/loginactions';
import {POST} from '../actions/loginactions';
import {DASH} from '../actions/loginactions';
import {BID} from '../actions/loginactions';
import {UPDATE} from '../actions/loginactions';
import {MYPROFILE} from '../actions/loginactions';
import {HOME} from '../actions/loginactions';
import {RELEVANCE} from '../actions/loginactions';
import {PAY} from '../actions/loginactions';
import {FREEBAL} from '../actions/loginactions';
import {WITHDRAW} from '../actions/loginactions';
import {PROJBIDON} from '../actions/loginactions';
import {DETAILS} from '../actions/loginactions';
import {ALLBIDS} from '../actions/loginactions';

import {HIRED} from '../actions/loginactions';
const initialState = {
    "stores":{

        "username" : 'saish',
        "email" : 'shinde',
        "status":'200',
        "signup":'false',
        "loginstatus":true
    }
};

const stores= (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:
            console.log("im here in login store");
            console.log(state)
            return {
                ...state,
                "stores":{
                    "email":action.data.email,
                    "login":action.data.status,
                    "username":action.data.Username,
                    "loginstatus":true
                }
            }
        case SIGNUP:
            console.log("im here in Signup store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                   "signup":action.data.status
                }
            }
        case LOGOUT:
            console.log("im here in Logout store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "loginstatus":false
                }
            }
        case POST:
            console.log("im here in POST store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "Posted":action.data.status,
                }
            }
        case UPDATE:
            console.log("im here in UPDATE store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "updated":action.data.status,
                }
            }

        case MYPROFILE:
            console.log("im here in myprofile store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "name":action.data.value.name,
                    "email":action.data.value.email,
                    "phones":action.data.value.phones,
                    "aboutme":action.data.value.aboutme,
                    "skills":action.data.value.skills,
                }
            }
        case DASH:
            console.log("im here in DASH store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "dashed":action.data.value,
                }
            }
        case BID:
            console.log("im here in BID store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "bids":action.dat.status,
                }
            }
        case HOME:
            console.log("im here in Home store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "homes":action.data.value
                }
            }
        case RELEVANCE:
            console.log("im here in Relevant store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "matched":action.data.value
                }
            }

        case PAY:
            console.log("im here in Payment store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "message": action.data.message
                }
            }

        case FREEBAL:
            console.log("im here in freebal store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "freebal": action.data.amount
                }
            }
        case WITHDRAW:
            console.log("im here in withdraw store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "withdraw": action.data.balance
                }
            }
        case PROJBIDON:
            console.log("I am here in you bid on store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "ubidon":action.data.value
                }
            }
        case DETAILS:
            console.log("I am here in you bid on store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "detailed":action.data.value
                }
            }

            case ALLBIDS:
            console.log("I am here in all bids  store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "allbid":action.data.value
                }
            }

        case HIRED:
            console.log("I am here Hire on store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "hired":action.data.data
                }
            }


        default :
            return state;
    }
};

export default stores;