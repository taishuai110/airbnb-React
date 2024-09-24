import styled from "styled-components";

export const TabsWrapper = styled.div`
    .item {
        box-sizing: border-box;
        border: 0.5px solid #D8D8D8;
        flex-basis: 120px;
        flex-shrink: 0;
        padding: 14px 16px;
        margin-right: 14px;
        border-radius: 3px;
        font-size: 17px;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18)
        }

        &.active {
            color: #fff;
            background-color: #00848A;
        }
    }
`