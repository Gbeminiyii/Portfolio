import styled from "styled-components";


export const Mobile = styled.div`
    display: ${props => (props.Mobile ? 'flex':'none')};;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin: auto 40px;
    padding: 10px;
    width: 100%;
    background-color: transparent;
`

export const Container = styled.div`
    animation: fadeInTop 0.7s;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: transparent;
    display: ${props => (props.Mobile ? 'none':'flex')};;
    align-content: center;
    justify-content: center;
    z-index: 11;
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
    transition: all 700ms ease-out;
`
export const Wrapper = styled.div`
    display: ${props => (props.Mobile ? 'none':'flex')};
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin: auto 40px;
    padding: 30px;
    width: 100%;
    background-color: transparent;
`
export const Logo = styled.h3`
    animation: fadeInTop 850ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    color: var(--green);
    cursor: pointer;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
`
export const MenuItems = styled.ul`
    animation: fadeInTop 800ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    display: flex;
    list-style: none;
`
export const Item = styled.li`
    animation: fadeInTop 900ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    margin-left: 40px;
    font-size: var(--fz-sm);
    &::before{
        content: '';
        display: inline-block ;
        border: 1px solid var(--green);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &:hover{
        color: var(--green);
    }
`
export const Itemm = styled.li`
    animation: fadeInTop 950ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    margin-left: 40px;
    font-size: var(--fz-sm);
    &::before{
        content: '';
        display: inline-block ;
        border: 1px solid var(--green);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &:hover{
        color: var(--green);
    }
`
export const Itemmm = styled.li`
    animation: fadeInTop 1000ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    margin-left: 40px;
    font-size: var(--fz-sm);
    &::before{
        content: '';
        display: inline-block ;
        border: 1px solid var(--green);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &:hover{
        color: var(--green);
    }
`
export const Itemmmm = styled.li`
    animation: fadeInTop 1050ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    margin-left: 40px;
    font-size: var(--fz-sm);
    &::before{
        content: '';
        display: inline-block ;
        border: 1px solid var(--green);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &:hover{
        color: var(--green);
    }
`
export const Button = styled.button`
    animation: fadeInTop 1100ms;
    @keyframes fadeInTop {
        from{
            opacity: 0;
            transform: translateY(-100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    margin-left: 40px;
    padding: 10px 19px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    transition: all 200ms ease-in;
    &:hover{
        background-color: var(--green-tint);
        transition: all 200ms ease-in;
    }
`
export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 90%;
    max-width: 250px;
    top: 0;
    right: 0;
    background-color: var(--dark-navy);
    height: 100vh;
    z-index: 100;
    transform: translateX${props => (props.Mobile && props.Open ? '(0%)':'(100%)')};
    transition: 0.3s ease transform;
    overflow: hidden;
    div{
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 5px 5px;
        border-radius: 4px;
        background-color: transparent;
        border: 1px solid var(--navy);
        color: var(--light-slate);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover{
         color: var(--white);
        }

    }
    ul li{
            display: block;
            background-color: transparent;
            text-align: center;
            width: 100%;
            margin: 0.5rem 0;
            a{
                display: block;
                font-size: var(--fz-md);
                width: 100%;
                margin-bottom: 20px;
                &:hover{
                    color: var(--green);
                }
            }
        }
    button{
    padding: 10px 19px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    transition: all 200ms ease-in;
    &:hover{
        background-color: var(--green-tint);
        transition: all 200ms ease-in;
    }
    }
`