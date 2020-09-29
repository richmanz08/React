import React from "react";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
function PageAversion2() {
  const Community = [
    {
      name: "การประปา",
    },
    {
      name: "การให้บริการโทรศัพท์",
    },
    {
      name: "การให้บริการไฟฟ้า",
    },
    {
      name: "การให้บริการคมนาคม-ขนส่ง",
    },
  ];
  console.log(Community.name);

  return (
    <div>
      <UserScreen />

      <div className="Grid">
        <div className="GridLeft "></div>
        <div className="GridMain BoxPageA">
          <div className="HostLine">
            <div className="Line1">
              <div className="L11"></div>
              <div className="L12">การบวนการที่รับผิดชอบ</div>
              <div className="L13">กระบวนการทั้งหมด</div>
            </div>
            <div className="Line2">
              <div className="L21">ชื่อหน่วยงาน</div>
              <div className="L22">งานบริการอาคารและสถานที่กองบริหาร</div>
            </div>
          </div>

          <div className="Inbox">
            {Community &&
              Community.map((Community, index) => (
                <div className="sizeBox">
                  <div className="tab"></div>
                  <div className="numberIndex">{index + 1}</div>
                  <div className="buttonCom">
                    <div>
                      <div className="settingCom"> {Community.name}</div>
                    </div>
                  </div>
                  <Link
                    className="KNP"
                    to="/PageBversion2"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="keyNextpage">
                      <img
                        className="icon"
                        src="./nextpage.png"
                        alt="value"
                      ></img>
                      กรอกข้อมูล
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className="GridRight"></div>
      </div>
    </div>
  );
}
export default PageAversion2;
