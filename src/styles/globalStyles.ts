import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	background-color: var(--primary-bg-color);
}

html, body, #root {
    font-size: 14px;
    width: 100%;
    height: 100%;
}

@media (min-width: 360px) and (max-width: 780px) {
    html{
        font-size:10px
    }
}

.flex {
    display: flex;
}
.flex-column {
    flex-direction: column;
}
.flex-center {
    align-items: center;
}
.flex-justify {
    justify-content: space-between;
}
.flex-justify-center{
    justify-content: center;
}
.flex-justify-end{
    justify-content: flex-end;
}
.width-100{
    width:100%
}

:root{
    --primary-bg-color: #131319;
    --secondary-bg-color: #27292d;
    --ternary-bg-color: #191920;
    --button-bg-color: #4a96ff;
    --button-hover-bg-color: #66b2ff;
    --avatar-bg-color: #eeeeee;
    --overlay-bg-color: rgba(0, 0, 0, 0.5);
    --primary-popup-bg-color: #343434;
    --secondary-popup-bg-color: #969696;
    --primary-text-color: #ffffff;
    --secondary-text-color: #c5c7ca;
    --ternary-text-color: #7f8084;
    --quartnery-text-color: #6b6c70;
    --primary-border-color: #ffffff;
    --secondary-border-color: rgba(0, 0, 0, 0.1);
    --input-border-color: #35373b;
    --input-outline-color: #3399ff;
    --box-shadow-color: rgba(0, 0, 0, 0.15);
    --danger-color: #d32f2f;

    --mobile-break-point: 480px;
    --tablet-break-point: 768px;
    --desktop-break-point: 1024px;
}

`;

export default GlobalStyle;
