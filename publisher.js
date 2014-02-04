

var publisher = function (element) {

    this.initialize = function () {
        document.getElementById("publisher").appendChild(element);
        document.getElementById("send").addEventListener('click', this.recieveMessage);
    }

    this.recieveMessage = function (event, message) {
        mediatorObj.publishData(event.target.parentElement.childNodes[0].value);
    }.bind(this);


    this.initialize();

}