import React from 'react';
import './App.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Layout, {
    Root,
    getHeader,
    getDrawerSidebar,
    getSidebarTrigger,
    getSidebarContent,
    getCollapseBtn,
    getContent,
    getFooter
} from '@mui-treasury/layout';

import { HeaderMockUp, NavHeaderMockUp, NavContentMockUp, ContentMockUp, FooterMockUp, } from '@mui-treasury/mockup/layout';

import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
//const Footer = FooterMockUp
const Footer = getFooter(styled)

const scheme = Layout();

scheme.configureHeader(builder => {
    builder.registerConfig('xs', {
        position: 'sticky',
    })
        .registerConfig('md', {
            position: 'relative', // won't stick to top when scroll down
        });
});

scheme.configureEdgeSidebar(builder => {
    builder
        .create('unique_id', { anchor: 'left' })
        .registerTemporaryConfig('xs', {
            anchor: 'left',
            width: 'auto', // 'auto' is only valid for temporary variant
        })
        .registerPermanentConfig('md', {
            width: 256, // px, (%, rem, em is compatible)
            collapsible: true,
            collapsedWidth: 64,
        });
});


const Dashboard = () => {
    return (
        <Root scheme={scheme}>
            <CssBaseline />
            <Header>

                <Toolbar><SidebarTrigger sidebarId="unique_id" ></SidebarTrigger>
                    Header</Toolbar>
            </Header>
            <DrawerSidebar sidebarId={'unique_id'}>
                <SidebarContent>
                    Sidebar content
        </SidebarContent>
                <CollapseBtn />
            </DrawerSidebar>
            <Content>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum</p>
                <Button variant="contained" color="primary">
                    Hello World
    </Button>
            </Content>
            <Footer>Footer</Footer>
        </Root>
    );
};
export default Dashboard;