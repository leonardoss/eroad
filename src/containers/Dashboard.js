import React from 'react';
import Layout from '../layouts';

import Calendar from '../components/Calendar';
import CustomModal from '../components/Modal';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.calendarWrapper = '';
    this.calendarize = '';
    this.currentYear = new Date().getFullYear();
    this.classes = ['holiday', 'birthday', 'busy', 'anniversary'],
    
    this.state = {
      open: false,
      value: 'select',
      elem: '',
      currentYearCalendar: this.currentYear
    }
  }

  showModal = () => {
    this.setState({open: true})
  }
 
  closeModal = () => {
    this.setState({open: false})
  }

  handlerClickDay = elem => {
    this.setState({elem: elem});
    this.showModal();
  }

  changeColor = (className, elem) => {
    const classList = elem.classList;

    //remove classes
    this.handleRemoveCategory(classList);

    //add new class
    classList.add(className);
  }
  
  handleRemoveCategory = (classList) => {
    this.classes.map((item) => classList.contains(item) ? classList.remove(item) : '');
  }
  
  handleChangeCategory = event => {
    const category = event.currentTarget.getAttribute('category');
    
    this.setState({
      value: category
    });

    if(category == 'remove'){
      this.handleRemoveCategory(this.state.elem.classList);
    } else {
      this.changeColor(category, this.state.elem);
    }
  }
  
  handleChangeYear = action => {
    const _this = this;
    const year = action == 'current' ? this.currentYear : (action == 'prev' ? this.state.currentYearCalendar - 1 : this.state.currentYearCalendar + 1);

    this.setState({
      currentYearCalendar: year,
    });

    //clean calendarWrapper
    this.calendarWrapper.innerHTML = "";

    //render the new one with new year
    this.calendarize.buildYearCalendar(this.calendarWrapper, year);

    const daysLink = document.querySelectorAll('.day');
    Array.from(daysLink).forEach(elem => {
      elem.addEventListener('click', (event) => {
        _this.handlerClickDay(elem);
      });
    });
  }

  componentDidMount = () => {
    const _this = this;
    this.calendarWrapper = document.getElementById('calendar');
    this.calendarize = new Calendarize();

    //create first calendar with currentYearCalendar
    this.calendarize.buildYearCalendar(this.calendarWrapper, this.state.currentYearCalendar);

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
          <Calendar 
            handleChangeYear={this.handleChangeYear}
          />
          <CustomModal 
            open={this.state.open}
            closeModal={this.closeModal}
            handleChangeCategory={this.handleChangeCategory}
            value={this.state.value}
          />
        </div>
      </Layout>
    );
  }
}
export default Dashboard;
