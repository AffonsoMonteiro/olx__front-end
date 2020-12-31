import styled from 'styled-components'

export const Item = styled.div` 
    a {
        display:block;
        border: 1px solid #FFF;
        color: #000;
        margin: 10px;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        background-color: #FFF;
        transition: all ease .3s;

        &:hover {
            background-color: #EEE;
            border: 1px solid #CCC;
        }

        .itemImage img {
            width: 100%;
            border-radius: 5px;
        }

        .itemName {
            font-weight: bold;
        }
    }
 `