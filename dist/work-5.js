"use strict";
const componen = () => {
    let obj = {
        name: '메타몽',
        age: 26,
        job: '홈프로텍터'
    };
    let innerFunc = () => {
        if (obj.age > 20) {
            return "여름엔 맥주";
        }
        else {
            return "미자는 가라";
        }
    };
    let anotherFunc = () => {
        if (obj.job === "미남") {
            return '문제있네';
        }
        else {
            return "진실";
        }
    };
    return `
  <h1>${obj.name}</h1>
  <h1>${innerFunc()}</h1>
  <h1>${anotherFunc()}</h1>
  `;
};
// const tagComponent = (tagName, textNode) => {
//   return `<${tagName}>${textNode}</${tagName}>`;
// }
// const container = () => {
//   return `
//     ${tagComponent('header', '헤더부분')}
//     ${tagComponent('main', '메인부분')}
//     ${tagComponent('footer', '푸터부분')}
//   `;
// }
