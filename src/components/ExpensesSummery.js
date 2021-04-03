import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
const ExpensesSummary = ({expensecount,expensetotal}) =>{

     const expenseword = expensecount===1? 'expense' : 'expenses';
     const formattotal = numeral(expensetotal/100).format('0,0.00');
     return (
        <div className='page-header'>
            <div className='content-container'>
                    <h1 className='page-header__title'>Viewing <span>{expensecount} </span> {expenseword} totalling<span> Rs.{formattotal}</span> </h1>
                    <div className='page-header__actions'>
                        <Link className='button' to='/create'>Add Expense</Link>
                    </div>
            
            </div>
        </div>
            );
    
}
const mapStateToProps = (state) =>{
  
    const visibleExpenses = selectExpenses(state.expenses,state.filters);

    return {
        expensecount : visibleExpenses.length ,
        expensetotal : selectExpensesTotal(visibleExpenses)
    };

}
export default connect(mapStateToProps)(ExpensesSummary);