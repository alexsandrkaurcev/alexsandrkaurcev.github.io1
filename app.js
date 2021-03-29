import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoot, View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App () {
  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>VKUI</PanelHeader>
          <Group header={<Header mode="secondary">Items</Header>}>
            <Cell>Hello</Cell>
            <Cell>World</Cell>
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol width="280px">
              <SideCol />
            </SplitCol>
            <SplitCol>
              <MainScreens />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

const MainScreens = () => {
  return (
    <View activePanel="profile">
      <Panel id="profile">Profile</Panel>
    </View>
  )
};

const SideCol = () => {
  return (
    <Panel id="nav">Navigation</Panel>
  );
};

<SplitLayout header={viewWidth >= ViewWidth.SMALL_TABLET && <PanelHeader separator={false} />}>
      {viewWidth === ViewWidth.DESKTOP &&
        <SplitCol width="280px">
          <Panel id="nav">Navigation</Panel>
        </SplitCol>
      }
      <SplitCol spaced={viewWidth >= ViewWidth.SMALL_TABLET} animate={viewWidth <= ViewWidth.MOBILE}>
        <View activePanel="profile">
          <Panel id="profile">Profile</Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  // ...
}

App = withAdaptivity(App, { viewWidth: true });
