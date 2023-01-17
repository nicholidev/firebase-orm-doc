import React from 'react';
import Link from "@docusaurus/Link";
import styled from "styled-components";
import {Icon} from '@iconify/react';

interface Props {
    data: any;
}

const LinkCard = (props: Props) => {
    const {data} = props

    return (
        <ActionCardWrap
            href={data.link}
        >
            <Icon icon={data.icon} className="big"/>
            <h5>{data.title}</h5>
            <Icon icon="material-symbols:arrow-outward" className="small"/>
        </ActionCardWrap>
    );
};

const ActionCardWrap = styled(Link)`
  width: 100%;
  border-radius: 12px;
  padding: 22px 32px;
  border: 1px solid var(--ifm-color-emphasis-200);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  grid-gap: 24px;
  position: relative;

  svg {
    width: 32px;
    height: 32px;
  }

  h5 {
    color: var(--ifm-action-title);
    margin-bottom: 0;
  }
  
  .small {
    position: absolute;
    right: 20px;
    top: 15px;
    width: 24px;
    height: 24px;
    color: #999;
    opacity: .5;
  }

  :hover {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: all 0.5s;
  }
`

export default LinkCard;
