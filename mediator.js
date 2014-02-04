var mediatorObj = (function () {
    var subScriberList = [];

    return {
        publishData: function (message) {
            for (var i = 0; i < subScriberList.length; i++) {
                subScriberList[i].callback.call(subScriberList[i].instance, message);
            }
        },

        subscribeData: function (obj, callbackfun) {
            if (subScriberList.indexOf({instance: obj, callback: callbackfun})) {
                console.log(true);
            }
            subScriberList.push(
                {
                    instance: obj,
                    callback: callbackfun
                }
            )
        },


        unSubscribeData: function (obj, callbackfun) {
            for (var i = 0; i < subScriberList.length; i++) {
                if (subScriberList[i].instance === obj && subScriberList[i].callback === callbackfun) {
                    subScriberList.splice(i, 1);
                    i++;
                }
            }
        }
    };

})();