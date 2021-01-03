import styled from 'styled-components'

export const PageArea = styled.div `


    form {
        background-color: #FFF;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 0 3px #999;

            .area {
            display: flex;
            align-items: center;
            padding: 10px;
            width: 500px;


            .area--title {
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-size: 14px;
                font-weight: bold;
            }

            .area--input {
                flex: 1;

                input, select, textarea {
                    width: 100%;
                    font-size: 14px;
                    padding: 8px;
                    border: 1px solid #DDD;
                    border-radius: 4px;
                    outline: none;
                    transition: all ease .4s;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }

                textarea {
                    height: 150px;
                    resize: none;
                }

                button {
                    border: 0;
                    background-color: #0089FF;
                    width: 100%;
                    outline: 0;
                    padding: 8px 10px;
                    border-radius: 4px;
                    color: #FFF;
                    font-size: 15px;
                    cursor: pointer;
                    transition: all ease .4s;

                    &:hover {
                        background: #006FCE;
                    }
                }
            }
        }
    }

    
`