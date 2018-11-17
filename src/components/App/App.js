import React, { Component } from 'react';
import './App.css';
import * as PageService from '../../services/pages';
import Composer from '../Composer/Composer';
import Logger from '../../utils/logger';

class App extends Component {

  state = {
    pages: [],
    currentPage: 0,
    lastPage: false
  }

  async componentDidMount() {
    // Fetch first page
    await this.fetchPage(0);
  }

  fetchPage = async (number) => {
    const {
      pages,
    } = this.state;
    const page = await PageService.getPage(number);
    this.setState({
      pages: [...pages, page]
    });
  }

  next = async () => {
    let {
      currentPage,
      pages,
      lastPage
    } = this.state;

    try {
      // Shortly brief about logic is
      // Try to fetch next pages until the currentPage count sets 0
      // When server returns Error we reset count

      // Fetch pages lazy and increase
      if ( !lastPage ) {
        await this.fetchPage(currentPage + 1);
        ++currentPage
        this.setState({
          currentPage
        });
      } else {
        // Reset currentPage exceed pages length
        if ( currentPage + 1 >= pages.length) {
          // Refresh component trick
          // TODO: Find better approach
          setTimeout(() => {
            this.setState({
              currentPage: 0
            });
          }, 10);
        } else {
          // Increase pager witouth fetching
          ++currentPage
          this.setState({
            currentPage
          });
        }
      }
      
    } catch(e) {
      // When page limit is Execeed start looping witouth fetching
      this.setState({
        lastPage: true
      });
      this.next();
      Logger.warn({
        message: 'Next page not found'
      })
    }
  }

  render() {
    const {
      pages,
      currentPage
    } = this.state;

    return (
      <div className="App">
        {
          pages.length > 0 && pages.map((page, index) => <Composer 
            key={index}
            page={page}
            actionsFinished={this.next}
          />).filter((page, index) => index === currentPage)
        }
      </div>
    );
  }
}

export default App;
