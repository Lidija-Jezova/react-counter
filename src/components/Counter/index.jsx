import React, { useState, useRef } from 'react'
import styles from './Counter.module.css'

function Counter() {
	const [counter, setCounter] = useState(0)
	const counterRef = useRef()
	const [isReseted, setIsReseted] = useState(true)
	let message = ''

	if (counterRef.current > counter) message = "Lower"
	if (counterRef.current < counter) message = "Higher"

	counterRef.current = counter

	const increase = () => {
		setCounter(prev => prev + 1)
		setIsReseted(false)
	}

	const decrease = () => {
		setCounter(prev => prev - 1)
		setIsReseted(false)
	}

	const reset = () => {
		message = ''
		setCounter(0)
		setIsReseted(true)
	}

	return (
		<div className={styles.counter}>
			<div className={styles.message}>
				{!isReseted
					?
					`${message} than previous`
					:
					<span className={styles.emoji}>💤</span>
				}
			</div>
			<h1 className={styles.number}>{counter}</h1>
			<div className={styles.buttons}>
				<button onClick={decrease}>-</button>
				<button onClick={increase}>+</button>
			</div>
			<button className={styles.reset} onClick={reset}>Reset</button>
		</div>
	)
}

export default Counter