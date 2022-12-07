import styled ,{css} from "styled-components";

const types = {
    fighting: css` 
        background: #6D6027;
    background: -webkit-linear-gradient(to bottom, #D3CBB8, #6D6027);
    background: linear-gradient(to bottom, #D3CBB8, #6D6027);
`,
ground: css` 
        background: #6D6027;
    background: -webkit-linear-gradient(to bottom, #D3CBB8, #6D6027);
    background: linear-gradient(to bottom, #D3CBB8, #6D6027);
`,
dragon: css` 
        background: #a8ff78;
    background: -webkit-linear-gradient(to bottom, #78ffd6, #a8ff78);
    background: linear-gradient(to bottom, #78ffd6, #a8ff78);
`,
    grass: css` 
        background: #093028;
        background: -webkit-linear-gradient(to bottom, #237A57, #093028);
        background: linear-gradient(to bottom, #237A57, #093028);
`,
    poison: css` 
        background: #414d0b;
        background: -webkit-linear-gradient(to top, #727a17, #414d0b);
        background: linear-gradient(to top, #727a17, #414d0b);
`,

    fire: css` 
        background: #f12711;
        background: -webkit-linear-gradient(to bottom, #f5af19, #f12711);
        background: linear-gradient(to bottom, #f5af19, #f12711);
    `,
    water: css` 
        background: #2193b0;
    background: -webkit-linear-gradient(to top, #6dd5ed, #2193b0);
    background: linear-gradient(to top, #6dd5ed, #2193b0);
    `,
    electric: css` 
        background: #fffc00;
        background: -webkit-linear-gradient(to bottom, #ffffff, #fffc00);
        background: linear-gradient(to bottom, #ffffff, #fffc00);
    `,
    undefined:css`
        background: white;` 
}

export const GeneralContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


export const Spanstyled = styled.span `
    font-size: 2rem;
    color: white;

`
export const InputStyled = styled.input `
    padding: 10px;
    border-radius: 30px;
`


export const CardContainer = styled.div ` 
margin-top: 50px;
    height: 580px;
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 30px 25px;
    padding-bottom: 15px;
  
    ${props =>  types[props.color] }
    
`


export const Imgcontainer = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  text-align: center;
  background-color: white;
  border-radius: 80px;
  border: 1px yellow solid;
 

  & img {
    width: 240px;
    height: 260px;
    position: absolute;
    bottom: -14px;
    right: 0;
    left: -30px;
  }

`
export const InfoContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 50%;
  
    gap: 14px;



`
