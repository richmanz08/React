import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
function PageBversion2() {
  const Question = [
    { CommunityS: "การให้บริการไฟฟ้า", Q1: " รายงานครั้งไฟฟ้าดับ" },
    {
      Q1: " จำนวนพนักงานที่เข้าทำงาน",
    },
    {
      Q1: " จำนวนครั้งที่ไฟฟ้าดับ",
    },
    {
      Q1:
        "คะแนนเฉลี่ยผลการประเมินความพึงพอใจของบุคลากรหรือหน่วยงานที่มีต่อสารสนเทศนิสิต",
    },
  ];
  console.log(Question.Q1);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div>
      <UserScreen />
      <div className="pageA-grid">
        <div className="grid-items3 version2">
          <div className="ZoneHead">
            <div className="CommunityV2">
              หน่วยงาน <br></br>
              {Question &&
                Question.map((Question, index) => (
                  <div className="nameCV2">{Question.CommunityS}</div>
                ))}
            </div>
            <Link to="/PageAversion2">
              <button className="BackHome" onClick={"/PageAversion2"}>
                <img className="iconB1" src="./home.png" alt="value" />
                กลับสู่หน้าหลัก
              </button>
            </Link>
          </div>

          {Question &&
            Question.map((Question, index) => (
              <div className="BoxUser">
                <div style={{ display: "flex" }}>
                  <div className="ZoneNumber">{index + 1}</div>
                  <div className="ZoneQuestion">
                    <div className="itemQ">{Question.Q1}</div>
                  </div>
                  <div className="ZoneButton">
                    <button className="B1" onClick={handleShow}>
                      กรอกข้อมูล
                    </button>
                    <button className="B2">
                      <img className="iconB" src="./note.png" alt="value" />
                      ประวัติ
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Modal กรอกข้อมูล  */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>
            <h4 className="headpopup popup2">กรอกข้อมูล</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {Question &&
            Question.map((Question, index) => (
              <div className="itemQ">{Question.Q1}</div>
            ))} */}
          <input className="Answer" placeholder="ตอบ"></input>
          <textarea
            className="TextareaModalText"
            placeholder="ข้อมูลเพิ่มเติม 'ตรงนี้' "
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            className="btn btn-success MDT btn-sm"
            onClick={handleClose}
          >
            บันทึก
          </Button>
          <Button
            type="button"
            className="btn btn-secondary MDTT btn-sm"
            onClick={handleClose}
          >
            ย้อนกลับ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PageBversion2;
