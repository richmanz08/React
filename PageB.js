import React,{useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
import UserScreen from './UserScreen';

function PageB() {
  
    const Question=[
      {  commun:"การให้บริการไฟฟ้า",
         Q1:"คำถามข้อที่1"

      },
      {
        Q1:"คำถามข้อที่2"
      },
      {
        Q1:"คำถามข้อที่3"
      },
      {
        Q1:"คำถามข้อที่4"
      }
      
    ];
     console.log(Question.Q1)
 //ปุ่ม 1
const [show, setShow]= useState(false);
const handleClose =() => {
      setShow(false);
 }
const handleShow = () => setShow(true);
     

 //ปุ่ม 2
const [show2, setShow2]= useState(false);
const handleClose2 =() => {
      setShow2(false);
 }
const handleShowB = () => setShow2(true);

    return ( 
      <div>
      <UserScreen />
      <div className="pageA-grid">   
      <div className = "grid-items3 "  >
      <div className= "Topic">กระบวนการที่รับผิดชอบ</div>         
      {Question && Question.map((Question, index)=> (
      <div>
      <div className='commun' >{Question.commun}</div>  
      <div className='Ques' >{Question.Q1}</div> 
      <div class="Userpage">
      
      <Button  type='button'  className="btn btn-warning btn-sm"  >
      <div className="History" >ประวัติ</div></Button>
      <input className="Answer" placeholder= "ตอบ"  ></input>
       
         <img className="IconChat" src='./ICOchat.png' alt='value' onClick={handleShowB}  />
       
      </div>
      </div>  ))}
      <Button  type='button' onClick={handleShow} className="btn btn-info" > 
      <div className="Pclickme" >บันทึก</div></Button>
      <Button  type='button' onClick={handleClose} className="btn btn-light"  href="/PageA" >
      <div className="Pclickme" >ย้อนกลับ</div></Button>
      

      </div>       
      </div>
                   {/* Modal ยืนยัน */}
<Modal show={show} onHide={handleClose} 
centered>
  <Modal.Header>
    <Modal.Title>
    <h4 className="headpopup">ยืนยันการบันทึกข้อมูล</h4>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
          <Button type="button" className="btn btn-success accept" href="/PageA" 
          >ยืนยัน</Button>
          <Button type="button" className="btn btn-secondary back" href="/PageB"
          >ย้อนกลับ</Button>
  </Modal.Body>


</Modal>
                {/* Modal สาเหตุ  */}
<Modal show={show2} onHide={handleClose2} 
centered>
  <Modal.Header>
    <Modal.Title>
    <h4 className="headpopup popup2">สาเหตุ</h4>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <textarea   className="TextareaModalText"  ></textarea>
  </Modal.Body>
<Modal.Footer>
          <Button type="button" className="btn btn-success MDT btn-sm"  onClick={handleClose2}
          >ตกลง</Button>
          <Button type="button" className="btn btn-secondary MDTT btn-sm"  onClick={handleClose2}
          >ย้อนกลับ</Button>
</Modal.Footer>

</Modal>


     </div>







    );
  }
  
  

  
  
  
  export default PageB;