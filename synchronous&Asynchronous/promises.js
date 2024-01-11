const promise = new Promise(function (resolve, reject) {
  resolve("I am a resolved promise!");
});

promise.then((result) => console.log(result));
