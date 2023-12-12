export default function makePayment(amountValue) {
  let handler = PaystackPop.setup({
    currency: "GHS",

    key: "pk_test_e7f12eea1f4037699ccf34ac098ca52623e32077", // Replace with your public key
    email: "emailValue@gmaim.com",
    amount: amountValue * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
}
{
  /* 
<script>
  const paymentForm = document.getElementById("paymentForm");
  paymentForm.addEventListener("submit", payWithPaystack, false);
      function payWithPaystack(e) {
        e.preventDefault();
        console.log('1');
    
        
    
        handler.openIframe();
      }
    </script> */
}
