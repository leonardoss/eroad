import React from 'react';
import Layout from '../layouts';

import Modal from 'simple-react-modal';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.calendarWrapper = '';
    this.calendarize = '';
    this.state = {
      value: 'select',
      elem: '',
      currentYear: new Date().getFullYear()
    }
  }

  showModal = () => {
    this.setState({show: true})
  }
 
  closeModal = () => {
    this.setState({show: false})
  }

  handlerClickDay = elem => {
    this.setState({elem: elem});
    this.showModal();
  }

  changeColor = (className, elem) => {
    const classes = ['holiday', 'birthday', 'busy', 'anniversary'];
    const classList = elem.classList;

    //remove classes
    classes.map((item, index) => classList.contains(item) ? classList.remove(item) : '');

    //add new class
    classList.add(className);
  }
  
  handleSelectChange = event => {
    const className = event.target.value;

    this.setState({
      value: event.target.value
    });
    this.changeColor(className, this.state.elem);
  }
  
  handleChangeYear = action => {
    const year = action == 'prev' ? this.state.currentYear - 1 : this.state.currentYear + 1;

    this.setState({
      currentYear: year,
    });

    //clean calendarWrapper
    this.calendarWrapper.innerHTML = "";

    //render the new one with new year
    this.calendarize.buildYearCalendar(this.calendarWrapper, year);
  }

  componentDidMount = () => {
    const _this = this;
    this.calendarWrapper = document.getElementById('calendar');
    this.calendarize = new Calendarize();

    //create first calendar with currentYear
    this.calendarize.buildYearCalendar(this.calendarWrapper, this.state.currentYear);

    //bind click event to day div's
    const daysLink = document.querySelectorAll('.day');
    Array.from(daysLink).forEach(elem => {
      elem.addEventListener('click', (event) => {
        _this.handlerClickDay(elem);
      });
    });
  }

  render() {
    return (
      <Layout>
        <div>
          <div onClick={ () => this.handleChangeYear('prev') }>← PREV YEAR</div>
          <div onClick={ () => this.handleChangeYear('next') }>NEXT YEAR →</div>
          <div id="calendar"></div>
          <Modal show={this.state.show} onClose={this.closeModal}>
            <select id="selectTypeDay" onChange={ this.handleSelectChange } value={this.state.value}>
              <option value="">Select</option>
              <option value="holiday">Holiday</option>
              <option value="birthday">Birthday</option>
              <option value="busy">Busy</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </Modal>
        </div>
      </Layout>
    );
  }
}
export default Dashboard;
