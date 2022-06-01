import styled from "styled-components";

import { v } from "../../Global/variables";

export const Container = styled.div`
    display: flex;
`
export const Main = styled.main`
    padding: calc(${v.mdSpacing} * 2);

    h1{
        font-weight: 500;
        font-size: 3.2rem;

        ::selection{
            background-color: ${({ theme }) => theme.primaryLight};
            color: ${({ theme }) => theme.textHoverLight};
        }
    }

`

