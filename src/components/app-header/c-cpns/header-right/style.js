import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    margin-right: 20px;

    .btns {
        display: flex;
        align-items: center;
        color: ${ props => props.theme.isAlpha ? "#fff" : "#484848" };

        .btn {
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            cursor: pointer;
            border-radius: 22px;

            &:hover {
                background-color: ${ props => props.theme.isAlpha ? "rgba(255, 255, 255, .1)" : "#f5f5f5" };
            }
        }
    }

    .profile {
        position: relative;
        display: flex;
        width: 77px;
        height: 42px;
        align-items: center;
        justify-content: space-evenly;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        color: #999;
        cursor: pointer;

        transition: box-shadow 0.2s ease;

        &:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18)
        }

        .panel {
            position: absolute;
            right: 0;
            top: 54px;
            width: 240px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px rgba(0, 0, 0, .2);
            color: 666;

            .top, .bottom {
                padding: 10px 0;

                .item {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;

                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }

            .top {
                border-bottom: 1px solid #ddd;
            }
        }
    }
`