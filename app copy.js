const a = (name, age, job) => {
  return{
    name: name,
    age: age,
    job: job
  }
}
// console.log(a());

const b = a("메타몽", 22, "홈프로텍터");
console.log(b);
b.address = '대전';
console.log(b);
