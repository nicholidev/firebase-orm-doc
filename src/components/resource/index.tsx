import React from 'react';
import styled from "styled-components";
import Container from "@site/src/styles/Container";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {resourceLinks} from "@site/src/data/actions";
import LinkCard from "@site/src/styles/LinkCard";

const Resource = () => {
    return (
        <ResourceWrap>
            <Container>
                <div className="grid">
                    <ThemedImage
                        sources={{
                            light: useBaseUrl('/img/code.jpg'),
                            dark: useBaseUrl('/img/code.jpg')
                        }}
                    />
                    <div
                        className="grid-horizontal"
                    >
                        <h2>Resource Links</h2>
                        {
                            resourceLinks.map((i, idx) => (
                                <LinkCard
                                    key={`link-card-${idx}`}
                                    data={i}
                                />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </ResourceWrap>
    );
};

const ResourceWrap = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }
  
  .grid-horizontal{
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }
`

export default Resource;
