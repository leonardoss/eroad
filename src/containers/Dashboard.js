import React from 'react';
import Layout from '../layouts';

import Calendar from '../components/Calendar';
import CustomModal from '../components/Modal';

class Dashboard extends React.Component {
  constructor() {
    super();
    
    this.calendarWrapper = '';
    this.calendarize = new Calendarize();
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

    this.handleRemoveCategory(classList);

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
    const year = action == 'current' ? this.currentYear : (action == 'prev' ? this.state.currentYearCalendar - 1 : this.state.currentYearCalendar + 1);
    const eleCurrentYear = document.getElementById('wrapper-year-'+year);
    const allEleYear = document.querySelectorAll('.wrapper-year');

    this.setState({
      currentYearCalendar: year,
    });

    if ( eleCurrentYear == null ) {
      this.createYear(year);
    }
    
    allEleYear.forEach((ele) => {
      ele.style.display = 'none';
    });

    document.getElementById('wrapper-year-'+year).style.display = 'block';
  }

  bindClickEvent = eleYear => {
    const _this = this;

    //bind click event to day div's
    const daysLink = eleYear.querySelectorAll('.day');
    Array.from(daysLink).forEach(elem => {
      elem.addEventListener('click', (event) => {
        _this.handlerClickDay(elem);
      });
    });
  }

  createWrapperYear = (year, visible) => {
    const eleYear = document.createElement('div');
    
    eleYear.setAttribute('id', 'wrapper-year-'+year);
    eleYear.setAttribute('class', 'wrapper-year');
    eleYear.style.display = visible ? 'block' : 'none';
    this.calendarWrapper.appendChild(eleYear);

    return eleYear;
  }

  createYear = (year, visible) => {
    const eleYear = this.createWrapperYear(year, visible);

    this.calendarize.buildYearCalendar(eleYear, year);
    this.bindClickEvent(eleYear);
  }

  componentDidMount = () => {
    this.calendarWrapper = document.querySelector('#calendar-wrapper');

    this.createYear(this.state.currentYearCalendar, true);
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
