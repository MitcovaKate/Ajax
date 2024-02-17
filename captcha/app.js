    const breakCapcha = (capcha, cb) => {
        setTimeout(() => {
          if (typeof capcha !== 'string') {
            throw new TypeError('This function accepts only STRING captchas!');
          }
      
          let solution = capcha.split("");
          cb(solution);
        }, 1000);
      };
