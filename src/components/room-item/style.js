import styled from "styled-components";

export const ItemWrapper = styled.div`
    flex-shrink: 0;
    width: ${ props => props.$itemwidth };

    .cover {
        padding: 66.66% 8px 0;
    }

    .swiper {
        position: relative;
        cursor: pointer;

        &:hover {
            .control {
                display: flex;
            }
        }
        .control {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: none;
            justify-content: space-between;
            color: #fff;
            z-index: 1;
            
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

                &.right {
                    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                }
            }
        }
    }

    .desc {
        /* 接收数据 */
        color: ${props => props.$verifycolor} ;
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