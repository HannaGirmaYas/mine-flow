import { createSlice } from '@reduxjs/toolkit'
var initialChartState: any;
if(localStorage.getItem('chartData')){
  initialChartState = JSON.parse(localStorage.getItem('chartData') ?? '');

}else{
  initialChartState = {
    nodes: [
      
      {
        x: 50,
        y: 50,
        id: 1,
        width: 300,
        title: "Business creates product/service",
        type: "operation",
      },
      {
        x: 50,
        y: 180,
        id: 2,
        width: 300,
        title: "Business joins affiliate program and creates offer",
        type: "operation",
      },
      {
        x: 480,
        y: 95,
        id: 3,
        width: 230,
        height: 230,
        title: "Affiliates sign up and  receive unique link/code",
        type: "decision",
      },{
        x: 480,
        y: 400,
        id: 4,
        width: 230,
        title: "Affiliates promote product on different channels",
        type: "operation",
      },
      {
        x: 480,
        y: 540,
        id: 5,
        width: 230,
        height: 230,
        title: "Customer clicks affiliate link \n and visits business website.",
        type: "decision",
      },{
        x: 480,
        y: 850,
        id: 6,
        width: 230,
        title: "Customer purchases product on the website",
        type: "operation",
      },{
        x: 840,
        y: 850,
        id: 7,
        width: 230,
        title: "Business tracks sale back to referring affiliate",
        type: "operation",
      },{
        x: 840,
        y: 990,
        id: 8,
        width: 230,
        title: "Business pays affiliate a sales commission ",
        type: "operation",
      },
      {
        x: 480,
        y: 990,
        id: 9,
        width: 230,
        height: 230,
        title: "Was the customer satisfied with the product?",
        type: "decision",
      },{
        x: 480,
        y: 850,
        id: 10,
        width: 230,
        title: "Customer becomes repeat buyer.",
        type: "operation",
      },
      {
        x: 50,
        y: 850,
        id: 11,
        width: 230,
        title: "Business improves or refunds for repeat business.",
        type: "operation",
      },
    ],
    conns: [
      {
        source: { id: 1, position: "bottom" },
        destination: { id: 2, position: "top" },
        type: "success",
      },
      {
        source: { id: 2, position: "right" },
        destination: { id: 3, position: "left" },
        type: "success",
      },{
        source: { id: 3, position: "bottom" },
        destination: { id: 4, position: "top" },
        type: "success",
      },{
        source: { id: 4, position: "bottom" },
        destination: { id: 5, position: "top" },
        type: "success",
      },{
        source: { id: 5, position: "bottom" },
        destination: { id: 6, position: "top" },
        type: "success",
      },{
        source: { id: 6, position: "right" },
        destination: { id: 7, position: "left" },
        type: "success",
      },{
        source: { id: 7, position: "bottom" },
        destination: { id: 8, position: "top" },
        type: "success",
      },{
        source: { id: 6, position: "bottom" },
        destination: { id: 9, position: "top" },
        type: "success",
      },{
        source: { id: 6, position: "bottom" },
        destination: { id: 8, position: "top" },
        type: "success",
      }
    ]
  }

}

export const chartSlice = createSlice({
  name: 'flowChart',
  initialState: initialChartState,
  reducers: {
    updateNodes: (state, action) => {
     
        state.nodes = action.payload
    },
    updateConnections: (state, action) => {
     
        state.conns = action.payload
    },
    clearChart: (state) =>{
      state.nodes = []
      state.conns = []
    }, 
    resetChart : (state)=>{
      state.conns = initialChartState.conns
      state.nodes = initialChartState.nodes
    }
  },
})

export const { updateNodes, updateConnections, clearChart, resetChart } = chartSlice.actions

export default chartSlice.reducer