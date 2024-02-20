   //1 promise cb
//     const breakCapcha = (capcha, cb) => {
//       if (typeof capcha !== 'string') {
//             cb(null,'This function accepts only STRING captchas!');
//           }
          
//         setTimeout(() => {
//           let solution = capcha.split("");
//           cb(solution);
//         }, 1000);
//       };

//       const render=(solution, err)=>{
//         if(err)
//         result.innerHTML=`${err}`
//       else
//         result.innerHTML = `${solution.join(' ')}`
//       }
      
        
       
// breakCapcha("abc123",render)

//2 promise constructor

const breakCapcha=(captcha)=>{
  return new Promise((resolve, reject)=>{
    if(typeof captcha !=='string')
  return  reject('This function accepts only STRING captchas!')

  // breacking

  setTimeout(()=>{
    let solution=captcha.split('')
    resolve(solution)
  },1000)
  })
}
const renderRersult=(solution)=>{
  result.innerHTML=`${solution.join(' ')}`
}
const renderError=(err)=>{
  result.innerHTML=`${err}`
}
breakCapcha(null)
  .then(renderRersult)
  .catch(renderError)
