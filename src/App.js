
import{ useState } from 'react'; //내장되어있는 경우 {}를 사용해서 부름 (이미 리액트안에 내장되어있음 _node_modules안에 포함)
import './App.css';
import Quick from './component/Quick';
import Notice from './component/Notice';

//비동기의 경우에도 useState가 있어야만 사용가능_ 시간을 맞추기가 어려움



function App() {

  //useState로 선언된 변수의 값이 달라지면
  //App이라는 컴포넌트를 재랜더링한다.
  
  const [open, setToggle] = useState(true);
  //count는 변수명
  //count의 값은 useState(_)안의 값, setCount는 값을 변하게 대입할 메소드.
  return (

    <div className= {open ? "body openpopup" : "body"}>
      <div id="pop">
        <button onClick={ () => {setToggle(!open)}}>닫기</button>
        <p>화면 정가운데</p>
      </div>
    <Quick></Quick>
    <Notice title="공지사항"></Notice>
    </div>
  );
}
//event는 함수를 받을 수 있다. 동사는 받을 수 없기 때문에 onClick={ () => {setCount(1);}} 실행문을 안에 만들어서 사용
//onClick={ () => {setCount(count + 1);}} 의 경우느 가능하나 onClick={ () => {setCount(count++);}}는 오류남 왜? 증감식의 경우, 값을 증가해서 본인에게 다시 대입하는 시스템인데 여기서 setCount의 기능이 대입이기 때문에 오류발생
export default App;
