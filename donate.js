
  function payWithPaystack(){
    var handler = PaystackPop.setup({
      key: 'pk_test_e24f463c387ba758f4a5c286e02942d7afb48f13',//my public key
      email: 'tlizsketch@gmail.com',
      amount: 10000,
     // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      //514885654
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348170582843"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }
