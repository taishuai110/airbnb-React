import styled from "styled-components";

export const FooterWrapp = styled.div`
    display: flex;
    margin-top: 10px;

    .info {
        display: flex;
        cursor: pointer;
        align-items: center;

        font-size: 17px;
        font-weight: 700;
        color: ${ props => props.color };
        
        &:hover{ 
            text-decoration: underline;
        }

        .text {
            margin-right: 6px;
        }
    }
`