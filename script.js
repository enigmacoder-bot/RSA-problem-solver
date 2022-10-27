console.log("hello");
let submit = document.getElementById("submit");

function getVal() {
  let m = document.getElementById("m").value;
  let p = document.getElementById("p").value;
  let q = document.getElementById("q").value;
  let e = document.getElementById("e").value;
  let d;
  console.log(m);
  console.log(p);
  console.log(q);
  console.log(e);
  let n = p * q;
  let phi = (p - 1) * (q - 1);
  console.log("hello world");
  //calculate d
  for (d = 1; d < n; d++) {
    if ((e * d) % phi === 1) {
      console.log("d", d);
      break;
    }
  }
  //private cipher text

  function power(x, y, p) {
    // Initialize result
    let res = 1;

    // Update x if it is more
    // than or equal to p
    x = x % p;

    if (x == 0) return 0;

    while (y > 0) {
      // If y is odd, multiply
      // x with result
      if (y & 1) res = (res * x) % p;

      // y must be even now

      // y = $y/2
      y = y >> 1;
      x = (x * x) % p;
    }
    return res;
  }

  let c = power(m, e, n);
  console.log("cipher text", c);

  //plain text
  console.log("d", d);
  console.log("n", n);
  let plain = power(c, d, n);
  console.log("plain text", plain);

  //Results
  document.getElementById("phi").innerHTML = "φ(n): " + phi;
  document.getElementById("d").innerHTML = "d: " + d;
  document.getElementById("cipher-text").innerHTML = "Cipher: " + c;
  document.getElementById("plain-text").innerHTML = "Plain : " + plain;
}
submit.addEventListener("click", getVal);
