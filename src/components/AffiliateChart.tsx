import React, { useCallback, useEffect, useState } from "react";
import Flowchart from "flowchart-react";
import { ConnectionData, NodeData } from "flowchart-react/dist/schema";
import { useSelector, useDispatch } from 'react-redux'
import { updateNodes, updateConnections, clearChart, resetChart  } from '../redux/chartSlice'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AffiliateChart = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedNodeTitle, setSelectedNodeTitle] = useState('');

  const nodes : NodeData[] = useSelector((state : any) => state.nodes);
  const conns : ConnectionData[] = useSelector((state: any) => state.conns);
  const dispatch = useDispatch()
  const handleClickOpen = (item : NodeData) => {
    setSelectedId(item.id)
    setSelectedNodeTitle(item.title)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function handleDoubleClick(event: React.MouseEvent<SVGGElement, MouseEvent>, zoom: number): void {
    const point = {
      x: event.nativeEvent.offsetX / zoom,
      y: event.nativeEvent.offsetY / zoom,
      id: +new Date(),
    };
    let nodeData: NodeData;
    if (!nodes.find((item : NodeData) => item.type === "start")) {
      nodeData = {
        type: "start",
        title: "Start",
        ...point,
      };
    } else if (!nodes.find((item : NodeData) => item.type === "end")) {
      nodeData = {
        type: "end",
        title: "End",
        ...point,
      };
    } else {
      nodeData = {
        ...point,
        title: "New",
        type: "operation",
      };
    }
    dispatch(updateNodes([...nodes, nodeData]))

  }
  function handleNodeClick(id:number, title: string): void {
    
    var updatedNodes = nodes.map((nodeItem : NodeData) => {
      if (nodeItem.id === id ) {
        setSelectedNodeTitle(title)
        return { ...nodeItem, title: title };
      }
      return nodeItem;
    });
    
    dispatch(updateNodes(updatedNodes))

  }

  useEffect(() => {
    const rects = gsap.utils.toArray( document.querySelectorAll(".pointer-events-none"));

    if (rects.length) {
      rects.forEach((rect: any, index) => {
        console.log(rect)
        gsap.from(rect , {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rect,
            start: 'top 100%',
          },
        } );
      });
    }
  }, []);
 
  const screenWidth = window.screen.width;

  return (
    <div className="overflow-x-scroll md:overflow-x-hidden">
      <Flowchart
        onChange={(nodes, connections) => {
          dispatch(updateNodes(nodes))
          dispatch(updateConnections(connections))
      
        }}
        onDoubleClick={handleDoubleClick}
        onNodeDoubleClick = {handleClickOpen}
        style={{ width: "100%", height: screenWidth> 1920 ? "150vh" : "180vh", borderRadius: "10px" }}
        nodes={nodes}
        showToolbar= {false}
        connections={conns}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Node Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            value={selectedNodeTitle}
            onChange={event => handleNodeClick(selectedId ,event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>


    </div>
  
  );
};

export default AffiliateChart;
