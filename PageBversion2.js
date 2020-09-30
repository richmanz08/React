import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
// --
import PropTypes from "prop-types";

import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return <NumberFormat maxLength={10} allowNegative={false} {...other} />;
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
function PageBversion2() {
  const [desc, setDesc] = useState();
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

  const [values, setValues] = React.useState({
    textmask: "(1  )    -    ",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <UserScreen />
      <div className="Grid">
        <div className="GridLeft positionB">
          <Link to="/PageAversion2" style={{ textDecoration: "none" }}>
            <button className="BackHome" onClick={"/PageAversion2"}>
              <img className="iconnBackhome" src="./back.png" alt="value" />
              ย้อนกลับ
            </button>
          </Link>
        </div>
        <div className="GridMain version2">
          <div className="ZoneHead">
            <div className="HostK">
              <div className="K1">
                <div className="K11"> </div>
                <div className="K12">ข้อมูลที่ต้องกรอก</div>
                <div className="K13">ปีการศึกษา</div>
                <div className="K14">2563</div>
              </div>
              <div className="K2">
                <div className="K21">ชื่อกระบวนการ</div>
                <div className="K22"></div>
                <div className="K23">การไฟฟ้า</div>
              </div>
            </div>
          </div>
          <div className="Inbox2">
            {Question?.map((Question, index) => (
              <div className="Inputbox">
                <div className="BeforeNumber"></div>
                <div className="ZoneNumber">{index + 1}</div>

                <div className="BodyZone">
                  <div className="ZoneQuestion">
                    <div className="itemQ">{Question.Q1}</div>
                  </div>

                  <div
                    className="ZoneButton"
                    onClick={() => setDesc(Question.Q1)}
                  >
                    <button className="B1" onClick={handleShow}>
                      <img className="iconB" src="./plus.png" alt="value" />
                      เพิ่มข้อมูล
                    </button>
                    <button className="B2">
                      <img className="iconB" src="./clock2.png" alt="value" />
                      ประวัติ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="GridRight"></div>
      </div>
      {/* Modal กรอกข้อมูล  */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>
            <h4 className="headpopup popup2">กรอกข้อมูล</h4>
            <h4 className="desc">{desc}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="newAnswer">
            <TextField
              label="ตอบ"
              max="5"
              // value={values.numberformat}
              style={({ width: "300px" }, { border: "none" })}
              onChange={handleChange}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </div>

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
