const api = 'http://something.com:3000'

const headers = {
    'Accept': 'application/json'
};

export const signup = (payload) =>
    fetch(`${api}/operations/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const login = (payload) =>
    fetch(`${api}/operations/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const logout = (payload) =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            localStorage.removeItem("UserName");
            localStorage.removeItem("email");
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const myprofile = (payload) =>
    fetch(`${api}/operations/myprofile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
// export const getImages = () =>
//     fetch(`${api}/files/`)
//         .then(res => res.json())
//         .catch(error => {
//             console.log("This is error.");
//             return error;
//         });
//
//
// export const uploadFile = (payload) =>
//     fetch(`${api}/files/upload`, {
//         method: 'POST',
//         body: payload
//     }).then(res => {
//         return res.status;
//     }).catch(error => {
//         console.log("This is error");
//         return error;
//     });
export const post = (payload) =>
    fetch(`${api}/operations/postproject`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response.projectname);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const dash = (payload) =>
    fetch(`${api}/operations/dashboard`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("in Dash API");
            console.log(response.projectname);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const bidder = (payload) =>
    fetch(`${api}/operations/bids`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);

            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const update = (payload) =>
    fetch(`${api}/operations/update`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const home = (payload) =>
    fetch(`${api}/operations/myproject`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response=>response.json())
        .then(response => {
            console.log("in home API");
            console.log(response);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const relevant = (payload) =>
    fetch(`${api}/operations/relevant`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response=>response.json())
        .then(response => {
            console.log("in relevant API");
            console.log(response);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const bids = (payload, payload2) =>

    fetch(`${api}/operations/bids`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
 body: JSON.stringify({
     "projectname": payload.projectname,
     "bid": payload2.bid, "period":payload2.period})
    }).then(response => response.json())
        .then(response => {
            console.log("in bids API");
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const pay = (payload) =>
    fetch(`${api}/operations/pay`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const freebal = (payload) =>
    fetch(`${api}/operations/freebal`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const withdraw = (payload) =>
    fetch(`${api}/operations/withdraw`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const projbid = (payload) =>
    fetch(`${api}/operations/projbidon`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const details = (payload) =>
    fetch(`${api}/operations/projectdetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const allbid = (payload) =>
    fetch(`${api}/operations/allbids`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const hire = (payload, payload2) =>

    fetch(`${api}/operations/hire`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "projectname": payload.projectname,
            "bidder":payload.Bids[0].bidder,
            "bid":payload.Bids[0].bid,
            "period":payload.Bids[0].period,
            "hire": payload2.hire
        })
    })
            .then(response => response.json())
            .then(response => {
                console.log("in hire API");
                return response;
            })
            .catch(error => {
                console.log("This is error");
                return error;
            });
