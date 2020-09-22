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
      <h2 className="welcome">ยินดีต้อนรับเข้าสู่ระบบ</h2>
      <div className="MessageHeader">
        บุคลากรสามารถกรอกข้อมูลในระบบได้ตามวันเวลาที่กำหนด
      </div>
      <div className="pageA-grid">
        <div className="grid-items3 colorback">
          <div class="BoxPageA">
            <h1 className="SelectCommunity">
              <img className="logoKU" src="./rubik.png" alt="value" />
              เลือกหน่วยงานที่รับผิดชอบ
            </h1>
            {Community &&
              Community.map((Community, index) => (
                <Link to="/PageBversion2">
                  <button className="buttonCom">
                    <div className="CommunityName">
                      <div> {Community.name}</div>
                    </div>
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageAversion2;
