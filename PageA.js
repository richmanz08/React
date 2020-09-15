import React from 'react';
import {  Button } from 'react-bootstrap';
import UserScreen from "./UserScreen"
function PageA() {
  const Community=[
    { 
       name: "การประปา"
    },
    {
       name:"การให้บริการโทรศัพท์"
    },
    {
      name:"การให้บริการไฟฟ้า"
    },
    {
      name:"การให้บริการคมนาคม-ขนส่ง"
    }
    
  ];
   console.log(Community.name)
 
  return (
   
    <div>
      <UserScreen />
      <div className="pageA-grid">
    <div className = "grid-items3"  >
    {Community && Community.map((Community, index)=>( <div>
    <div class="wrapButton">
    <Button style={{border: "none"}} href="/PageB" onClick className="buttonCom"    >
    
    <div className="CommunityName" > <div> {Community.name}</div></div></Button>
    </div>
    </div>  ))}
    </div>
    
    </div></div>
    
  );
}export default PageA;