
const API_publicKey = "FLWPUBK-cd4aa57c8940d65152be8a015cc053e0-X";


    
// const email = document.getElementById('email').value;
// console.log(email)
// const currency = document.getElementById('final-currency').value;
// console.log(currency)
// const amounts = document.getElementById('amount').value;
// console.log(amounts)


function payWithRave() {
var x = getpaidSetup({
    PBFPubKey: API_publicKey,
    customer_email: document.getElementById('email').value,
    amount: document.getElementById('amount').value,
    customer_name: document.getElementById('firstName').value + document.getElementById('lastName').value,
    customer_phone: document.getElementById('phone').value,
    currency: document.getElementById('currency').value,
    txref: "rave-123456",
    meta: [{
        metaname: "flightID",
        metavalue: "AP1234"
    }],
    onclose: function() {},
    callback: function(response) {
        var txref = response.data.txRef; // collect txRef returned and pass to a                    server page to complete status check.
        console.log("This is the response returned after a charge", response);
        if (
            response.data.chargeResponseCode == "00" ||
            response.data.chargeResponseCode == "0"
        ) {
            // redirect to a success page
        } else {
            // redirect to a failure page.
        }

        x.close(); // use this to close the modal immediately after payment.
    }
});
}