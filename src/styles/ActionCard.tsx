import React from 'react';
import Link from "@docusaurus/Link";
import styled from "styled-components";
import {Icon} from '@iconify/react';

interface Props {
    data: any;
}

const ActionCard = (props: Props) => {
    const {data} = props

    return (
        <ActionCardWrap
            href={data.link}
        >
            <div>
                <Icon icon={data.icon} className="big"/>
                <Icon icon="material-symbols:arrow-outward" className="small"/>
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </ActionCardWrap>
    );
};

const ActionCardWrap = styled(Link)`
  width: 100%;
  border-radius: 24px;
  padding: 42px 32px;
  border: 1px solid var(--ifm-color-emphasis-200);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.5s;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;

    svg {
      width: 32px;
      height: 32px;

      &.small {
        width: 24px;
        height: 24px;
        color: #999;
        opacity: .5;
      }
    }
  }

  h3 {
    margin-bottom: 8px;
    color: var(--ifm-action-title);
  }

  p {
    margin-bottom: 6px;
    font-size: 14px;
    color: var(--ifm-action-subtitle);
  }

  :hover {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: all 0.5s;
  }
`

export default ActionCard;
