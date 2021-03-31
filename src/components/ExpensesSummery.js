import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
const ExpensesSummary = ({expensecount,expensetotal}) =>{

     const expenseword = expensecount===1? 'expense' : 'expenses';
     const formattotal = numeral(expensetotal/100).format('0,0.00');
     return ( <div>
                    <h1>Viewing {expensecount} {expenseword} totalling Rs.{formattotal}</h1>
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