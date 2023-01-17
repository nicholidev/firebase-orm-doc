import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Container from "@site/src/styles/Container";
import Hero from "@site/src/components/hero";
import ActionCard from "@site/src/styles/ActionCard";
import Row from "@site/src/styles/Row";
import {homeActions} from "@site/src/data/actions";
import Divider from '../styles/Divider';
import Resource from '../components/resource';
import AboutAuthor from "@site/src/components/author";


const Home = (): JSX.Element => {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout>
            <Head>
                <title>{siteConfig.title}</title>
                <meta property="description" content="Nicholi Jin's Blogs" />
                <meta property="og:image" content="image.png" />
            </Head>
            <main>
                <Hero/>

                <Container>
                    <Row
                        style={{
                            marginTop: -82
                        }}
                    >
                        {
                            homeActions.map((i, idx) => (
                                <ActionCard
                                    key={`action-card-${idx}`}
                                    data={i}
                                />
                            ))
                        }
                    </Row>
                </Container>

                <Divider/>

                <Resource/>

                <Divider/>

                <AboutAuthor/>

            </main>

        </Layout>
    );
}


export default Home
