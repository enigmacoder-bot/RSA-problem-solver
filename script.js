console.log('hello')
let submit=document.getElementById('submit')


function getVal(){
    let m=document.getElementById('m').value
let p=document.getElementById('p').value
let q=document.getElementById('q').value
let e=document.getElementById('e').value
 let d;
    console.log(m)
    console.log(p)
    console.log(q)
    console.log(e)
    let n=p*q;
    let phi=(p-1)*(q-1)
    console.log('hello world')
    //calculate d
for(d=1;d<n;d++){
    if((e*d)%phi===1){
        console.log("d",d)
        break
    }
}
//private cipher text
let c=Math.pow(m,e)%n
console.log('cipher text',c)

//plain text

let plain=Math.pow(c,d)%n
console.log('plain text',plain)

//Results
document.getElementById('phi').innerHTML="φ(n): "+phi
document.getElementById('d').innerHTML= "d: "+d
document.getElementById('cipher-text').innerHTML="Cipher: "+c
document.getElementById('plain-text').innerHTML="Plain : "+plain


}

submit.addEventListener('click',getVal)

