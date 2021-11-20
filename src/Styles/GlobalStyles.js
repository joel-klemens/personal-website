import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{ 
    /* CSS HEX */
--laurel-green: #c8ccacff;
--dark-jungle-green: #232720ff;
--lavender-web: #dee5f7ff;
--pale-spring-bud: #d4dd9fff;
--dark-jungle-green-2: #232720ff;
--rocket-metallic: #847e7dff;
--grullo: #958f7bff;
--blue-yonder: #5674a6ff;
--black-olive: #363d37ff;
--grullo-2: #958f7bff;
//for about page cards
--organish: #c7935e;
--dark-transparent: rgb(62 49 36 / 60%); 

//color from spotify
--spotify: #181a1b;

/* CSS HSL */
--laurel-green: hsla(68, 24%, 74%, 1);
--dark-jungle-green: hsla(94, 10%, 14%, 1);
--lavender-web: hsla(223, 61%, 92%, 1);
--pale-spring-bud: hsla(69, 48%, 75%, 1);
--dark-jungle-green-2: hsla(94, 10%, 14%, 1);
--rocket-metallic: hsla(9, 3%, 50%, 1);

/* SCSS HEX */
$laurel-green: #c8ccacff;
$dark-jungle-green: #232720ff;
$lavender-web: #dee5f7ff;
$pale-spring-bud: #d4dd9fff;
$dark-jungle-green-2: #232720ff;
$rocket-metallic: #847e7dff;

/* SCSS HSL */
$laurel-green: hsla(68, 24%, 74%, 1);
$dark-jungle-green: hsla(94, 10%, 14%, 1);
$lavender-web: hsla(223, 61%, 92%, 1);
$pale-spring-bud: hsla(69, 48%, 75%, 1);
$dark-jungle-green-2: hsla(94, 10%, 14%, 1);
$rocket-metallic: hsla(9, 3%, 50%, 1);

/* SCSS RGB */
$laurel-green: rgba(200, 204, 172, 1);
$dark-jungle-green: rgba(35, 39, 32, 1);
$lavender-web: rgba(222, 229, 247, 1);
$pale-spring-bud: rgba(212, 221, 159, 1);
$dark-jungle-green-2: rgba(35, 39, 32, 1);
$rocket-metallic: rgba(132, 126, 125, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-right: linear-gradient(90deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-bottom: linear-gradient(180deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-left: linear-gradient(270deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-top-right: linear-gradient(45deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-bottom-right: linear-gradient(135deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-top-left: linear-gradient(225deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-bottom-left: linear-gradient(315deg, #c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);
$gradient-radial: radial-gradient(#c8ccacff, #232720ff, #dee5f7ff, #d4dd9fff, #232720ff, #847e7dff);

    --primary-color: #232720ff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #606060;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Monsterrat', sans-serif;
}
html, body {
    overflow-x: hidden;
    background-color: var(--background-color);
    color: var(--font-light-color);
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
    text-decoration: none;
}
span{
    color: var(--primary-color);
}
`;

export default GlobalStyle; 