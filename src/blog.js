import React from "react";
import styled from "styled-components";
import Layout, {
    Root,
    getHeader,
    getDrawerSidebar,
    getSidebarTrigger,
    getSidebarContent,
    getCollapseBtn,
    getContent,
    getInsetContainer,
    getInsetSidebar,
    getInsetFooter,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    HeaderMockUp,
    NavHeaderMockUp,
    NavContentMockUp,
    ContentMockUp,
    FooterMockUp,
} from "@mui-treasury/mockup/layout";

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const InsetContainer = getInsetContainer(styled)
const InsetSidebar = getInsetSidebar(styled)
const InsetFooter = getInsetFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
    builder
        .create("appHeader")
        .registerConfig("xs", {
            position: "sticky",
            initialHeight: 56,
        })
        .registerConfig("md", {
            position: "relative", // won't stick to top when scroll down
            initialHeight: 64,
        });
});

scheme.configureEdgeSidebar((builder) => {
    builder
        .create("primarySidebar", { anchor: "left" })
        .registerTemporaryConfig("xs", {
            width: "auto", // 'auto' is only valid for temporary variant
        });
});

scheme.configureInsetSidebar((builder) => {
    builder
        .create("secondarySidebar", { anchor: "right" })
        .registerFixedConfig("md", {
            width: 256,
        });
});

const Blog = () => {
    return (
        <Root scheme={scheme}>
            {({ state: { sidebar } }) => (
                <>
                    <CssBaseline />
                    <Header>
                        <Toolbar>
                            <SidebarTrigger sidebarId="primarySidebar" />
                            <HeaderMockUp />
                        </Toolbar>
                    </Header>
                    <DrawerSidebar sidebarId="primarySidebar">
                        <SidebarContent>
                            <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
                            <NavContentMockUp />
                        </SidebarContent>
                        <CollapseBtn />
                    </DrawerSidebar>
                    <Content>

                        <InsetContainer
                            rightSidebar={
                                <InsetSidebar sidebarId="secondarySidebar">
                                    <NavContentMockUp />
                                </InsetSidebar>
                            }
                        >
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged. It was popularised in the
                          1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                          recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum</p>
                        </InsetContainer>
                    </Content>
                    <InsetFooter>
                        <FooterMockUp />
                    </InsetFooter>
                </>
            )}
        </Root>
    );
};

export default Blog;