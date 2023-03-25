import{u as N,b as m,g as D,r as l,j as o,aJ as L,d as t,aa as T,l as g,S as s,H as U,T as u,B as k,I as f,e as d,b8 as F,c3 as j,c4 as B,c5 as H}from"./index.996e1d78.js";import{H as _}from"./Header.1469ec5c.js";import{P as q,a as n}from"./chakra-ui-pin-input.esm.368ea3af.js";import"./index.esm.f4b1d189.js";import"./index.esm.6756331e.js";function J(){const r=N(),x=m(e=>e.setUser),P=m(e=>e.setSessionExpired),p=D(),[i,S]=l.exports.useState(""),[c,C]=l.exports.useState(""),[h,I]=l.exports.useState(""),[b,w]=l.exports.useState(!1),[y,a]=l.exports.useState(!1),v=async()=>{if(!i||!c)return r({title:"Missing Details",description:"Please Fill in User ID & Password.",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});a(!0);try{const{data:e}=await j(i,c);if(a(!1),e.error)return r({title:"Error",description:e.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});w(!0),r({title:"OTP Sent",description:"Please check your mobile for OTP.",status:"success",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(e){a(!1),r({title:"Error",description:e.message,status:"error",duration:9e3,isClosable:!0,position:"bottom-right"})}},E=async()=>{if(!i||!c||!h)return r({title:"Error",description:"Please enter your User ID, PIN, OTP.",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});a(!0);try{const{data:e}=await B(i,c,h);e.status&&(P(!1),console.log(e.data),x(e.data),p("/")),e.status||r({title:"Error",description:e.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"}),a(!1)}catch(e){a(!1),r({title:"Error",description:e.message,status:"error",duration:3e3,isClosable:!0})}},O=async()=>{try{if(!i)return r({title:"Error",description:"Please enter your User ID or Phone.",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"});const{data:e}=await H(i);e.status&&r({title:"Success",description:e.message,status:"success",duration:3e3,isClosable:!0,position:"bottom-right"}),e.status||r({title:"Error",description:e.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(e){r({title:"Error",description:e.message,status:"error",duration:3e3,isClosable:!0})}};return o(L,{children:[t(_,{}),t(T,{minH:"100vh",align:"center",justify:"center",bg:g("gray.50","gray.800"),children:o(s,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[o(s,{align:"center",children:[t(U,{fontSize:"4xl",children:"Log in to your account"}),t(u,{fontSize:"lg",color:"gray.600",children:"to access your Dashboard"})]}),t(k,{rounded:"lg",bg:g("white","gray.700"),boxShadow:"lg",p:8,children:o(s,{spacing:4,children:[o(s,{direction:"column",spacing:1,children:[t(u,{children:"User ID or Phone"}),t(f,{type:"text",onChange:e=>S(e.target.value),placeholder:"Your User ID"})]}),o(s,{direction:"column",spacing:1,children:[t(u,{children:"PIN"}),t(f,{type:"password",placeholder:"Your PIN",onChange:e=>C(e.target.value)})]}),b&&o(s,{direction:"row",spacing:2,children:[t(u,{color:g("gray.600","gray.400"),sx:{alignSelf:"center"},children:"OTP"}),o(q,{onChange:e=>I(e),children:[t(n,{bg:"gray.600",color:"gray.100",border:4}),t(n,{bg:"gray.600",color:"gray.100",border:4}),t(n,{bg:"gray.600",color:"gray.100",border:4}),t(n,{bg:"gray.600",color:"gray.100",border:4}),t(n,{bg:"gray.600",color:"gray.100",border:4}),t(n,{bg:"gray.600",color:"gray.100",border:4})]})]}),o(s,{spacing:3,children:[o(s,{direction:"row",spacing:2,justifyContent:"space-around",children:[t(d,{bg:"blue.400",color:"white",_hover:{bg:"blue.500"},onClick:v,sx:{width:"100%"},isLoading:y,children:"SEND OTP"}),b&&t(d,{bg:"blue.400",color:"white",_hover:{bg:"blue.500"},sx:{width:"100%"},onClick:E,isLoading:y,children:"SIGN IN"})]}),t(d,{_hover:{bg:"green.800"},onClick:()=>p("/signup"),variant:"outline",children:"Not Registered? Sign up here"}),t(d,{_hover:{bg:"red.600"},onClick:O,variant:"outline",children:"Forgot PIN? Request here"})]})]})})]})}),t(F,{})]})}export{J as default};