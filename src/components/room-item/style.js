import styled from "styled-components";

export const ItemWrapper = styled.div`

    .cover {
        padding: 66.66% 8px 0;
    }

    .desc {
        /* 接收数据 */
        color: ${props => props.verifycolor} ;
    }

    .name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .bottom {
        .MuiRating-icon {
            margin-right: -2px;
        }
    }
`