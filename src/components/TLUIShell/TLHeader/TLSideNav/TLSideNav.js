import React from 'react';

import { Link } from 'react-router-dom';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

const TLSideNav = props => (
  <div className="container">
    <SideNav aria-label="Side navigation" expanded={props.isSideNavExpanded}>
      <SideNavItems>
        <SideNavMenu title="Library">
          <SideNavMenuItem element={Link} to="/">
            Dashboard
          </SideNavMenuItem>
          <SideNavMenuItem element={Link} to="/threats">
            Threats
          </SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu title="Frameworks">
          <SideNavMenuItem>Center for Internet Security (CIS)</SideNavMenuItem>
          <SideNavMenuItem>Cloud Security Alliance (CSA)</SideNavMenuItem>
          <SideNavMenuItem>FFIEC Handbooks</SideNavMenuItem>
          <SideNavMenuItem>NIST 800-53</SideNavMenuItem>
          <SideNavMenuItem>Trust Services Criteria (TSC)</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu title="Cloud Providers">
          <SideNavMenuItem>Amazon Web Services</SideNavMenuItem>
          <SideNavMenuItem>Google Cloud Computing Platform</SideNavMenuItem>
          <SideNavMenuItem>Microsoft Azure</SideNavMenuItem>
          <SideNavMenuItem>Oracle Cloud Infrastructure</SideNavMenuItem>
          <SideNavMenuItem>Alibaba Cloud</SideNavMenuItem>
          <SideNavMenuItem>IBM Cloud Foundations</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu title="Administration">
          <SideNavMenuItem>Library</SideNavMenuItem>
          <SideNavMenuItem>Frameworks</SideNavMenuItem>
          <SideNavMenuItem>Cloud Providers</SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  </div>
);

export default TLSideNav;
