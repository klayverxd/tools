import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #DEE4E7;
        /* font-size: 14px; */
        color: #333;
        font-family: 'Poppins', 'Roboto', sans-serif;
    }
`
