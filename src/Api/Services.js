const axios = require("./Axios");


let getStaticData = function () {
    return new Promise((resolve, reject) => {
        axios.getData("SelectAll_staticPages/")
            .then(res => {
                console.log(res);
                resolve(res);
            })
            .catch(error => {
                reject(error);

            })
    })
};



module.exports = {
    getStaticData
};
