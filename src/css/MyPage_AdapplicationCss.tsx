import { createGlobalStyle } from "styled-components";

const AdApplicationCss=createGlobalStyle`
   
     .AdContainer{
        width:100%;
        height:auto;
        margin-left:1.4vw;
        padding:3vw;
        border:1px solid #dbdbdb;
        border-radius:20px;
        
    }
    .TitleSpace{
        width:100%;
        display:flex;
        flex-direction:column;
        margin:2vw 0;
    }
    .AdImg{
        width:50%;
        height:300px;
        background-color:green;
        margin:2vw 0;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
    }
    .TagSpace{
        margin:2vw 0;
    }
    .Adurl{
        margin:2vw 0;
    }
    .buttonspace{
        margin-top:3vw;
        display:flex;
        justify-content:center;
    }
`;

export default AdApplicationCss;