import React, { useState, useEffect } from "react";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
import PageBversion2 from "./PageBversion2";
function PageAversion2(props) {
  const [users, setUsers] = useState();
  const [test, setTest] = useState(false);
  const [idProcess, setIdProcess] = useState("");
  const [community, setCommunity] = useState("");
  useEffect(() => {
    async function commuFetch() {
      const res = await fetch(
        "http://defea17a0c6b.ngrok.io/user/AllProcess?userID=1&fbclid=IwAR01t6muf9KCHSU5lWfkDODC3Z2sCpywdJO3DWBDTxOwdE03ZuGwi5sbC-s"
      );
      res.json().then(async (res) => {
        console.log.apply(res);
        setUsers(res);
        setCommunity(res);
      });
    }
    commuFetch();
  }, []);

  // const Community = [
  //   {
  //     name: "การประปา",
  //   },
  //   {
  //     name: "การให้บริการโทรศัพท์",
  //   },
  //   {
  //     name: "การให้บริการไฟฟ้า",
  //   },
  //   {
  //     name: "การให้บริการคมนาคม-ขนส่ง",
  //   },
  // ];
  // console.log(Community.name);
  const doClick = (id) => {
    setIdProcess(id);
    setTest(true);

    props.history.push("/process");
  };
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
              <div className="L22">{users && users.user.agency}</div>
            </div>
          </div>

          <div className="Inbox">
            {community &&
              community.process.map((communitys, index) => (
                <div className="sizeBox">
                  <div className="tab"></div>
                  <div className="numberIndex">{index + 1}</div>
                  <div className="buttonCom">
                    <div>
                      <div className="settingCom">
                        {" "}
                        {communitys.description}
                      </div>
                    </div>
                  </div>
                  <div className="KNP" style={{ textDecoration: "none" }}>
                    <Link
                      to={{
                        pathname: "/process",
                        state: { community: communitys.id },
                      }}
                      onClick={() => {
                        setIdProcess(communitys.id);
                      }}
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
