import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
// --
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
//--
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}
TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
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
      <div className="pageA-grid">
        <div className="grid-items3 version2">
          <div className="ZoneHead">
            <div className="effect"></div>
            <div className="CommunityV2">
              หน่วยงาน <br></br>
              <div className="nameCV2">การไฟฟ้า</div>
            </div>
            <Link to="/PageAversion2" style={{ textDecoration: "none" }}>
              <button className="BackHome" onClick={"/PageAversion2"}>
                <ion-icon name="home-outline"></ion-icon>
                กลับสู่หน้าหลัก
              </button>
            </Link>
          </div>

          {Question &&
            Question.map((Question, index) => (
              <div className="BoxUser">
                <div className="z">
                  <div className="ZoneNumber">{index + 1}</div>
                  <div className="ZoneQuestion">
                    <div className="itemQ">{Question.Q1}</div>
                  </div>
                  <div
                    className="ZoneButton"
                    onClick={() => setDesc(Question.Q1)}
                  >
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
            <h4 className="desc">{desc}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {Question &&
            Question.map((Question, index) => (
              <div className="itemQ">{Question.Q1}</div>
            ))} */}
          <div className="newAnswer">
            <TextField
              label="ตอบ"
              className="newAnswer"
              value={values.numberformat}
              onChange={handleChange}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </div>
          {/* <input
            type="text"
            className="Answer"
            placeholder="ตอบ"

            value={phoneNumber}
            pattern="^[0-9]+\.[0-9][0-9]$"

            onKeyDown={(e) =>
              (e.keyCode === 69 ||
                e.keyCode === 106 ||
                e.keyCode === 107 ||
                e.keyCode === 109 ||
                e.keyCode === 111) &&
              e.preventDefault()
            }
          ></input> */}

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
