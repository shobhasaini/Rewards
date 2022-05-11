import React from 'react';

const MonthlyRewards = (props) => {
    const recordsList = props.records.map((customerRecord) => {
        let totalQuarterlyRewards = 0;
        return (
            <div>
                <h2>{customerRecord['cust-name']}'s Monthly Rewards Log</h2>
                { 
                    customerRecord['monthly-transactions'].map((mTransaction) => {
                        let totalMonthlyRewards = 0;
                        return (
                            <div>{
                                mTransaction['transactions'].map((trans) => {
                                    const amount = trans['transaction-amount'];
                                    let reward = 0;
                                    if (amount < 100 && amount > 50) {
                                        reward = amount - 50;
                                    } else if (amount > 100) {
                                        reward = 2 * (amount - 100) + 50;
                                    }
                                    totalMonthlyRewards += reward;
                                    totalQuarterlyRewards += reward;
                                })
                            }
                            <hr />
                            <p>{mTransaction['month-name']} total rewards: {totalMonthlyRewards}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <p className="total-rewards">Quarterly Rewards Total: {totalQuarterlyRewards}</p>
                <hr />
            </div>
        );
    });
    return (
      <div>{recordsList}</div>  
    );
};

export default MonthlyRewards;