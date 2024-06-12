//객체를 함수로 바꿈
const basicData = () => {
  return {
    name: "메타몽",
    age: 13,
    job: "홈프로텍터"
  }
}

class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if(typeof newName !== "string"){
      throw new Error("name은 문자열이어야 합니다.");
    }
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if(typeof newAge !== "number"){
      throw new Error("age는 숫자여야 합니다.");
    }
    this._age = newAge;
  }

  get job() {
    return this._name;
  }

  set job(newJob) {
    if(typeof newJob !== "string"){
      throw new Error("job은 문자열이어야 합니다.");
    }
    this._job = newJob;
  }
}

//todo 1. 생성자 함수 setter로 규격만들기
//todo 2. 생성자 함수로 객체 생성하기
//todo 3. 생성자 함수 출처를 검사하기 -> insranceOf
//todo 4. true = 문자열 html 리턴
//todo 5. false = throw new error()


//컴포넌트 기본구조
const component = () => {
  //이 함수가 객체라는걸 추론
  let obj = new BasicData("메타몽", 25, "홈프로텍터")
  console.log(obj)
  console.log(obj instanceof BasicData)

  const decision = () => {
    if (obj instanceof BasicData) {
      return   
      `<html>
        <body>
          <div>${obj._name}</div>
          <div>${obj._age}</div>
          <div>${obj._job}</div>
        </body>
      </html>`
    } else {
      console.error("에러다!")
    }
  }
  return decision()
}
console.log(component())