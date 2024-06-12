const componen = () => {
  let obj = {
    name : '메타몽',
    age : 26,
    job : '홈프로텍터'
  };
  
  let innerFunc = () => {
    if(obj.age > 20){
      return "여름엔 맥주"
    } else {
      return "미자는 가라"
    }
  }

  return `
  <h1>${obj.name}</h1>
  <h1>${innerFunc()}</h1>
  <h1>${obj.job}</h1>
  `;
}