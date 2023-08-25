import React from "react";
import styles from "./Table.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  maximumSignificantDigits: 2,
});

export default function Table(props) {
  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((list) => (
            <tr key={list.year}>
              <td>{list.year}</td>
              <td>{formatter.format(list.savingsEndOfYear)}</td>
              <td>{formatter.format(list.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  list.savingsEndOfYear -
                    props.initialInvestment -
                    list.yearlyContribution * list.year
                )}
              </td>
              <td>
                {formatter.format(props.initialInvestment + list.yearlyContribution * list.year)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
