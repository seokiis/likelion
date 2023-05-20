import { useState } from "react";
import styled from "styled-components";

function App() {
  let [food, setFood] = useState(["노현호 튀김", "노현호 조림", "노현호 구이"]);
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);
  const [togle, setTogle] = useState(false);
  const [index, setIndex] = useState(null);
  const [newMenu, setNewMenu] = useState("");

  const handleModalOpen = (i) => {
    console.log(i);
    return () => {
      setIndex(i);
      setModal(!modal);
    };
  };

  const handleInputChange = (e) => {
    setNewMenu(e.target.value);
  };
  const handleClickButton = () => {
    let copy = [...food];
    copy.push("노현호 " + newMenu);
    setFood(copy);
  };

  const handleLikeClick = () => {
    setLike(like + 1);
  };

  const handleButtonClick = () => {
    if (togle) {
      let newArray = [...food];
      newArray[1] =
        "노현호 스페셜(노현호 칼국수 + 노현호 튀김 + 노현호 액젓 + 노현호 꼬지)";
      setFood(newArray);
    } else {
      let newArray = [...food];
      newArray[1] = "노현호 조림";
      setFood(newArray);
    }
    setTogle(!togle);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>노현호 맛집!!</div>
      </div>

      {food.map((a, i) => {
        return (
          <div className="list">
            <h4 onClick={handleModalOpen(i)}>
              {a}
              {i === 0 ? (
                <span onClick={handleLikeClick}>🤍{like}</span>
              ) : i === 1 ? (
                <button onClick={handleButtonClick}>
                  {togle ? "스페셜 메뉴로 변경" : "노현호 조림으로 변경"}
                </button>
              ) : (
                <span>💜</span>
              )}
            </h4>
            <P>2월 {`${i + 10}`}일 발행</P>
            <hr />
          </div>
        );
      })}
      {modal && <Modal food={food} index={index} />}

      <span>뭐 먹고싶어?</span>
      <Input name="menu" onChange={handleInputChange}></Input>
      <button onClick={handleClickButton}>추가</button>
    </div>
  );
}

const P = styled.p`
  color: blue;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100px;
`;

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.food[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
