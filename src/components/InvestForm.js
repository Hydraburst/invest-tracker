import React, { useState } from "react";
import styles from "./InvestForm.module.css";

const initialUserInput = {
  "current-savings": 1000,
  "yearly-contribution": 1000,
  "expected-return": 3,
  duration: 5,
};

export default function InvestForm(props) {
  // const [savings, setSavings] = useState("");
  // const [yearlySaving, setYearlySavings] = useState("");
  // const [invInterest, setInvInterest] = useState("");
  // const [invDuration, setInvDuration] = useState("");

  // const currentSavingsChangeHandler = (e) => {
  //   setSavings(e.target.value);
  // };
  // const yealrySavingChangeHandler = (e) => {
  //   setYearlySavings(e.target.value);
  // };

  // const invInterestChangeHandler = (e) => {
  //   setInvInterest(e.target.value);
  // };

  // const invDurationChangeHandler = (e) => {
  //   setInvDuration(e.target.value);
  // };

  const [userInput, setUserInput] = useState(initialUserInput);

  function inputChangeHandler(input, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: +value,
      };
    });
  }

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();

  
    props.onCalc(userInput);
   
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              name="currentSavings"
              type="number"
              id="current-savings"
              value={userInput["current-savings"]}
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput["yearly-contribution"]}
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={userInput["expected-return"]}
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput["duration"]}
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
