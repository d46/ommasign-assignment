import React, { Component } from 'react';
import './Menuboard.css';
import Composer from '../Composer/Composer';
import Logger from '../../utils/logger';
import * as easings from '../../utils/easings';
import anime from 'animejs';

class Menuboard extends Component {

  state = {
    pages: [],
    currentPage: 0,
    lastPageFetched: false
  }

  componentDidMount() {
    this.loadEasings();
    this.initialFetch();
  }

  async initialFetch() {
    const {
      pages
    } = this.props;
    // If received pages from props skip fetching
    if (pages.length > 0) {
      this.setState({
        pages,
        lastPageFetched: true
      });
    } else {
      await this.fetchPage(0);
    }
  }

  loadEasings() {
    // Set extended easing animations
    for (let easing in easings) {
      anime.easings[easing] = easings[easing];
    }
  }

  fetchPage = async (pageIndex) => {
    const {
      pages,
    } = this.state;
    const page = await this.props.nextPage(pageIndex)
      .catch(error => Logger.error(error));

    if (page.hasOwnProperty('page') && page.hasOwnProperty('nextPage') && page.hasOwnProperty('scene')) {
      this.setState({
        pages: [...pages, page]
      });
    }
  }

  next = async () => {
    let {
      currentPage,
      pages,
      lastPageFetched
    } = this.state;

    try {
      // Shortly brief about logic is
      // Try to fetch next pages until the currentPage count sets 0
      // When server returns Error we reset count

      // Fetch pages lazy and increase
      if (!lastPageFetched) {
        await this.fetchPage(currentPage + 1);
        ++currentPage
        this.setState({
          currentPage
        });
      } else {
        // Reset currentPage exceed pages length
        if (currentPage + 1 >= pages.length) {
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

    } catch (e) {
      // When page limit is Execeed start looping witouth fetching
      this.setState({
        lastPageFetched: true
      });
      this.next();
      Logger.warn({
        message: 'Next page not found'
      })
    }
  }

  getTimeline() {
    // Create timeline instance
    const timeline = anime.timeline();

    // Set timeline instance to the state
    return timeline;
  }

  render() {
    const {
      pages,
      currentPage
    } = this.state;

    return (
      <div className="Menuboard">
        {
          pages.length > 0 && pages.map((page, index) => <Composer
            key={index}
            page={page}
            next={this.next}
            timeline={this.getTimeline()}
          />).filter((page, index) => index === currentPage)
        }
      </div>
    );
  }
}

export default Menuboard;
