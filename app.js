import React from 'react';
import { View, Panel, ConfigProvider } from '@vkontakte/vkui';
import vkBridge from '@vkontakte/vk-bridge';

class App extends React.Component {

  state = {
    activePanel: 'main',
    history: ['main']
  }

  goBack = () => {
    const history = [...this.state.history];
    history.pop();
    const activePanel = history[history.length - 1];
    if (activePanel === 'main') {
      vkBridge.send('VKWebAppEnableSwipeBack');
    }
    this.setState({ history, activePanel });
  }

  goForward = (activePanel) => {
    const history = [...this.state.history];
    history.push(activePanel);
    if (this.state.activePanel === 'main') {
      vkBridge.send('VKWebAppDisableSwipeBack');
    }
    this.setState({ history, activePanel });
  }

  render () {
    return (
      <ConfigProvider isWebView={true}>
        <View
          onSwipeBack={this.goBack}
          history={this.state.history}
          activePanel={this.state.activePanel}
        >
          <Panel id="main"/>
          <Panel id="profile"/>
          <Panel id="education"/>
        </View>
      </ConfigProvider>
    )
  }
}
