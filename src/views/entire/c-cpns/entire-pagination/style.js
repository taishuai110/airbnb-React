import styled from "styled-components";


export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .MuiPaginationItem-page {
            margin: 0 9px;

            &:hover {
                text-decoration: underline;
            }
        }

        .MuiPaginationItem-icon {
                font-size: 24px;
        }

        /* 覆盖ui组件的样式 */
        .MuiPaginationItem-page.Mui-selected {
            background-color: #222;
            color: white;
        }

        .desc {
            margin-top: 16px;
        }
    }
`