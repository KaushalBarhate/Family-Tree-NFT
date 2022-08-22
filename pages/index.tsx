import { Box, Stack } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import NodeModal from "../components/NodeModal";
import NodeModal2 from "../components/node2";

import React, { useState, useEffect } from 'react';



import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/common";
import { v4 } from "uuid";
import { Button } from "@chakra-ui/button";
import Image from 'next/image'


const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});

function clear(){
  window.onbeforeunload = function () {
    return "dont close";
  }
  window.location.reload()
}

function newconnectt(){
  document.getElementById("newcbutton").style.display="none"
  document.getElementById("connectbutton").click()
}

function newsubmit() {
  
  if(document.getElementById("connectbutton")==null){

  }
  if(document.getElementById("mint")==null){
    alert("Connect to Metamask first")

  }
  else{

    document.getElementById("mint").click()
  }
}
function polygonsubmit() {
  if(document.getElementById("polygonmint")==null){
    alert("Connect to Metamask first")
  }
  else{
    
    document.getElementById("polygonmint").click()
  }

  
}



export function bfs(
  id: string,
  tree: RawNodeDatum | RawNodeDatum[],
  node: RawNodeDatum
) {
  const queue: RawNodeDatum[] = [];

  queue.unshift(tree as RawNodeDatum);
  while (queue.length > 0) {
    const curNode = queue.pop();
    
    if (curNode.attributes?.id === id) {
      curNode.children.push(node);

      return { ...tree };
    }

    const len = curNode.children.length;

    for (let i = 0; i < len; i++) {
      queue.unshift(curNode.children[i]);
    }
  }
}


export default function Home() {
  const [surname, setsurname] = useState("Family Name");
  const [spouse, setspouse] = useState("Your Name");
  const [spouse2, setspouse2] = useState("");
  const [newid, setnewid] = useState("")
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: surname,
    attributes: {
      id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f",
    },
    children: [
      {
        name:spouse,
        attributes: {
          partner: spouse2,
          id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f2",
        },
        children: [],
      },
    ],
  });


  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const close = () => setNode(undefined);
  const [bool1, setbool1] = useState(true);
 
  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
    // console.log(datum)
    // console.log(tree)
    // setTree2(tree)
    // console.log(tree2)


  };
  const familydetails=(familyMemberName: string, spouse: string,spouse2: string) => {
    tree["name"]=familyMemberName
    tree["children"][0]["name"]=spouse
    console.log(tree)
    setsurname(familyMemberName)
    setspouse(spouse)
    setspouse2(spouse2)
    setTree(tree)
    setNode(undefined)
    
    

  };

  function bfspop(
  ) {
    const queue: RawNodeDatum[] = [];
  
    queue.unshift(tree as RawNodeDatum);
  console.log(queue)
  console.log(tree)
    while (queue.length > 0) {
      const curNode = queue.pop();
      console.log(curNode.attributes?.id)
      if (curNode.attributes?.id === newid){
        curNode.children.pop()
        return { ...tree }
  
      }
      console.log(curNode.attributes?.id)
  
  
      const len = curNode.children.length;
  
      for (let i = 0; i < len; i++) {
        queue.unshift(curNode.children[i]);
      }
    }
  }
  
function trial2(){
  const pop2=bfspop()
  setTree(pop2)

}

  const handleSubmit = (familyMemberName: string, spouse: string) => {
    setnewid(node.attributes?.id)
    const newTree = bfs(node.attributes?.id, tree, {
      name: familyMemberName,
      attributes: {
        partner: spouse,
        id: v4(),
      },
      children: [],
    });

    if (newTree) {
      setTree(newTree);

    }

    setNode(undefined);
  };

  //   setTimeout(function(){
  //     if(typeof window !=="undefined"){
  //       var myElement = document.querySelector(".rd3t-g");
  //       if(myElement!=null){
  //       var xforms = myElement.getAttribute('transform');
  //       var calc2=(window.innerWidth/2)
  //       myElement.setAttribute('transform', 'translate('+calc2 +' ,'+100+')');
  //       }

  //     } 
  //  }, 500);


  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum) => void
  ) => {
    const { nodeDatum } = customProps;

    if(document.getElementById("connectbutton")==null){
      // document.getElementById("clear").style.left="50%"
      document.getElementById("ethtext").style.display="none"
      document.getElementById("polygontext").style.display="none"
    }
    var ee = document.querySelector(".chakra-stack") as HTMLCanvasElement
    ee.style.backgroundColor = "white";



    if (nodeDatum.attributes.id == "411d9783-85ba-41e5-a6a3-5e1cca3d294f") {
      nodeDatum.name=surname

      return (
        <g>
          <circle
            r="15"
            fill={"https://source.unsplash.com/user/c_v_r"}
            onClick={() => click(nodeDatum)}
          />
          <text fill="black" strokeWidth="0.5" x="20" y="-5">
            {nodeDatum.name}
          </text>
        </g>
      );
    } else {
      if(nodeDatum.attributes.id=="411d9783-85ba-41e5-a6a3-5e1cca3d294f2"){
        nodeDatum.name=spouse
        nodeDatum.attributes.partner=spouse2
      }
      return (
        <g>
          <circle r="15" fill={"black"} onClick={() => click(nodeDatum)} />
          <text fill="black" strokeWidth="0.5" x="20" y="-5">
            {nodeDatum.name}
          </text>

          {/* <clipPath id="cut-off-bottom">
            <circle cx="100" cy="100" r="5s0" />
          <circle r="15"  onClick={() => click(nodeDatum)} />
          </clipPath>

          <image
            x="25"
            y="25"
            xlinkHref="http://placehold.it/150.png"
            height="150"
            width="150"
            clipPath="url(#cut-off-bottom)"
          ></image> */}

          <text fill="black" strokeWidth="0.5" x="20" y="15">
            {nodeDatum.attributes.partner}
          </text>
          {/* <circle r="15" cx="-200"fill={"black"}  />
          <text fill="black" strokeWidth="0.5" x="-220" y="-25">
            {"wife of " +nodeDatum.name}
          </text> */}
        </g>
      );
    }

  };

  function filter(node) {
    return (node.tagName !== 'i');
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  // console.log(tree)

  return (
    <Stack direction="row" spacing="md">
      <div id="store" ></div>
      {/* <Popup2></Popup2> */}
      <Button style={{ position: "absolute", left: "45%", backgroundColor: "transparent",fontSize:"20px" }}> <b><h1>Family Tree</h1></b></Button>
       <button id="ethtext" onClick={() => newsubmit()} style={{ position: "absolute", left: "90%", backgroundColor: "transparent" }} >Mint on Ethereum</button>
      <button id="polygontext" onClick={() => polygonsubmit()} style={{ position: "absolute", left: "80%", backgroundColor: "transparent" }} >Mint on Polygon</button>


      <Box className="tree12" w="100%" h="100vh">

        <Tree
          data={tree}
          orientation="vertical"
          zoomable={true}
          onNodeClick={handleNodeClick}
          translate={{
            x: 100,
            y: 100,
          }}
          renderCustomNodeElement={(nodeInfo) =>
            renderRectSvgNode(nodeInfo, handleNodeClick)
          }
        />
                 <NodeModal2
  onSubmit={(familyMemberName, s2,s3) => {
    setbool1(false)
    familydetails(familyMemberName,s2,s3)
    
  }}
  onClose={close}
  isOpen={Boolean(bool1)}
/>

        <NodeModal
          onSubmit={(familyMemberName, s2) => {
            handleSubmit(familyMemberName, s2);
           
          }}
          onClose={close}
          isOpen={Boolean(node)}
          />
       
      </Box>
      <Button
        position='absolute'
        top="78%"
        left="96%"
        backgroundColor="transparent"
      >
                <Image
          src="/undo.png"
          alt="undo"
          width={50} 
          height={50}
        />
        </Button>
      <Button
        position='absolute'
        top="83%"
        left="96%"
        backgroundColor="transparent"
      >
        <Image
          src="/clearicon.png"
          alt="clear"
          width={50} 
          height={50}
        />
      </Button>

      <Button
        position='absolute'
        top="88%"
        left="96%"
        backgroundColor="transparent"
        onClick={() => openInNewTab('https://discord.com/invite/8psJJmBr43')}
      >
        <Image
          src="/discord3.png"
          alt="Discord"
          width={50} 
          height={50}
        />
      </Button>
      <Button
        position='absolute'
        top="93%"
        left="96%"
        backgroundColor="transparent"
        onClick={() => openInNewTab('https://twitter.com/FamilyTreeNFT')}
      >
        <Image
          src="/twitter3.png"
          alt="Twitter"
          width={50}
          height={50}
        />
      </Button>
      {/* </Box> */}
    </Stack>
  );

}


