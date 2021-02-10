import React from 'react';
import Search20 from '@carbon/icons-react/lib/search/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import TLSideNav from './TLSideNav';

const TLHeader = () => (
  <div className="container">
    <HeaderContainer
      render={(isSideNavExpanded, onClickSideNavExpand) => (
        <>
          <Header aria-label="Deloitte ThreatLibrary">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="Deloitte">
              [Cyber Risk Platform]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <Search20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <TLSideNav expanded={isSideNavExpanded} />
          </Header>
        </>
      )}
    />
  </div>
);

export default TLHeader;
