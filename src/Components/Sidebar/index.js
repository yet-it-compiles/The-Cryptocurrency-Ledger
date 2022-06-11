import { useContext, useState } from "react";
import { Bar, Divider, PageLink, PageContainer, PageIcon, PageLabel, Logo, Search, SearchIcon, Theme, ThemeLabel, ThemeToggle, ToggleBtn, SidebarBtn, ThemeIcon } from "./sidebar-elements"
import { logo, searchIcon, dashbaordIcon, portfolioIcon, graphIcon, alarmIcon, simTradingIcon, newsIcon, notesIcon, settingsIcon, signOutIcon, sideBarBtn, sun } from "../../Assets/Images/Dashboard";
import { ThemeContext } from "../Dashboard/index";

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Bar isOpen={sidebarOpen}>
      <>
        <SidebarBtn style={theme === 'light' ? {} : {background: `#fff`} } isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p )}>
          <img src={sideBarBtn} alt="sidebar button"/>
        </SidebarBtn>
      </>
      <Logo>
        <img src={ logo } alt="logo" />
      </Logo>
      
      <Search style={!sidebarOpen ? {width: `fit-content`} : {}}>
        <SearchIcon>
          <img src={searchIcon} alt="search icon"/>
        </SearchIcon>
        <input placeholder="Search Crypto" style={!sidebarOpen ? {width: 0, padding: 0} : {}}/>
      </Search>
      {pageArr.map(({icon, label, to}) => (
        <PageContainer key={label}>
          <PageLink to={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>
            <PageIcon>{icon}</PageIcon>
            {sidebarOpen && (
              <>
                <PageLabel>{label}</PageLabel>
              </>
            )}
          </PageLink>
        </PageContainer>
      ))}

      {secondaryPageArr.map(({icon, label, to})=> (
        <PageContainer key={label}>
          <PageLink to={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>
            <PageIcon>{icon}</PageIcon>
            {sidebarOpen && <PageLabel>{label}</PageLabel>}
          </PageLink>
        </PageContainer>
      ))}
      <Divider/>
      <Theme>
        {sidebarOpen && <ThemeLabel>{theme === 'light' ? "Dark Mode" : "Light Mode"}</ThemeLabel>}
        
          <ThemeToggle isActive={theme === 'dark'} onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}>
            <ToggleBtn style={theme === 'dark' ? {right: ".1rem"} : {}}/>
          </ThemeToggle>
      </Theme>
    </Bar>
  );
};

const pageArr = [
  {
    label: "Dashboard",
    icon: <img src={dashbaordIcon} alt="dashboard icon"/>,
    to: "/dashboard",
  },
  {
    label: "Portfolio",
    icon: <img src={portfolioIcon} alt="portfolio icon"/>,
    to: "/portfolio",
  },
  {
    label: "Charts",
    icon: <img src={graphIcon} alt="charts icon"/>,
    to: "/charts",
  },
  {
    label: "Alarms",
    icon: <img src={alarmIcon} alt="alarms icon"/>,
    to: "/alarms",
  },
  {
    label: "Simulated Trading",
    icon: <img src={simTradingIcon} alt="simulated trading icon"/>,
    to: "/simulated-trading",
  },
  {
    label: "News",
    icon: <img src={newsIcon} alt="news icon"/>,
    to: "/news",
  },
  {
    label: "Notes",
    icon: <img src={notesIcon} alt="notes icon"/>,
    to: "/notes",
  },

];

const secondaryPageArr = [
  {
    label: "Settings",
    icon: <img src={settingsIcon} alt="settings icon"/>,
    to: "/settings",
  },
  {
    label: "Logout",
    icon: <img src={signOutIcon} alt="logout icon"/>,
    to: "/",
  },
]

export default Sidebar;