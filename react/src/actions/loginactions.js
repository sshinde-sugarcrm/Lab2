import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const LOGOUT ="LOGOUT";
export const SIGNUP ="SIGNUP";
export const POST ="POST";
export const DASH ="DASH";
export const BID="BID";
export const BIDS="BIDS";
export const UPDATE="UPDATE";
export const MYPROFILE="MYPROFILE";
export const HOME="HOME";
export const RELEVANCE="RELEVANCE";
export const PAY="PAY";
export const FREEBAL="FREEBAL";
export const WITHDRAW="WITHDRAW";
export const PROJBIDON="PROJBIDON";

export const DETAILS="DETAILS";
export const ALLBIDS="ALLBIDS";
export const HIRED="HIRED";
export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {
            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
return {
    type: SIGNUP,
    message: "inside Signup Actions"
}
}

export function actionlogin(userdata) {
    console.log("in login");


    return function (dispatch) {
        try {

            API.login(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function login(data) {
    console.log("data in action==>",data);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}

export function actionlogout(userdata) {
    console.log("in logout");
    return function (dispatch) {
        try {
            API.logout(userdata)
                .then((response) => {
                    try {
                        console.log("inside logout action");
                        dispatch(logout(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function logout(data) {
    console.log("data in action==>",data);
    return {
        type: LOGOUT,
        message: "inside logout actions",
        data:data
    }
}


export function actionpost(userdata) {
    console.log("in Post");
    return function (dispatch) {
        try {

            API.post(userdata)
                .then((response) => {
                    try {
                        console.log("inside action post");
                        dispatch(post(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function post(data) {
    console.log("data in action==>",data);
    return {
        type: POST,
        message: "inside POST actions",
        data:data
    }
}

export function actiondash(userdata) {
    console.log("In Dash");
    return function (dispatch) {
        try {

            API.dash(userdata)
                .then((response) => {
                    try {
                        console.log("inside action dash");
                        dispatch(dash(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function dash(data) {
    console.log("data in action==>",data);
    return {
        type: DASH,
        message: "inside DASH actions",
        data:data
    }
}

export function actionbidon(userdata,userdata2) {
    console.log("In Action bid on");
    console.log(userdata2);
    return function (dispatch) {
        try {
            API.bids(userdata,userdata2)
                .then((response) => {
                    try {
                        console.log("inside action Bid on");
                        dispatch(bid(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
    }
export function bid(data) {
    console.log("data in action==>",data);
    return {
        type: BID,
        message: "inside BID actions",
        data:data
    }
}

export function actionbidder(userdata) {
    console.log("in bids actions");
    return function (dispatch) {
        try {

            API.bidder(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(bidder(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};
export function bidder(data) {
    console.log("data in action==>",data);
    return {
        type: BIDS,
        message: "inside BIDS actions",
        data:data
    }
}

export function actionupdate(userdata) {
    console.log("in update");
    return function (dispatch) {
        try {

            API.update(userdata)
                .then((response) => {
                    try {
                        console.log("inside update try");
                        dispatch(update(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function update(data) {
    console.log(data);
    return {
        type: UPDATE,
        message: "inside update Actions",
        data:data
    }
}

export function actionprof(userdata) {
    console.log("in myprofile");
    return function (dispatch) {
        try {

            API.myprofile(userdata)
                .then((response) => {
                    try {
                        console.log("inside update try");
                        dispatch(myprof(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function myprof(data) {
    console.log(data);
    return {
        type: MYPROFILE,
        message: "inside myprofile Actions",
        data:data
    }
}
export function actionhome(userdata) {
    console.log("In Action Home");
    return function (dispatch) {
        try {
            API.home(userdata)
                .then((response) => {
                    try {
                        console.log("inside action Home");
                        dispatch(home(response));
                        }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function home(data) {
    console.log("data in action==>",data);
    return {
        type: HOME,
        message: "inside HOME actions",
        data:data
    }
}
export function actionrelevant(userdata) {
    console.log("In Action Relevant");
    return function (dispatch) {
        try {
            API.relevant(userdata)
                .then((response) => {
                    try {
                        console.log("inside action RELEVANCE");
                        dispatch(relevance(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function relevance(data) {
    console.log("data in action==>",data);
    return {
        type: RELEVANCE,
        message: "inside RELEVANT actions",
        data:data
    }
}

export function actionpay(userdata) {
    console.log("In payment");
    return function (dispatch) {
        try {

            API.pay(userdata)
                .then((response) => {
                    try {
                        console.log("inside pay try");
                        dispatch(pay(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function pay(data) {
    console.log(data);
    return {
        type: PAY,
        message: "inside pay Actions",
        data:data
    }
}

export function actionbal(userdata) {
    console.log("In free bal");
    return function (dispatch) {
        try {

            API.freebal(userdata)
                .then((response) => {
                    try {
                        console.log("inside pay try");
                        dispatch(freebal(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function freebal(data) {
    console.log(data);
    return {
        type: FREEBAL,
        message: "inside freelancer balance Actions",
        data:data
    }
}

export function actionprojbidon(userdata) {
    console.log("In proj bid on");
    return function (dispatch) {
        try {

            API.projbid(userdata)
                .then((response) => {
                    try {
                        console.log("inside actionprojbidon try");
                        dispatch(projbid(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function projbid(data) {
    console.log(data);
    return {
        type: PROJBIDON,
        message: "inside project you have bid on Actions",
        data:data
    }
}
export function actionwithdraw(userdata) {
    console.log("In withdraw bal");
    return function (dispatch) {
        try {

            API.withdraw(userdata)
                .then((response) => {
                    try {
                        console.log("inside pay try");
                        dispatch(withdraw(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function withdraw(data) {
    console.log(data);
    return {
        type: WITHDRAW,
        message: "inside withdraw balance Actions",
        data:data
    }
}

export function actiondetails(userdata) {
    console.log("In project details");
    return function (dispatch) {
        try {

            API.details(userdata)
                .then((response) => {
                    try {
                        console.log("inside project details try");
                        dispatch(details(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function details(data) {
    console.log(data);
    return {
        type: DETAILS,
        message: "inside project details Actions",
        data:data
    }
}

export function actionallbids(userdata) {
    console.log("In all bids details");
    return function (dispatch) {
        try {

            API.allbid(userdata)
                .then((response) => {
                    try {
                        console.log("inside  all bids try");
                        dispatch(allbids(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
};

export function allbids(data) {
    console.log(data);
    return {
        type: ALLBIDS,
        message: "inside  all bids Actions",
        data:data
    }
}

export function actionhire(userdata,userdata2) {
    console.log("In Action hire on");
    console.log(userdata2);
    return function (dispatch) {
        try {
            API.hire(userdata,userdata2)
                .then((response) => {
                    try {
                        console.log("inside action Hire on");
                        dispatch(hired(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }
}
export function hired(data) {
    console.log("data in action==>",data);
    return {
        type: HIRED,
        message: "inside HIRED actions",
        data:data
    }
}