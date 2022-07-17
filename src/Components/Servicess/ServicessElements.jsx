import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;
    position: relative;
    padding: 0px 150px;
    margin-top: 0px;
    overflow: hidden;
    @media screen and (max-width: 750px) {
        padding: 0px 20px;
        margin-bottom: 0px;
    }
    @media screen and (max-width: 1024px) {
        margin-bottom: 100px;
    }
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`
export const Content = styled.div`
    flex: 8;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`
export const ContentHeader = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    @media screen and (max-width:750px) {
        margin-top: 20px;
        margin-bottom: 20px;

    }
    h3{
        font-size: var(--fz-xl);
        color: var(--slate);
    }
    span{
        font-size: var(--fz-sm);
        color: var(--slate);
    }
`
export const ContentCard = styled.div`
    width: 100%;
    height: 100%;
    flex: 8;
    display: flex;
    gap: 10px;
    padding: 20px;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`
export const Card = styled.div`
    flex: 1;
    background-color: var(--dark-navy);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    height: 350px;
    &:hover{
        background-color: var(--light-navy);
    }

`
export const Cardheader = styled.span`
    flex: 1;
    text-align: center;
    margin-bottom: 5px;
    padding: 0px 20px;
`
export const Skill = styled.div`
    flex: 8;
    display: flex;
    font-size: var(--fz-md);
    flex-wrap: wrap;
    div{
        margin: 10px 10px;
        display: flex;
    }
`
export const Logo = styled.div`
    
`
export const Other = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-size: var(--fz-sm);
    }
`