import React, { Component } from 'react';
import './App.sass';
import { connect } from	'react-redux';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import { setYear } from	'../actions/pageOneAction'

class App extends Component {
  onBtnClick = event =>	{
    const	year = +event.currentTarget.innerText;
    // this.props.setYear(year)
    this.props.setYearAction(year);
  };

  render() {
    const	{	pageOne: {year, photos}, pageTwo: {name} } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>My top photo</h1>
        </header>
        <PageTwo name={name} />
        <PageOne
          photos={photos}
          year={year}
          onYear={this.onBtnClick}	/>
      </div>
    );
  }
}

const	mapStateToProps	=	store	=> {
  console.log(store);
  return {
    pageOne: store.pageOne,
    pageTwo: store.pageTwo,
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    setYearAction: year	=> dispatch(setYear(year)),
    //setYear:	year =>	dispatch(setYear(year))
  }
  // const	mapDispatchToProps = dispatch	=> ({
  //   setYearAction: year	=> dispatch(setYear(year)),
  // })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
