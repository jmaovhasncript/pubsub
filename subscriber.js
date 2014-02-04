var subscriber = function (type) {
    this.div = null;
    this.element = null;
    this.initialize = function () {
        this.type = type;
        var div = document.createElement('div');
        div.className = "subs"
        this.div = document.createElement('div');
        div.appendChild(this.div);
        this.element = document.createElement('input');
        this.element.className = "subscriber";
        div.appendChild(this.element)
        document.getElementById("container").appendChild(div);
    }

    this.update = function (message) {
        this.element.value = message;
    } ,
        this.subScribe = function () {
            mediatorObj.subscribeData(this, this.update);
            this.div.innerText = "subscribed";
        },

        this.unSubscribe = function () {
            mediatorObj.unSubscribeData(this, this.update);
            this.element.value = "";
            this.div.innerText = "unsubscribed";
        }
    this.initialize();
}
