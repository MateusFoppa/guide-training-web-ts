import styled from "styled-components"

export const Container = styled.aside`
height: 6rem;

background-color: ${({ theme }) => theme.colors.green};

padding: 1rem 2rem;
overflow: hidden;

display: flex;
//flex-direction: row-reverse;
align-items: center;

h1{
  padding-right: 10rem;
}
nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      gap: 4rem;
    }

    li {
      a {
        width: max-content;
        position: relative;
        padding: 1rem;


        display: flex;
        align-items: center;
        gap: 2rem;



        span {
          color: ${({ theme }) => theme.colors.black};
          font-size: 1.9rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};

          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }
`
